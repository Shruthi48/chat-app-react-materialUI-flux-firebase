import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Hullo there how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render(){

    return (
      <div>{this.props.message}</div>
    );
  }
}

export default Message;
