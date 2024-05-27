"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id:1,
        url: 'https://images.pexels.com/photos/17094341/pexels-photo-17094341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id:2,
        url: 'https://images.pexels.com/photos/11925574/pexels-photo-11925574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id:3,
        url: 'https://images.pexels.com/photos/6870973/pexels-photo-6870973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id:4,
        url: 'https://images.pexels.com/photos/8771165/pexels-photo-8771165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
]

const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
      <div className=''>
        <div className="h-[500px] relative">
            <Image 
            src={images[index].url} 
            alt='img pic' fill sizes="50vw" className="object-cover rounded-md" />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img, i) => (
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                <Image 
                src={img.url} 
                alt='img pic' fill sizes="30vw" className="object-cover rounded-md" />
            </div>
            ))}    
        </div>
      </div>
    )
  }
  
  export default ProductImages