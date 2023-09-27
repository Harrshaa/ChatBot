import React from 'react'
import App from '../../../App'
import { useEffect,useState } from 'react'

const GotItBtn = () => {

  
  return (
    <div>
      <button id='gotitbtn' className='btn' onClick={()=> initialActon()} >Got It</button>

    </div>
  )
}

export default GotItBtn;