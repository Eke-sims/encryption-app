import React from 'react'
import './encrypt.css'
import {useState} from 'react'

const Encrypt = ({ onAdd, output }) => {

  const [cipherText, setCipherText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if( !cipherText ) {
      alert('Please enter a text');
      return
    }

    onAdd({cipherText});

    setCipherText('');

  }

  return (
    <form className='function-container' onSubmit={onSubmit}>
        <label htmlFor="input">Text</label>
        <textarea type="text"  
            value={cipherText} 
            onChange={(e)=> setCipherText(e.target.value)}/>
        <button >Encrypt</button>
        <p className='output'> Cipher Text: Xli$uymgo$js|$nyqtih$sziv$xli$ps$jirgi$erh$perhih$sr$mx+w$xemp {output}</p>
    </form>
  )
}

export default Encrypt