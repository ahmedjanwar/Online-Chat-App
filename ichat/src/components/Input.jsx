import React from 'react'
import IMG from '../images/Img.png'
import Attach from '../images/Attach.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id='file' style={{display: "none"}}/>
        <label htmlFor="file">
          <img src={IMG} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input