import React from 'react'
import { getAllUsers } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'

function UserSwipe() {
  const [users, setUsers] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !users && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllUsers()
        setUsers(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
    
  }, [])

  console.log(users)

  return (
    <>
      <section className="section">
        <div className="container">
          {isError && <Error />}
          {isLoading && <Loading />}
          {users && users.map(user => (
            <h1 key={user.id}>{user.username}</h1>
          ))}
        </div>
      </section>
    </>
  )
}

export default UserSwipe