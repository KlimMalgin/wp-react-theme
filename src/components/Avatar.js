import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

export default class Avatar extends Component {
  render() {
    const { url, imgInline, textInline, size } = this.props
    const captionDisplay = !this.props.children ? {
        display: 'none'
    } : {}
    const imageCls = classNames({
        'avatar__image-wrapper': true,
        _min: size == 'min',
        _inline: !!imgInline
    })
    const textCls = classNames({
        avatar__caption: true,
        _inline: !!textInline
    })
    return <div className='avatar'>
        <div className={imageCls}>
            <img src={url} className='avatar__image' />
        </div>
        <div className={textCls} style={captionDisplay}>
            {this.props.children}
        </div>
    </div>
  }
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  imgInline: PropTypes.bool,
  textInline: PropTypes.bool,
  size: PropTypes.string.isRequired     // 'min', 'small', etc.
}
