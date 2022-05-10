import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Los Simpsons'])

    // const handleAdd = () => {
        
    //     setCategories([...categories, 'Futurama'])
        
    // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {categories.map( category => {
                return <GifGrid 
                        key={category}
                        category={category}/>
            })}
        </ol>


    </>
  )
}
