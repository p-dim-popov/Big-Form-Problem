import React, {Component} from 'react'
import validator from '../utils/validation/validator'
import ValidationSummary from "./ValidationSummary";
import PropTypes from "prop-types";

export default function withValidationSummary(WrappedComponent) {
    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component'
    const displayName = `withValidationSummary(${wrappedComponentName})`


    const propTypes = {
        registerValidator: PropTypes.func.isRequired,
        unregisterValidator: PropTypes.func.isRequired,
        setValue: PropTypes.func.isRequired,
        validations: PropTypes.arrayOf(PropTypes.func),
    }

    const defaultValues = {
        validations: []
    }

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
            this.validator = validator(this.props.validations)
            this.props.registerValidator(this.validate)
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.validator = validator(this.props.validations)
        }

        componentWillUnmount() {
            this.props.unregisterValidator()
        }

        /**
         * Validates the element ref field
         */
        validate() {
            this.begunValidation = true
            const value = this.elementRef.current.files || this.elementRef.current.value
            const errorMessages = this.validator.validate(value)

            const isValid = !errorMessages.length

            if (!isValid)
                this.elementRef.current.focus()

            this.setState({errorMessages})
            this.props.setValue(isValid ? value : null)
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

    WithValidationSummary.displayName = displayName
    WithValidationSummary.propTypes = propTypes
    WithValidationSummary.defaultValues = defaultValues

    return WithValidationSummary;
}
