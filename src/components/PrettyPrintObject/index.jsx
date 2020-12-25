import React from 'react'

export default function PrettyPrintObject({object, indentation}) {
    return <div><pre>{JSON.stringify(object, null, indentation || 4)}</pre></div>
}
