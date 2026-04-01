import { forwardRef } from "react";
import { isEmail } from "./InputBehavior";

const EmailInput = forwardRef<HTMLInputElement, any>(
  ({ value = "", style, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`${style} ${isEmail(value)}`}
      />
    );
  }
);

export default EmailInput;