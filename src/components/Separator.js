import React, { PropTypes, Component } from 'react'


export default class Separator extends Component {
  render() {
        const stl = {
            width: this.props.width ? this.props.width : '100%'
        }
        return <div className='separator'>
            <div className='separator__line' style={stl}></div>
        </div>
  }
}

Separator.propTypes = {
  width: PropTypes.string
}
