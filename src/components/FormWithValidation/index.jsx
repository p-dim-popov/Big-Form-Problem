import React, {Component} from 'react';
import styles from './style.module.css';
import SubmitButton from "../SubmitButton";
import DataService from "../../services/DataService";
import PrettyPrintObject from "../PrettyPrintObject";

export default class FormWithValidation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sentData: false,
            submitDisabled: false,
        }

        this.form = {}
        this.validators = {}
        this.configureChildren()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.configureChildren()
    }

    /**
     * Attaches functions for communication and control to children
     */
    configureChildren() {
        this.children = this.props.children
            .map(x => ({
                ...x,
                props: {
                    ...x.props,
                    setValue: this.setValueOf(x.props.name),
                    registerValidator: this.registerValidator(x.props.name),
                    unregisterValidator: this.unregisterValidator(x.props.name),
                },
            }))
    }

    /**
     * Curries a function for setting input component value
     * @param {String} name Name from the input component
     * @returns {function(*)} Callback for setting form[name] value
     */
    setValueOf = (name) => (value) => this.form[name] = value

    /**
     * Curries a function for registering input component validation method
     * @param name {String} Name from the input component
     * @returns {function(function(): void): void} Callback for adding validator function to validators object
     */
    registerValidator = (name) => (validateFunc) => this.validators[name] = validateFunc

    /**
     * Curries a function for unregistering input component validation method
     * @param name {String} Name from the input component
     * @returns {function(): boolean} Callback for removing validator function from validators object
     */
    unregisterValidator = (name) => () => delete this.validators[name]

    submitHandler = async (event) => {
        event.preventDefault()

        await this.setState({submitDisabled: true})

        let hasValidationError = false
        for (const name of this.children.map(x => x.props.name)) {
            if (this.validators.hasOwnProperty(name)) {
                this.validators[name]()
                if (!this.form.hasOwnProperty(name) || this.form[name] === null){
                    hasValidationError = true
                    break
                }
            }
        }

        if (hasValidationError) {
            this.setState({submitDisabled: false})
            return
        }

        if (await DataService.sendForm(this.form))
            this.setState({sentData: true})

        this.setState({submitDisabled: false})
    }

    render() {
        return (
            <div>
                {!!this.state.sentData ? (
                        <div className={styles.result}>
                            <div>See results:&nbsp;
                                <a href="https://webhook.site/#!/d58c2bb7-5c45-46a5-828d-438c5080249b/2f4aa726-34b1-4b44-90ac-778cc2da4e2f/1">
                                    click
                                </a>
                            </div>
                            <PrettyPrintObject object={this.form} />
                        </div>
                    )
                    : <></>}
                <form
                    className={styles.form}
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={this.submitHandler}
                >
                    {this.children}
                    <SubmitButton disabled={this.state.submitDisabled}>
                        Submit
                    </SubmitButton>
                </form>
            </div>
        );
    }
}
