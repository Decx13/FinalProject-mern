import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageFurniture = () => {
const [allFurniture, setAllFurniture] = useState([]);
useEffect( () =>{
  fetch("http://localhost:5000/all-furniture").then(res => res.json()).then(data => setAllFurniture(data));
},[])


 // delete a book
  const handleDelete = (id) =>{
    console.log(id);

    fetch(`http://localhost:5000/furniture/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
    alert ("Furniture Deleted!")
    //setAllFurniture(data);
  })

}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Furniture</h2>

      {/* table for furniture */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Number</Table.HeadCell>
          <Table.HeadCell>Furniture Name</Table.HeadCell>
          <Table.HeadCell>Style Title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Manage</span>
          </Table.HeadCell>
        </Table.Head>
          {
            allFurniture.map((furniture, index) => <Table.Body className="divide-y" key={furniture._id}>

            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{furniture.furnitureName}</Table.Cell>
            <Table.Cell>{furniture.styleTitle}</Table.Cell>
            <Table.Cell>{furniture.category}</Table.Cell>
            <Table.Cell>{25000.00}</Table.Cell>

            <Table.Cell>
              <Link 
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" 
              to={`/admin/dashboard/edit-furniture/${furniture._id}`}>
                Manage
              </Link>
              <button onClick={() => handleDelete(furniture._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body> )
          }
       
      </Table>

    </div>
  )
}

export default ManageFurniture