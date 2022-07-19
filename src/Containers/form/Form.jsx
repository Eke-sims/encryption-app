import './form.css'
import React, { useState }from 'react'
import { Decrypt, Encrypt } from '../../Components';

const Form = () => {

    const [cipherTextOutput, setCipherTextOutput] = useState('')
    const [plainTextOutput, setPlainTextOutput] = useState('')

    // Encrypt

    const encryptText = (text) =>{
        const newArray = text.plainTextInput.split('');
        // Performing ASCII value manipulation
        const manArray = newArray.map(letter => letter.charCodeAt(0) + 4);
        // Coverting from Ascii value back to char in an array
        const cipherArray = manArray.map(array => String.fromCharCode(array));
        // Coverting from an array back to a string
        const cipherText = cipherArray.join('');
        
        setCipherTextOutput(cipherText);
    }

    // Decrypt

    const decryptText = (text) =>{
        const newArray = text.cipherTextInput.split('');
        // Performing ASCII value manipulation
        const manArray = newArray.map(letter => letter.charCodeAt(0) - 4);
        // Coverting from Ascii value back to char in an array
        const plainArray = manArray.map(array => String.fromCharCode(array));
        // Coverting from an array back to a string
        const plainText = plainArray.join('');
        
        setPlainTextOutput(plainText);
    }


    return (
        <div className='form-container'>
            <Encrypt onAdd={encryptText} cipherTextOutput={cipherTextOutput} />
            <Decrypt onAdd={decryptText} plainTextOutput={plainTextOutput} />
        </div>
    )
}

export default Form
