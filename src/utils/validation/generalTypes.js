const value = 'The field'

const Field = {
    shouldMatch(regex, {errorMessage, propName} = {}) {
        return (x) =>
            [regex.test(x), errorMessage || `${propName || value} does not match the pattern ${regex}`]
    },
    isRequired({errorMessage, propName} = {}) {
        return (x) =>
            [typeof x !== "undefined" && x !== '', errorMessage || `${propName || value} is required`]
    },
}

export default Field


