import React, {Component} from 'react'
import validator from '../utils/validation/validator'
import ValidationSummary from "./ValidationSummary";

export default function withValidationSummary(WrappedComponent) {
    class WithValidationSummary extends Component {
        validator = validator(this.props.validations || [])
        elementRef = React.createRef()

        constructor(props) {
            super(props);
            this.state = {
                errorMessages: [],
            }
        }

        componentDidMount() {
            this.props.registerValidator(() => this.validate(this.elementRef.current))
        }

        componentWillUnmount() {
            this.props.unregisterValidator()
        }

        /**
         * Validates the input field
         * @param elementRef {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} Reference to the input field
         */
        validate(elementRef) {
            const value = elementRef.files || elementRef.value
            const errorMessages = this.validator.validate(value)

            this.setState({errorMessages, isValid: !!errorMessages.length})
            this.props.setValue(!!errorMessages.length ? null : value)
        }

        beginValidating = (event) => {
            if (!!this.begunValidation) return;
            this.begunValidation = true
            this.changeHandler(event)
        }

        changeHandler = (event) => {
            if (!this.begunValidation) return;
            this.validate(event.target)
        }

        render() {
            const {validations, setValue, registerValidator, unregisterValidator, ...wrappedComponentProps} = this.props
            return (
                <ValidationSummary errorMessages={this.state.errorMessages}>
                    <WrappedComponent
                        ref={this.elementRef}
                        onBlur={this.beginValidating}
                        onChange={this.changeHandler}
                        {...wrappedComponentProps}
                    />
                </ValidationSummary>
            )
        }
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component'

    WithValidationSummary.displayName = `withValidationSummary(${wrappedComponentName})`

    return WithValidationSummary;
}
