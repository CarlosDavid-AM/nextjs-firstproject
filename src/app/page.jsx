import Usuarios from "@/components/Usuarios"

async function loadUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const datos = await res.json()

  return(datos.data)
}

async function Home() {
  const users = await loadUsers()

  return (
    <Usuarios users={users} />
  )
}

export default Home