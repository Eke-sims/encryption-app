import './form.css'
import React, { useState } from 'react'

const Form = () => {
    return (
        <form action="" className='form-container'>
            <div className='function-container'>
                <label htmlFor="encrypt-input">Encryption Text</label>
                <input type="text" className='encrypt-input' />
                <button className='encrypt'>Encrypt</button>
                <p className='encrypt-output'> hello world!</p>
            </div>

            <div className="function-container">
                <label htmlFor="decrypt-input">Decryption Text</label>
                <input type="text" className='decrypt-input' />
                <button className='decrypt'>Decrypt</button>            
                <p className='decrypt-output'> hello world!</p>
            </div>
        </form>
    )
}

export default Form
