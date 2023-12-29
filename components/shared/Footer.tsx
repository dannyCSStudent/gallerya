import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.jpg"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
        </Link>

        <p>2023 Gallerya. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer