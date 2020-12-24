const value = 'The string'

const String = {
    hasMaxLength(number, {errorMessage, propName} = {}) {
        return (x) =>
            [x.length <= number, errorMessage || `${propName || value} should be smaller than ${number} chars`]
    },
    hasMinLength (number, {errorMessage, propName} = {})
    {
        return (x) =>
            [x.length >= number, errorMessage || `${propName || value} should be more than ${number} chars`]
    },
}

export default String
