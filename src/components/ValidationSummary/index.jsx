import React from 'react'
import styles from './style.module.css'

export default function ValidationSummary (props) {
    return (
        <div>
            <ul>
                {props.errorMessages
                    .map(x => (
                        <li className={styles.validationSummary} key={x}>{x}</li>
                    ))}
            </ul>
            {props.children}
        </div>
    )
}
