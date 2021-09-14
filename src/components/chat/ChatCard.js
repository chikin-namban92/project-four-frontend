import { useHistory } from 'react-router-dom'
import { ChatItem } from 'react-chat-elements'
import { isOwner } from '../../lib/auth'

function ChatCard({ chat }) {
  const history = useHistory()
  console.log(chat)

  const handleClick = () => {
    history.push(`/chat/${chat.id}`)
  }

  const isLoggedInUser = () => {
    if (isOwner(chat.matchedUsers[0].id)) {
      return chat.matchedUsers[1].username
    } else {
      return chat.matchedUsers[0].username
    }
  }

  const matchedUserAvatar = () => {
    if (isOwner(chat.matchedUsers[0].id)) {
      return chat.matchedUsers[1].image
    } else {
      return chat.matchedUsers[0].image
    }
  }

  return (
    <ChatItem 
      avatar={matchedUserAvatar()}
      alt={chat.id}
      title={isLoggedInUser()}
      subtitle={chat.messagesInChat[chat.messagesInChat.length - 1].text}
      date={new Date()}
      unread={1}
      onClick={handleClick}
    />
  )
}

export default ChatCard