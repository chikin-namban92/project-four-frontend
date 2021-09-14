import { MessageBox } from 'react-chat-elements'
import { isOwner } from '../../lib/auth'

function MessagesList({ message }) {

  const boxPosition = () => {
    if (isOwner(message.sender)) {
      return 'right'
    } else {
      return 'left'
    }
  }


  return (
    <MessageBox 
      position={boxPosition()}
      type={'text'}
      text={message.text}
      data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
          click: false,
          loading: 0,
        },
      }}
    />
  )
}

export default MessagesList