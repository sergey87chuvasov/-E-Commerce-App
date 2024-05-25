import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
      <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
        {/* TOP */}
        <div className="flex justify-between gap-24">
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
          <div className="hidden lg:flex justify-between w-1/2"></div>
          {/* RIGHT */}
          <div className="w-1/4"></div>
        </div>
        {/* BOTTOM */}
        <div className=""></div>
      </div>
    )
  }
  
  export default Footer