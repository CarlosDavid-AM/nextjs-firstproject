import Link from "next/link"

const Navbar = () => {
  return (
    <div className='p-2 font-bold text-center bg-gray-600' >
      <Link href="/" >
        Home
      </Link>
    </div>
  )
}

export default Navbar