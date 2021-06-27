import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      userName='RN'
      userSecret='1234'
      projectID='3150476c-7852-45dc-b62a-8a0d704f0464'
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  )
}

export default App;