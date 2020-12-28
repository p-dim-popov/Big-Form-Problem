import React from 'react'
import PropTypes from "prop-types";

PrettyPrintObject.propTypes = {
    object: PropTypes.object
}

export default function PrettyPrintObject({object, indentation}) {
    return <div><pre>{JSON.stringify(object, null, indentation || 4)}</pre></div>
}
