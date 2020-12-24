const value = 'The file'

const Files = {
    areOfType(mimeType, {errorMessage, propName} = {}) {
        return ([...files]) => [
            files.filter(x => x.type !== mimeType).length === 0,
            errorMessage || `${propName || value} should be of type ${mimeType}`
        ]
    },
    haveSingleSizeLessThan(size) {
        return {
            bytes({errorMessage, propName} = {}) {
                return ([...files]) => [
                    files.filter(x => x.size >= size).length === 0,
                    errorMessage || `${propName || value} should be less than ${size} bytes`]
            },
            kb({errorMessage, propName} = {}) {
                return ([...files]) => [
                    files.filter(x => x.size >= size * 1000).length === 0,
                    errorMessage || `${propName || value} should be less than ${size} kb`]
            },
            mb({errorMessage, propName} = {}) {
                return ([...files]) => [
                    files.filter(x => x.size  >= size * 1000000).length === 0,
                    errorMessage || `${propName || value} should be less than ${size} mb`]
            },
        }
    },
    nameFollowsPattern(regex, {errorMessage, propName} = {}) {
        return ([...files]) => [files.filter(x => !regex.test(x.name)).length === 0,
            errorMessage || `${propName || value} name should follow pattern ${regex}`]
    },
    maxCount(count, {errorMessage, propName} = {}) {
        return ([...files]) => [files.length <= count, errorMessage || `${propName || value} count should be ${count} or less`]
    }
}

export default Files
