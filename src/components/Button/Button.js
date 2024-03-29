import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = (props) => {
  return (
    <button className='btn' onClick={props.onClick}> {props.text} </button>
  )
}

Button.defaultProps = {
    text: 'Button',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button