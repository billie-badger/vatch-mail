import React from 'react'
import TextInput from '../text-input'

import './styles.css'

export default function EmailInput(props) {
    return (
        <TextInput 
            type= 'text'
            value = {props.value}
            className= '__email-input'
            placeholder= {props.placeholder}
            handleChange= {props.handleChange}
        />
    )
}