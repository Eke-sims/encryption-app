import {useState} from 'react'

const Encrypt = ({ onAdd, cipherTextOutput }) => {

  const [plainTextInput, setPlainTextInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if( !plainTextInput ) {
      alert('Please enter a text');
      return
    }

    onAdd({plainTextInput});

    setPlainTextInput('');

  }

  return (
    <form className='function-container' onSubmit={onSubmit}>
        <label htmlFor="input">Plain Text</label>
        <textarea type="text"  
          placeholder='Input Plain-text'
          value={plainTextInput} 
          onChange={(e)=> setPlainTextInput(e.target.value)}/>
        <button >Encrypt</button>
        <div className='output-container'>
          <h3>Cipher Text:</h3>
          <p className='output'>{cipherTextOutput}</p>
        </div>
    </form>
  )
}

export default Encrypt