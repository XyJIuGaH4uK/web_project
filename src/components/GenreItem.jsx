/* eslint-disable react/prop-types */
import classes from '../styles/GenreItem.module.css'

const GenreItem = ({img, name}) => {
  return (
	<div className={classes.item}>
		<img src={img} alt="" className={classes.img}/>
		<h3 className={classes.name}>{name}</h3>
	</div>
  )
}

export default GenreItem