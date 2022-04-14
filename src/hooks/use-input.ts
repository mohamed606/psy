import { useState } from "react";

function useInput(intialValue: any) {
  const [input, setInput] = useState<any>(intialValue);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof input === "string") {
      setInput(event.target.value);
    } else if(typeof input === "number"){
        setInput(+event.target.value);
    }
  };

  return [input, inputChangeHandler];
}

export default useInput;
