import React from "react";
import { useForm } from "react-hook-form";

function Form({handleFormSubmitData}) {

  const {register,handleSubmit, reset}=useForm();
  const handleFromSUbmit = (data)=>{
    handleFormSubmitData(data);
    reset();
  }
  
  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-8" onSubmit={handleSubmit(data=>handleFromSUbmit(data))}>
        <input {...register('name')}  required className="rounded-md px-2 py-1 text-base font-semibold outline-none" placeholder="Name" type="text" />
        <input {...register('email')} className="rounded-md px-2 py-1 text-base font-semibold outline-none" placeholder="Email" type="text" />
        <input {...register('image')}  className="rounded-md px-2 py-1 text-base font-semibold outline-none" placeholder="Image URL" type="text" />
        <input   className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold" type="submit" id="" />
      </form>
      
    </div>
  )
}

export default Form;
