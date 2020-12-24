import React, {Component} from 'react'
import styles from './style.module.css'

class InnerSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }

        const {initiallyEmpty, getData, innerRef, ...selectProps} = this.props
        this.getData = getData
        this.selectProps = selectProps
        this.innerRef = innerRef
    }

    async componentDidMount() {
        this.setState({data: await this.getData()})
    }

    render() {
        return (
            <div>
                {!this.state.data ? <div>Loading...</div> : ''}
                <select
                    ref={this.innerRef}
                    className={!!this.state.data ? styles.visible : styles.hidden}
                    {...this.selectProps}
                    hidden={!this.state.data}
                    defaultValue=''>
                    {this.props.initiallyEmpty ? <option hidden disabled value='' /> : ''}
                    {this.state.data?.map(({key, value, textContent}) => (
                        <option key={key} value={value}>{textContent || value}</option>))}
                </select>
            </div>
        )
    }
}

const Select = React.forwardRef(
    (props, ref) =>
        <InnerSelect innerRef={ref} {...props} />)

export default Select
