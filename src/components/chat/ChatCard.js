import { Link } from 'react-router-dom'
import { ChatItem } from 'react-chat-elements'

function ChatCard({ chat }) {
  return (
    <section className="section">
      <Link to={`/chat/${chat.id}`}>
        <div className="container">
          <ChatItem 
            avatar={'https://m.media-amazon.com/images/I/61yOiGcmpWL._AC_SL1500_.jpg'}
            avatarFlexible={true}
            alt={chat.id}
            title={chat.matchedUsers[1].id}
            subtitle={chat.messagesInChat[chat.messagesInChat.length - 1].text}
            data={chat.messagesInChat[chat.messagesInChat.length - 1].createdAt}
            unread={0}
          />
        </div>
      </Link>
    </section>
  )
}

export default ChatCard

{/* <ChatList 
            className="chat-list"
            dataSource={[
              {
                avatar: 'https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
                alt: `${chat[0].id}`,
                title: `${chat.matchedUsers[1].id}`,
                subtitle: `${chat.messagesInChat[chat.messagesInChat.length - 1].text}`,
                data: new Date(),
                unread: 0,
              }
            ]}
          /> */}