import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  constructor(){
    super();
    this.state = {
      messages: [
        'Hullo there how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
        <div><Message message={message} /></div>
      );
    });

    return (
      <div>{messageNodes}</div>
    );
  }
}

export default MessageList;
