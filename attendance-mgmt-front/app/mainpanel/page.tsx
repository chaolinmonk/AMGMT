import ButtonNavBar from "@/components/buttons/navbar"
import Caluga from "@/components/calugas/caluga"
export default function MainPanel(){

  return(
    <div id="panel" 
    className="
    h-screen w-screen bg-slate-100
    grid grid-cols-5 grid-rows-13 
    font-sans
    ">
      {/* Title */}
      <div className="row-span-1 col-span-5 bg-indigo-900 flex justify-start">
        <p>AssistanceMGMT</p>
      </div>
      {/* Barra Navegación */}
      <div className="col-span-1 row-span-12 col-start-1 row-start-2 bg-slate-300">
        <ButtonNavBar to="login" label="Al asdasdasdlogin"></ButtonNavBar>
      </div>
      {/* Panel Principal */}
      <div className=" col-span-4 row-span-12 col-start-2 row-start-2 bg-slate-200 grid grid-rows-6 grid-cols-1">
        <div className="row-span-2 bg-slate-300 grid grid-cols-3 grid-rows-1">
          <div className="col-span-2 bg-slate-300 grid grid-cols-1 grid-rows-5">
            <div className="row-span-2 text-3xl font-bold text-slate-950 flex justify-center items-end"><p>Tiempo trabajado</p></div>
            <div className="row-span-2 text-5xl text-slate-950 flex justify-center items-center"><p>00:00:00</p></div>
          </div>
          <div className="col-span-1 bg-slate-300 flex flex-col justify-center items-center gap-20">
            <button type="button" className="bg-slate-400 w-3/8 py-2 rounded text-slate-950">Entrada</button>
            <button type="button" className="bg-indigo-900 w-3/8 py-2 rounded">Salida</button>
          </div>
        </div>
        <div className="row-span-4 bg-slate-200 flex justify-center items-center">
          <div className="grid w-3/4 h-full grid-cols-1 grid-rows-4">
          <div className="row-span-1 grid grid-cols-3 grid-rows-1 place-items-center">
            <Caluga label="Tiempo trabajado" valor={"08:30:12"}></Caluga>
            <Caluga label="Tiempo trabajado" valor={"08:30:12"}></Caluga>
            <Caluga label="Tiempo trabajado" valor={"08:30:12"}></Caluga>
          </div>
          <div className="row-span-3 bg-amber-900">

          </div>

          </div>
        </div>
      </div>
    </div>
  )
}