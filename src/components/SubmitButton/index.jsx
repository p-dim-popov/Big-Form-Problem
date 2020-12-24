import React from 'react'
import styles from './style.module.css'

export default function SubmitButton({disabled, children}) {
    return (
        <button
            type="submit"
            className={disabled ? styles.disabled : styles.active}
            disabled={disabled}
        >
            {children}
        </button>)
}
