import React from 'react'
import ImsInputText from '../ImsInputText'

const SimpleInputText = ({}) => {
  return (
    <ImsInputText
        label="Label"
        placeholder="Placeholder"
        onChange={(e) => console.log(e.target.value)}
    />
  )
}

export default SimpleInputText