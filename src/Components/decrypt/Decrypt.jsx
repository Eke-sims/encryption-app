import './decrypt.css'
import { useState } from 'react'

const Decrypt = ({onAdd, plainTextOutput}) => {

  const [cipherTextInput, setCipherTextInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if( !cipherTextInput ) {
      alert('Please enter a text');
      return
    }

    onAdd({cipherTextInput});

    setCipherTextInput('');

  }


  return (
    <form className='function-container' onSubmit={onSubmit}>
      <label htmlFor="input">Cipher Text</label>
      <textarea type="text"  
        placeholder='Input Cipher Text'
        value={cipherTextInput} 
        onChange={(e)=> setCipherTextInput(e.target.value)}/>
      <button className='decrypt'>Decrypt</button>
      <div className='output-container'>
          <h3>Plain Text:</h3>
          <p className='output'>{plainTextOutput}</p>
        </div>
    </form>
  )
}

export default Decrypt