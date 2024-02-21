import Link from "next/link"

const Usuarios = ({users}) => {
  return (
    <ul>
      {
        users.map(({id, first_name, last_name, email, avatar}) => (
          <Link key={id} href={`/${id}`} >
            <li className='bg-gray-400 rounded-lg flex my-6 p-3 gap-x-4 justify-between items-center text-black'>
              <div>
                <h2 className='font-semibold' >
                  {id}: {first_name} {last_name}
                </h2>
                <p>
                  Email: {email}
                </p>
              </div>
              <img src={avatar} alt={first_name} className='rounded-full' />
            </li>
        </Link>
        ))
      }
    </ul>
  )
}

export default Usuarios