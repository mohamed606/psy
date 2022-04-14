import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import isEmailAddress from "../util/emailValidation";
import isPassword from "../util/passwordValidation";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [haveError, setHaveError] = useState<string>('');

  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredEmailTouched, setEnteredEmailTouched] =
    useState<boolean>(false);

  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] =
    useState<boolean>(false);

  const isEnteredEmailValid = isEmailAddress(enteredEmail);
  const isInputEmailInvalid = !isEnteredEmailValid && enteredEmailTouched;

  const isEnteredPasswordValid = isPassword(enteredPassword);
  const isInputPasswordInvalid =
    !isEnteredPasswordValid && enteredPasswordTouched;

  const isFormValid = isEnteredEmailValid && isEnteredPasswordValid;

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const emailInputBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputBlurHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setEnteredPasswordTouched(true);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setHaveError('');
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLox3KkuJd-UzRXVmiOlLRpU8T-amktiU";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            if(data.error.message === 'EMAIL_EXISTS'){
              throw new Error("Email already exists");
            }
            throw new Error(data.error.message);
          });
        } else {
          return response.json().then((data) => {
            dispatch(authActions.login(data.idToke));
            navigate("/", {replace: true});
          });
        }
      })
      .catch((error) => {
        setHaveError(error.message);
      });
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const emailInputCalss = `${classes.control} ${
    isInputEmailInvalid && classes.invalid
  }`;
  const passwordInputCalss = `${classes.control}  ${
    isInputPasswordInvalid && classes.invalid
  }`;
  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      {haveError !== '' && <p style={{color: 'red'}}>{haveError}</p>}
      <form onSubmit={onSubmitHandler}>
        <div className={emailInputCalss}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            required
          />
          {isInputEmailInvalid && <p>Please enter a valid email.</p>}
        </div>
        <div className={passwordInputCalss}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            required
          />
          {isInputPasswordInvalid && (
            <p>
              Please enter valid password: 6-16 charachters that include
              charachters, special sympols and numbers
            </p>
          )}
        </div>
        <div className={classes.actions}>
          <button disabled={!isFormValid}>Create Account</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={loginHandler}
          >
            Login with existing account
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
