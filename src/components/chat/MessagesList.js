import { MessageBox } from 'react-chat-elements'

function MessagesList({ message }) {


  return (
    <MessageBox 
      position={'left'}
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