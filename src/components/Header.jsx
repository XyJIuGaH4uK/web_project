/* eslint-disable react/prop-types */
import classes from '../styles/Header.module.css'
import { AiOutlineUser } from 'react-icons/ai' 
import logoSvg from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = ({searchVal, setSearchVal}) => {

  return (
	<div className={classes.header}>
		<Link to={'/'} className={`${classes.wrapper} ${classes.logoWrapper}`}>
			<img src={logoSvg} className={classes.logo} alt="" />
			<h1 className={classes.logoTitle}>JOURNEY</h1>
		</Link>
		<div className={`${classes.wrapper} ${classes.inputWrapper}`}>
			<input placeholder='Search for games...' type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className={classes.input}/>
		</div>
		<Link to={`/profile/`} className={`${classes.wrapper} ${classes.profileWrapper}`}>
			<AiOutlineUser className={classes.profile}/>
		</Link>
	</div>
  )
}

export default Header