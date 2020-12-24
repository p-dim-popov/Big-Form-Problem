export default function validator(predicateMessageTuples) {
    return {
        validate(x) {
            return predicateMessageTuples
                .map((predicate) => predicate(x))
                .reduce((acc, [isValid, errorMessage]) => isValid
                    ? acc
                    : [...acc, errorMessage], [])
        }
    }
}
