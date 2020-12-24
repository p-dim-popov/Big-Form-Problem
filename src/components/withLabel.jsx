import React from 'react'
import Label from "./Label";

export default function withLabel(WrappedComponent) {
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

    WithLabel.displayName = `withValidationSummary(${wrappedComponentName})`

    return WithLabel
}
