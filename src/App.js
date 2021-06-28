import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height='100vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID='3150476c-7852-45dc-b62a-8a0d704f0464'
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  )
}

export default App;