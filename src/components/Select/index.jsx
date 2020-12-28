import React, {useState, useEffect} from 'react'
import styles from './style.module.css'

const Select = React.forwardRef(function (props, ref) {
    const [data, setData] = useState(null)

    const {initiallyEmpty, getData, ...selectProps} = props

    useEffect(function () {
        if (!!getData)
            getData().then(d => setData(d))
    }, [getData])

    return (
        <>
            {!data ? <div>Loading...</div> : <></>}
            <select
                ref={ref}
                className={!!data ? styles.visible : styles.hidden}
                {...selectProps}
                hidden={!data}
                defaultValue=''>
                {initiallyEmpty ? <option hidden disabled value='' /> : ''}
                {data?.map(({key, value, textContent}) => (
                    <option key={key} value={value}>{textContent || value}</option>))}
            </select>
        </>
    )
})

export default Select
