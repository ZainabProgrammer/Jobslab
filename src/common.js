import { useState } from "react";
export const PasswordNotMatched = (password, repeatPassword) => {
  const [passwordError, setpasswordError] = useState("");
  if (password !== repeatPassword) {
    setpasswordError("Password not matched!");
  }
};
