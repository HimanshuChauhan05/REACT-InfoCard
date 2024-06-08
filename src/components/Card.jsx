import React from "react";

function Card({user, handleRemove,id} ) {
  return <>
    
      <div className="w-52 h-full bg-zinc-100  flex flex-col items-center rounded-lg p-2">
        
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>
      <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
      <h1 className="opacity-60 text-xs font-semibold">{user.email}</h1>
      <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sapiente tempore unde.</p>
      <button onClick={()=>handleRemove(id)} className="px-3 py-1 bg-red-600 text-sm rounded-md text-white font-semibold mt-4">Remove it</button>
    </div>
    
  </>
}

export default Card;
