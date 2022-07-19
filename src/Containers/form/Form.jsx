import './form.css'
import React, { useState }from 'react'
import { Decrypt, Encrypt } from '../../Components';

const Form = () => {

    const [output, setOutput] = useState('')

    // Encrypt

    const encryptText = (text) =>{
        const newArray = text.cipherText.split('');
        // Performing ASCII value manipulation
        const manArray = newArray.map(letter => letter.charCodeAt(0) + 4);
        // Coverting from Ascii value back to char in an array
        const cipherArray = manArray.map(array => String.fromCharCode(array));
        // Coverting from an array back to a string
        const cipherText = cipherArray.join('');
        
        setOutput(cipherText);
    }



    return (
        <div className='form-container'>
            <Encrypt onAdd={encryptText} output={output} />
            <Decrypt />
        </div>
    )
}

export default Form
