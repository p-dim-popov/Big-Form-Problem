import React from 'react'
import styles from './style.module.css'
import PropTypes from "prop-types";

Label.propTypes = {
    for: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
}

Label.defaultProps = {
    required: false,
}

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
