import './form.css'
import React, { useState }from 'react'
import { Decrypt, Encrypt } from '../../Components';

const Form = () => {

    const [output, setOutput] = useState('')

    // Encrypt

    const encryptText = (text) =>{
        const newArray = text.cipherText.split('');
        // Performing ASCII manipulation
        const manArray = newArray.map(letter => letter.charCodeAt(0) + 4);

        const cipherArray = manArray.map(array => String.fromCharCode(array));

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
