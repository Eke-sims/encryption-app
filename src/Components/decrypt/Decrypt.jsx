import React from 'react'
import './decrypt.css'

const Decrypt = () => {
  return (
    <form className='function-container'>
      <label htmlFor="input">Text</label>
      <textarea type="text" className='decrypt-input'/>
      <button className='decrypt'>Decrypt</button>
      <div className='output-container'>
          <h3>Plain Text:</h3>
          <p className='output'></p>
        </div>
    </form>
  )
}

export default Decrypt