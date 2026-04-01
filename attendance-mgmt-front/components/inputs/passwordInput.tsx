import { isEmail } from "./InputBehavior"

type props = {
  value:string;
  type:string;
  placeholder?:string;
  onChange:(value: string) => void;
  style:string;
}
export default function EmailInput(
  {
    value,
    type,
    placeholder,
    onChange,
    style
  }:props){
  
  return(
      <input 
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e)=> onChange(
        e.target.value
      )}
      className={`${style} ${isEmail(value)}`}
      />
    )
  }