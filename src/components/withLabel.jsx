import React from 'react'
import Label from "./Label";
import PropTypes from "prop-types";

withLabel.propTypes = {
    WrappedComponent: PropTypes.element.isRequired,
}

export default function withLabel(WrappedComponent) {
    WithLabel.propTypes = {
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
    }

    WithLabel.defaultProps = {
        required: false
    }

    function WithLabel(props) {
        const {label, required, ...wrappedComponentProps} = props
        return (
            <Label label={label} required={required} for={wrappedComponentProps.name}>
                <WrappedComponent {...wrappedComponentProps}/>
            </Label>
        )
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component'

    WithLabel.displayName = `withLabel(${wrappedComponentName})`

    return WithLabel
}
