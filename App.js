import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './src/chatbot/config';
import ActionProvider from './src/chatbot/ActionProvider';
import MessageParser from './src/chatbot/MessageParser';
import './App.css'

const App = () => {
  return (

    <div className='App'>     
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider} />
    </div>   
  )
}

export default App