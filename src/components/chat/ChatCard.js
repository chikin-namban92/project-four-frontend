import { Link } from 'react-router-dom'
import { ChatItem } from 'react-chat-elements'

function ChatCard({ chat }) {

  return (
    <section className="section">
      <Link to={`/chat/${chat.id}`}>
        <div className="container">
          <ChatItem 
            avatar={'https://m.media-amazon.com/images/I/61yOiGcmpWL._AC_SL1500_.jpg'}
            alt={chat.id}
            title={chat.matchedUsers[1].username}
            subtitle={chat.messagesInChat[chat.messagesInChat.length - 1].text}
            date={new Date()}
            unread={0}
          />
        </div>
      </Link>
    </section>
  )
}

export default ChatCard