import React from 'react'
import styles from './style.module.css'
import PropTypes from "prop-types";

ValidationSummary.propTypes = {
    errorMessages: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.element.isRequired,
}

ValidationSummary.defaultValues = {
    errorMessages: [],
}

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
