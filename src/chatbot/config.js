import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import GotItBtn from './components/GotItBtn';


const config = {
 
  botName:"HappilyEver.co",
  initialMessages:[createChatBotMessage('Hello, Welcome to student info system',{
    widget: "GotItBtn"
  })],
  customComponents:{
    botAvatar:(props) => <Avatar {...props}/> 
  },

  widgets:[
    {
      widgetName: "GotItBtn",
      widgetFunc: (props) => <GotItBtn {...props} />,
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <ExitCounter {...props} />,
    },
    {
      widgetName: "askage",
      widgetFunc: (props) => <AskAge {...props} />,
    }

  ]

};

export default config;