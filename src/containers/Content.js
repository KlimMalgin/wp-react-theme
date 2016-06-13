/**
 * Контейнер-обертка для рабочей области сайта
 * Дочерний элемент Content обычно является страницей
 */
import React, { Component } from 'react'

export default class Content extends Component {
    render () {
        return <div className='content'>
            <div className='container-fluid'>
                {this.props.children}
            </div>
        </div>
    }
}
