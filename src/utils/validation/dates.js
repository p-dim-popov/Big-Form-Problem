import dayjs from "dayjs";

const value = 'Date'

const DateField = {
    isInFormat(format, {errorMessage, propName} = {}) {
        return (x) => [dayjs(x).isValid(), errorMessage || `${propName || value} should be in format "${format}"`]
    },
    isAfter(date, {errorMessage, propName} = {}){
        return (x) => [dayjs(x).isAfter(date), errorMessage || `${propName || value} should be after ${date}`]
    },
}

export default DateField
