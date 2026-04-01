export default function MainPanel(){

  return(
    <div id="panel" 
    className="
    h-screen w-screen bg-slate-100
    grid grid-cols-5 grid-rows-13 
    ">
      {/* Title */}
      <div className="row-span-1 col-span-5 bg-indigo-900 flex justify-start">
        <p>AssistanceMGMT</p>
      </div>
      {/* Barra Navegación */}
      <div className="col-span-1 row-span-12 col-start-1 row-start-2 bg-slate-300">

      </div>
      {/* Barra Navegación */}
      <div className="col-span-4 row-span-12 col-start-2 row-start-2 bg-slate-200">
        
      </div>
    </div>
  )
}