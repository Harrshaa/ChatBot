import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './src/chatbot/config';
import ActionProvider from './src/chatbot/ActionProvider';
import MessageParser from './src/chatbot/MessageParser';

const App = () => {
  return (
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider} />
  )
}

export default App