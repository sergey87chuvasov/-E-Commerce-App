import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
      <div className='mt-12 flex gap-x-8 gap-y-16 flex-wrap justify-between'>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 " 
                    src='https://images.pexels.com/photos/22944580/pexels-photo-22944580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
                <Image className="" src='https://images.pexels.com/photos/22021244/pexels-photo-22021244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$55</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-cartItem text-cartItem py-2 w-max px-4 text-xs hover:bg-cartItem hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 " 
                    src='https://images.pexels.com/photos/22944580/pexels-photo-22944580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
                <Image className="" src='https://images.pexels.com/photos/22021244/pexels-photo-22021244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$55</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-cartItem text-cartItem py-2 w-max px-4 text-xs hover:bg-cartItem hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 " 
                    src='https://images.pexels.com/photos/22944580/pexels-photo-22944580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
                <Image className="" src='https://images.pexels.com/photos/22021244/pexels-photo-22021244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$55</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-cartItem text-cartItem py-2 w-max px-4 text-xs hover:bg-cartItem hover:text-white">Add to Cart</button>
        </Link>
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 " 
                    src='https://images.pexels.com/photos/22944580/pexels-photo-22944580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
                <Image className="" src='https://images.pexels.com/photos/22021244/pexels-photo-22021244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  alt='item pic' fill sizes="25vw" />
            </div>
            <div className="flex justify-between">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">$55</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-cartItem text-cartItem py-2 w-max px-4 text-xs hover:bg-cartItem hover:text-white">Add to Cart</button>
        </Link>
      </div>
    )
  }
  
  export default ProductList