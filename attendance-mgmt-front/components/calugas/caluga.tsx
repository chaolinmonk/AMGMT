
type props = {
  label:string
  valor:string;
}  

export default function Caluga(
    {
    label,
    valor
    }  :props
){
  return(
    <div className="rounded grid grid-rows-2 bg-slate-300 w-2/3 h-2/3 text-slate-900 font-bold">
      <div className="flex justify-center items-center row-span-1">
        <p>{label}</p>
      </div>
      <div className="flex justify-center items-center row-span-1">
        <p>{valor}</p>
      </div>
    </div>
  )
} 