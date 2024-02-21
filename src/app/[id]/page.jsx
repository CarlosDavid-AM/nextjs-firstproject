import IdUser from "@/components/IdUser"

async function getdUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const datos = await res.json()

  return(datos.data)
}

async function Identificacion({params}) {

  const user = await getdUser(params.id)

  return (
    <IdUser user={user} />
  )
}

export default Identificacion