import React, {Component} from 'react'
import validator from '../utils/validation/validator'
import ValidationSummary from "./ValidationSummary";

export default function withValidationSummary(WrappedComponent) {
    class WithValidationSummary extends Component {
        validator = validator(this.props.validations || [])
        valueRef = React.createRef()

        constructor(props) {
            super(props);
            this.state = {
                errorMessages: [],
            }
        }

        /**
         * Validates the input field
         * @param valueRef Reference to the input field
         */
        validate(valueRef) {
            const value = valueRef.files || valueRef.value
            const errorMessages = this.validator.validate(value)

            this.setState({errorMessages, isValid: !!errorMessages.length})
            this.props.setValue(!!errorMessages.length ? null : value)
        }

        /**
         * Forwards validation trigger to parent components
         */
        forwardValidator() {
            this.props.validators[this.props.name] = () => this.validate(this.valueRef.current)
        }

        componentDidMount() {
            this.forwardValidator()
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.forwardValidator()
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
            const {validations, setValue, ...wrappedComponentProps} = this.props
            return (
                <ValidationSummary errorMessages={this.state.errorMessages}>
                    <WrappedComponent
                        ref={this.valueRef}
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
