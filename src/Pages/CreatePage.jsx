import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
// import reset
function CreatePage() {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    // console.log(data)
    try{
      const response = await axios.post("http://localhost:3000/api/products",data)
      alert("Product was created successfuly", response.data)
      // reset()
    }catch(error){
      alert(error);
    }
  
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Enter the Product name</label>
      <input {...register("p_name")} />
      <br/>
      <label>Enter the price</label>
      <input {...register("price")} />
      <br/>
      <label>Enter Product Description</label>
      <input {...register("description")} />
      <br/>
      <input type="submit" />
    </form>
  )
}

export default CreatePage