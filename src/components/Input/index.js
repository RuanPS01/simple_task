import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
const Input = ({ name, className, ...rest }) => {
    const { fieldName, defaultValue, registerField } = useField(name)
    const inputRef = useRef()
    useEffect(() => {
        registerField({
          name: fieldName,
          ref: inputRef,
          getValue: ref => {
            return ref.current.value
          },
          setValue: (ref, value) => {
            ref.current.value = value
          },
          clearValue: ref => {
            ref.current.value = ''
          },
        })
      }, [fieldName, registerField])

    return (
        <input
        name={name}
        className={className}
        ref={inputRef}
        type="text"
        placeholder="Type your username"
        {...rest}
        />
    )
}
export default Input;