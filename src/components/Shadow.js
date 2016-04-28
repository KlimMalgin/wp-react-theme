import React, { Component } from 'react'
import cs from 'classnames'

export default class Shadow extends Component {
    render () {
        const { shadow, actions } = this.props
        const shadowCls = cs({
            shadow: true,
            active: shadow.active
        })
        return <div className={shadowCls} onClick={actions.disableShadow}></div>
    }
}