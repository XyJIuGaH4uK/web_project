/* eslint-disable react/prop-types */
import classes from '../styles/GameCard.module.css'
import { useNavigate } from 'react-router-dom'

const GameCard = ({background_image, name, id, isCompleted, toggleCompletedGame}) => {

	const navigate = useNavigate()

  return (
	<div className={classes.card} style={{backgroundColor: isCompleted ? "#30a23b" : "#a24530"}}>
		<div className={classes.img} style={{backgroundImage: `url(${background_image})`}}>
			<div className={classes.buttonsWrapper}>
				<button className={classes.exploreButton} onClick={() => navigate(`/game/${id}`)}>Explore</button>
				<button className={classes.completedButton} onClick={() => toggleCompletedGame(id)}>{isCompleted ? "Completed" : "Mark as completed"}</button>
			</div>
		</div>
		<h2 className={classes.name}>
			{name}
		</h2>
	</div>
  )
}

export default GameCard