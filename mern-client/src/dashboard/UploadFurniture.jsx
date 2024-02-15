import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const UploadFurniture = () => {
  const furnitureCategories = [
    "Chairs",
    "Tables",
    "Beds",
    "Doors",
    "Windows",
    "Mirrors",
    "Desks",
    "Sofas"

  ]

  const [selectedFurnitureCategory, setSelectedFurnitureCategory] = useState(furnitureCategories[0]);

  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value);
    setSelectedFurnitureCategory(event.target.value);
  }
  // submition handle
  const handleFurnitureSubmit = (event)  => {
    event.preventDefault();
    const form = event.target;

    const furnitureName = form.furnitureName.value;
    const styleTitle = form.styleTitle.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const furnitureDescription = form.furnitureDescription.value;
    
    const furnitureObject = {
      furnitureName,styleTitle,imageUrl,category,furnitureDescription
    }

    console.log(furnitureObject);
    // insert to database

    fetch("http://localhost:5000/upload-furniture",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(furnitureObject)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Furniture Uploaded Successfully!")
      form.reset();
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A New Furniture</h2>

      <form onSubmit={handleFurnitureSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* first Row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="furnitureName"
           value="Furniture Name"/>
        </div>
        <TextInput id="furnitureName"
         name="furnitureName" 
         placeholder="Teak Black Table" 
         required 
         type="text"/>
      </div>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="styleTitle"
           value="Furniture Style"/>
        </div>
        <TextInput id="styleTitle"
         name=" styleTitle" 
         placeholder="Modern Rounded Dark" 
         required 
         type="text"/>
      </div>

      </div>

      {/* second row */}
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl"
           value="Furniture Image URL"/>
        </div>
        <TextInput id="imageUrl"
         name="imageUrl" 
         placeholder="Furniture Image URL" 
         required 
         type="text"/>
      </div>
      {/* Category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState"
           value="Furniture Category"/>
        </div>

          <select id="inputState" name="category" className='w-full rounded' 
          value={selectedFurnitureCategory} onChange={handleChangeSelectedValue}>
              {
                furnitureCategories.map((option) => <option key={option} value={option}> {option} </option>)
              }
          </select>
      </div>
      
      </div>

      {/* description */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="furnitureDescription" 
          value="Furniture Description & Prices" />
        </div>
        <Textarea 
        id="furnitureDescription" 
        name="furnitureDescription"
        placeholder="Type description here..." 
        className='w-full'
        required rows={6} />
      </div>
      <Button type="submit">Upload Furniture</Button>
    </form>
  </div>
  )
}

export default UploadFurniture