import React from 'react'
import styles from './style.module.css'

export default function Label(props) {
    return (
        <div>
            <label
                className={styles.label}
                htmlFor={props.for}
            >
                {props.label}{props.required ? ' (required)' : ''}:
            </label>
            {props.children}
        </div>
    )
}
