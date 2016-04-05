import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

export default class Avatar extends Component {
  render() {
    const { data, imgInline, textInline, size } = this.props
    const captionDisplay = !this.props.children ? {
        display: 'none'
    } : {}
    const imageCls = classNames({
        'avatar__image-wrapper': true,
        _min: size == 'min',
        _medium: size == 'medium',
        _inline: !!imgInline
    })
    const textCls = classNames({
        avatar__caption: true,
        _inline: !!textInline
    })
    return <div className='avatar'>
        <div className={imageCls}>
            <img src={data.urls[size]} className='avatar__image' />
        </div>
        <div className={textCls} style={captionDisplay}>
            {this.props.children}
        </div>
    </div>
  }
}

Avatar.propTypes = {
  data: PropTypes.object.isRequired,
  imgInline: PropTypes.bool,
  textInline: PropTypes.bool,
  size: PropTypes.string.isRequired     // 'min', 'small', etc.
}
