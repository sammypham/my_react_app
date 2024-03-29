import PropTypes from 'prop-types'
import './Header.css'
import Button from '../Button/Button.js'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  const buttonClicked = () => {
    console.log('Hi')
  }

  return (
    <header>
        <NavLink className='header-title' to='/home'>Sammy Pham</NavLink>
        <NavLink to='/projects'>
          <Button text="Projects" />
        </NavLink>
        <NavLink to='/contact'>
          <Button text="Contact" />
        </NavLink>
    </header>
  )
}

export default Header