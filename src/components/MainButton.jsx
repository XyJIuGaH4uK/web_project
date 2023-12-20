/* eslint-disable react/prop-types */
import classes from '../styles/MainButton.module.css'

const MainButton  = ({text, onClick}) => {
  return (
	<button onClick={(e) => {onClick ? onClick(e) : 1; }} className={classes.button} >
		{text}
	</button>
  )
}

export default MainButton;