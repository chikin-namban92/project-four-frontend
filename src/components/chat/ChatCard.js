import { useHistory } from 'react-router-dom'
import { ChatItem } from 'react-chat-elements'

function ChatCard({ chat }) {
  const history = useHistory()
  console.log(chat)

  const handleClick = () => {
    history.push(`/chat/${chat.id}`)
  }

  return (
    <ChatItem 
      avatar={'https://m.media-amazon.com/images/I/61yOiGcmpWL._AC_SL1500_.jpg'}
      alt={chat.id}
      title={chat.matchedUsers[1].username}
      subtitle={chat.messagesInChat[chat.messagesInChat.length - 1].text}
      date={new Date()}
      unread={0}
      onClick={handleClick}
    />
  )
}

export default ChatCard