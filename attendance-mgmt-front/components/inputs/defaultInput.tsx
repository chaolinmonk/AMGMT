import { forwardRef } from "react";

const DefaultInput = forwardRef<HTMLInputElement, any>(
  ({ style, ...props }, ref) => {
    return <input ref={ref} {...props} className={style} />;
  }
);

export default DefaultInput;