import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const initialAction =()=>{
        const message=createChatBotMessage('Got It');
        updateState(message);
    }

    const updateState=(message) =>{
        setState((prev) =>({
            ...prev,
            messages:[...prev.messages,message]
        }))
    }
  
  
  
    return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;