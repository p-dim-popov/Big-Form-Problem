import React, {Component} from 'react';
import styles from './style.module.css';
import SubmitButton from "../SubmitButton";
import DataService from "../../services/DataService";
import DataMember from "./memberInfo";

export default class FormWithValidation extends Component {
    validators = {}

    constructor(props) {
        super(props);

        this.state = {
            sentData: false,
            submitDisabled: false,
        }

        this.configureChildren()
    }

    /**
     * Passes setValue(value: any) function for updating this.form
     * Passes this.validators to input to forward reference validate() method
     */
    configureChildren() {
        this.children = this.props.children
            .map(x => ({
                ...x,
                props:
                    {
                        ...x.props,
                        setValue: this.setValueOf(x.props.name),
                        validators: this.validators
                    }
            }))
    }

    componentDidMount() {
        this.form = this.props.children.reduce((acc, cur) => {
            return (
                {
                    ...acc,
                    [cur.props.name]: !!cur.props.required
                        ? DataMember.isRequired
                        : DataMember.isNotRequired
                });
        }, {})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.configureChildren()
    }

    /**
     * Curries a function for setting input component value
     * @param {String} name Name from the input component
     * @returns {function(...[*]=)} Callback for setting form[name] value
     */
    setValueOf = (name) => (value) => {
        this.form[name] = value
    }

    submitHandler = async (event) => {
        event.preventDefault()

        await this.setState({submitDisabled: true})
        Object.values(this.validators).forEach(v => v())
        const areAllValid = Object.values(this.form).filter(v => v === null).length === 0
        if (!areAllValid) {
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
                            <ul>
                                {Object.entries(this.form)
                                    .map(([k, v]) => (
                                        <li key={k}>{k}: {v.toString()}</li>
                                    ))}
                            </ul>
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
