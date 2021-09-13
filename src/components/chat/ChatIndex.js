import React from 'react'
import { getAllChats } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import ChatCard from './ChatCard'


function ChatIndex() {
  const [chats, setChats] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !chats && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllChats()
        setChats(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
    
  }, [])

  return (
    <>
      <section className="section">
        <div className="container">
          {isError && <Error />}
          {isLoading && <Loading />}
          {chats && chats.map(chat => (
            <ChatCard key={chat.id} chat={chat} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ChatIndex
