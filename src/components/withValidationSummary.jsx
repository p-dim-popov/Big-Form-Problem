import React, {Component} from 'react'
import validator from '../utils/validation/validator'
import ValidationSummary from "./ValidationSummary";

export default function withValidationSummary(WrappedComponent) {
    class WithValidationSummary extends Component {
        constructor(props) {
            super(props);
            this.state = {
                errorMessages: [],
            }

            this.elementRef = React.createRef()
            this.begunValidation = false
            this.validate = this.validate.bind(this)
            this.beginValidating = this.beginValidating.bind(this)
            this.changeHandler = this.changeHandler.bind(this)
        }

        componentDidMount() {
            this.validator = validator(this.props.validations || [])
            this.props.registerValidator(this.validate)
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.validator = validator(this.props.validations || [])
        }

        componentWillUnmount() {
            this.props.unregisterValidator()
        }

        /**
         * Validates the element ref field
         */
        validate() {
            const value = this.elementRef.current.files || this.elementRef.current.value
            const errorMessages = this.validator.validate(value)

            this.setState({errorMessages, isValid: !!errorMessages.length})
            this.props.setValue(!!errorMessages.length ? null : value)
        }

        beginValidating () {
            if (!!this.begunValidation) return;
            this.begunValidation = true
            this.changeHandler()
        }

        changeHandler() {
            if (!this.begunValidation) return;
            this.validate()
        }

        filterOutWrappedComponentProps(){
            const {validations, setValue, registerValidator, unregisterValidator, ...wrappedComponentProps} = this.props
            return wrappedComponentProps
        }

        render() {
            return (
                <ValidationSummary errorMessages={this.state.errorMessages}>
                    <WrappedComponent
                        ref={this.elementRef}
                        onBlur={this.beginValidating}
                        onChange={this.changeHandler}
                        {...this.filterOutWrappedComponentProps()}
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
