import React from 'react'
import styles from './App.module.css';
import FormWithValidation from "./components/FormWithValidation";
import Field from "./utils/validation/generalTypes";
import StringField from "./utils/validation/strings";
import NumberField from "./utils/validation/numbers";
import DateField from "./utils/validation/dates";
import FilesField from "./utils/validation/files";
import ColorsService from "./services/ColorsService";
import withLabel from "./components/withLabel";
import withValidationSummary from "./components/withValidationSummary";
import Input from "./components/Input";
import Select from "./components/Select";
import Textarea from "./components/Textarea";

const InputWithValidation = withLabel(withValidationSummary(Input))
const SelectWithValidation = withLabel(withValidationSummary(Select))
const TextareaWithValidation = withLabel(withValidationSummary(Textarea))

export default function App() {
    return (
        <div className={styles.container}>
            <div />
            <FormWithValidation>
                <InputWithValidation
                    name="first-name"
                    required
                    label="First name"
                    validations={[
                        Field.isRequired({propName: 'First name'}),
                        StringField.hasMaxLength(64, {propName: 'First name'}),
                        StringField.hasMinLength(2, {propName: 'First name'}),
                    ]}
                />
                <InputWithValidation
                    name="last-name"
                    required
                    label="Last name"
                    validations={[
                        Field.isRequired({propName: 'Last name'}),
                        StringField.hasMaxLength(64, {propName: 'Last name'}),
                        StringField.hasMinLength(2, {propName: 'Last name'}),
                    ]}
                />
                <InputWithValidation
                    name="email"
                    type="email"
                    required
                    label="Email"
                    validations={[
                        Field.isRequired({propName: 'Email'}),
                        Field.shouldMatch(
                            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                            {errorMessage: 'Email is invalid'}),
                    ]}
                />

                <InputWithValidation
                    name="phone"
                    type="tel"
                    label="Phone"
                    validations={[
                        Field.shouldMatch(
                            /^((\([0-9]{3}\)|[0-9]{3})\s[0-9]{3}[-\s]?[0-9]{4,6}|)$/im,
                            {
                                errorMessage: `Phone number should be in some of the following formats: ${
                                    '(123) 456-7890, ' +
                                    '(123) 456 7890, ' +
                                    '123 456 7890, ' +
                                    '123 456-7890'}`
                            })
                    ]}
                />

                <InputWithValidation
                    name="lucky-number"
                    type="number"
                    step="2"
                    required
                    label="Lucky number"
                    validations={[
                        Field.isRequired(),
                        NumberField.isGreaterThan(1),
                        NumberField.isLessThan(10),
                        NumberField.isBetween(1, 10),
                        NumberField.isEven(),
                    ]}
                />

                <InputWithValidation
                    name="date"
                    type="date"
                    required
                    label="Date"
                    validations={[
                        Field.isRequired(),
                        DateField.isAfter(new Date())
                    ]}
                />

                <InputWithValidation
                    name="file"
                    type="file"
                    label="File"
                    validations={[
                        FilesField.haveSingleSizeLessThan(500).kb(),
                        FilesField.areOfType('image/jpeg'),
                        FilesField.nameFollowsPattern(/.jpg$/i, {errorMessage: 'Filename should end with ".jpg"'}),
                        FilesField.maxCount(2),
                    ]}
                    multiple
                />

                <SelectWithValidation
                    name="rgb-colors"
                    required
                    label="RGB Colors"
                    getData={ColorsService.getAll}
                    validations={[
                        Field.isRequired({propName: 'Color'}),
                    ]}
                    initiallyEmpty
                />

                <TextareaWithValidation
                    name="application-letter"
                    cols={50}
                    required
                    label="Application letter"
                    validations={[
                        Field.isRequired({propName: 'Application letter'}),
                        StringField.hasMinLength(50, {propName: 'Application letter'}),
                        StringField.hasMaxLength(450, {propName: 'Application letter'}),
                    ]}
                />
            </FormWithValidation>
            <div />
        </div>
    );
}
