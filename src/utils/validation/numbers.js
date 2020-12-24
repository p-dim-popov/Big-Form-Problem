const value = 'The value'

const Number = {
    isLessThan(a, {errorMessage, propName} = {}) {
        return (x) =>
            [+x < +a, errorMessage || `${propName || value} should be less than ${a}`]
    },
    isGreaterThan(a, {errorMessage, propName} = {}) {
        return (x) =>
            [+x > +a, errorMessage || `${propName || value} should be greater than ${a}`]
    },
    isBetween(a, b, {errorMessage, propName} = {}) {
        return (x) =>
            [+x > +a && +x < +b, errorMessage || `${propName || value} should be between ${a} and ${b} (not inclusive)`]
    },
    isEven({errorMessage, propName} = {}) {
        return (x) =>
            [+x % 2 === 0, errorMessage || `${propName || value} should be even`]
    },
}

export default Number
