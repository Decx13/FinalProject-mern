import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleFurniture = () => {
    const {_id,furnitureName } = useLoaderData();

  return (
    <div className='mt-24 px-4 lg:px-24'>
            <h2>{furnitureName}</h2>
    </div>
  )
}

export default SingleFurniture