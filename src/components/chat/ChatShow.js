import React from 'react'
import { useHistory, useParams } from 'react-router'
import { getAllMessages, sendMessage } from '../../lib/api'
import Error from '../common/Error'
import Loading from '../common/Loading'
import MessagesList from './MessagesList'

const initialState = {
  text: '',
}

function ChatShow() {
  const [messages, setMessages] = React.useState([])
  const [isError, setIsError] = React.useState(false)
  const [formData, setFormData] = React.useState(initialState)

  const isLoading = !messages && !isError
  const currentChat = useParams()
  const history = useHistory()
  

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

  


  // console.log(Number(currentChat.chatId))

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await sendMessage(currentChat.chatId, formData)
      console.log(response.data)
      history.push(`/chat/${currentChat.chatId}`)
      const getData = async () => {
        try {
          const response = await getAllMessages()
          setMessages(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getData()
      formData.text = ''
    } catch (err) {
      console.log(err)
    }
  }

  const handleLoad = async () => {
    try {
      const scrollBox = await document.getElementById('message-box')
      scrollBox.scrollIntoView({ block: 'end' })
    } catch (err) {
      console.log(err)
    }
  }

  handleLoad()

  return (
    <>
      <section className="section has-scroll">
        <div className="container messages">
          {isError && <Error />}
          {isLoading && <Loading />}
          {messages && messages.map(message => (
            Number(message.parentChat) === Number(currentChat.chatId) ? 
              <MessagesList key={message.id} message={message} /> : 
              <h1></h1>    
          ))}
          <div id="message-box"></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <form
              className="column is-half is-offset-one-quarter box"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <div className="control">
                  <textarea 
                    className="textarea is-danger"
                    placeholder="Type your message here..."
                    name="text"
                    onChange={handleChange}
                    value={formData.text}
                  />
                </div>
                <div className="field">
                  <button type="submit" className="button is-danger is-fullwidth chat-button">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChatShow