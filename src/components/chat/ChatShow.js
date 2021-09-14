import React from 'react'
import { useParams } from 'react-router'
import { getAllMessages } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import MessagesList from './MessagesList'

function ChatShow() {
  const [messages, setMessages] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const isLoading = !messages && !isError
  const currentChat = useParams()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllMessages()
        setMessages(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  console.log(Number(currentChat.chatId))

  return (
    <>
      <section className="section">
        <div className="container">
          {isError && <Error />}
          {isLoading && <Loading />}
          {messages && messages.map(message => (
            Number(message.parentChat) === Number(currentChat.chatId) ? 
              <MessagesList key={message.id} message={message} /> : 
              <h1></h1>
          ))}
        </div>
      </section>
    </>
  )
}

export default ChatShow