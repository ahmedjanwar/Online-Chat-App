import React from 'react'
import Cam from "../images/Cam.png"
import Add from "../images/Add.png"
import More from "../images/More.jpg"
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Hamood</span>
        <div className="chatIcons">
          {/** 
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
          */}
        </div>
        
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat