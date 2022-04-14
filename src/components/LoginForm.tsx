import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth-slice";
import isEmailAddress from "../util/emailValidation";
import isPassword from "../util/passwordValidation";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [haveError, setHaveError] = useState<string>("");
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setHaveError("");
    const emailInput = emailInputRef.current!.value;
    const passwordInput = passwordInputRef.current!.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLox3KkuJd-UzRXVmiOlLRpU8T-amktiU";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error("Email or password is not valid");
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
  const createNewAccountHandler = () => {
    navigate("/register");
  };
  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      {haveError !== "" && <p style={{ color: "red" }}>{haveError}</p>}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={createNewAccountHandler}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
