const TheirMessage = ({message, lastMessage}) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
        className="message-avatar"
        style={{backgroundImage: `url(${message?.sender?.avator})`}}
        />
      )}
      {
        
      }
    </div>
  )
}

export default TheirMessage;