import React, { Component } from 'react'
import cs from 'classnames'

export default class Shadow extends Component {
    render () {
        const shadowCls = cs({
            shadow: true,
            active: this.props.active
        })
        return <div className={shadowCls}></div>
    }
}