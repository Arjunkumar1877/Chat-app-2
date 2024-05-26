import React, { useEffect } from 'react';
import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';
// import 'react-chat-engine-advanced/dist/main.css'; // Ensure you import the necessary CSS

export default function ChatsPage(props) {
  const chatProps = useMultiChatLogic(
    'abb1f013-b9b7-4271-a5d1-b50e7fc1c46c',
    props.user.username,
    props.user.secret
  );

  useEffect(() => {
    if (!props.user.username || !props.user.secret) {
      console.error('Username or secret is missing in props');
    }
  }, [props.user.username, props.user.secret]);

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
}
