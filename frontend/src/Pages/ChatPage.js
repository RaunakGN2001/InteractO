import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {

  const [chats, setChats] = useState([]) // starting with an empty array

  const fetchChats = async () => {
    const { data } = await axios.get('http://127.0.0.1:3000/api/chat');
    setChats(data);
  }

  const chatsModified = chats.map((chat) => {
  })

  console.log(chats);

  useEffect(() => {
    fetchChats()
  }, [])
  
  return (
    <div>
      {chatsModified}
    </div>
  )
}

export default ChatPage