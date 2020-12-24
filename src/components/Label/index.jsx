import React from 'react'

export default function Label(props) {
    return (
        <div>
            <label htmlFor={props.for}>{props.label}{props.required ? ' (required)' : ''}: </label>
            {props.children}
        </div>
    )
}
