import React from 'react'
import styles from './style.module.css'

const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} className={styles.input} {...props} />
})

Input.displayName = 'Input'

export default Input
