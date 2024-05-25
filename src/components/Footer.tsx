import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
      <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
              <div className="text-2xl tracking-wide">LAMA</div>
            </Link>
            <p>220111 Winding Way, Main Plaza, Watford, NY 043563, USA</p>
            <span className="font-semibold">testpage@serge.dev</span>
            <span className="font-semibold">+375 88 88 33 44</span>
            <div className="flex gap-6">
              <Image src="/facebook.png" alt="icon pic" width={16} height={16} />
              <Image src="/instagram.png" alt="icon pic" width={16} height={16} />
              <Image src="/youtube.png" alt="icon pic" width={16} height={16} />
              <Image src="/pinterest.png" alt="icon pic" width={16} height={16} />
              <Image src="/x.png" alt="icon pic" width={16} height={16} />
            </div>
          </div>
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/2">
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-medium">COMPANY</h1>
              <div className="flex flex-col gap-6">
                <Link href="">About Us</Link>
                <Link href="">Carrers</Link>
                <Link href="">Affiliates</Link>
                <Link href="">Blog</Link>
                <Link href="">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-medium">SHOP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">New Arrivals</Link>
                <Link href="">Accessories</Link>
                <Link href="">Men</Link>
                <Link href="">Women</Link>
                <Link href="">All Products</Link>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-medium">HELP</h1>
              <div className="flex flex-col gap-6">
                <Link href="">Costumer Service</Link>
                <Link href="">My Account</Link>
                <Link href="">Find a Store</Link>
                <Link href="">Legal & Privacy</Link>
                <Link href="">Gift Card</Link>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <h1 className="font-medium text-lg">SUBSCRIBE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex">
              <input type="text" placeholder="Email Address" className="p-4 w-3/4" />
              <button className="w-1/4 bg-cartItem text-white">JOIN</button>
              </div>
              <span className="font-semibold">Secure Payments</span>
              <div className="flex justify-between">
              <Image src="/discover.png" alt="icon pic" width={40} height={20} />
              <Image src="/skrill.png" alt="icon pic" width={40} height={20} />
              <Image src="/paypal.png" alt="icon pic" width={40} height={20} />
              <Image src="/mastercard.png" alt="icon pic" width={40} height={20} />
              <Image src="/visa.png" alt="icon pic" width={40} height={20} />
              </div>
            
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="">© Lama Shop</div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="">
              <span className="text-gray-500 mr-4">Language</span>
              <span className="font-medium">United States | English</span>
            </div>
            <div className="">
              <span className="text-gray-500 mr-4">Currency</span>
              <span className="font-medium">$ USD</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer