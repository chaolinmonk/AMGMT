import Link from "next/link";

type props = {
  to:string;
  label:string
}  

export default function ButtonNavBar(
  {
  to,
  label
  }:props  
){
  return(
    <Link
    className="flex justify-start items-center w-full py-2 col-span-1 "
    href={`/${to}`}
    >
      <p className="ml-5 text-2xl font-light text-slate-900">{label}</p>
    </Link>
  ); 
}