import React from 'react'
import './decrypt.css'

const Decrypt = () => {
  return (
    <form className='function-container'>
        <label htmlFor="input">Text</label>
        <textarea type="text" className='decrypt-input'/>
        <button className='decrypt'>Decrypt</button>
        <p className='cipher-output'>Output: <span></span></p>
    </form>
  )
}

export default Decrypt