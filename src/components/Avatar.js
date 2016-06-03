import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'
import { config, endpoints } from '../config'
 
console.log('cfg >> ', config, endpoints);

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
    
    console.log('%o %o %o %o %o %o', config, config.server, config.files.img[size], data.filename, size, data);
    
    return <div className='avatar'>
        <div className={imageCls}>
            <img src={config.server + config.files.img[size] + data.filename} className='avatar__image' />
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
