/* eslint-disable react/prop-types */
import classes from '../styles/Profile.module.css'
import Container from '../components/Container';
import Header from '../components/Header';
import {AiOutlineUser} from 'react-icons/ai'
import ProfileImg from '../assets/profile.png'
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';

const Profile = ({completedGamesId, toggleCompletedGame}) => {

	const fetchGames = () => {
		if (completedGamesId.length) {
			axios.get(`https://api.rawg.io/api/games?ids=${completedGamesId.join(',')}&key=7fc5502620c64a2da2116a770ca355ea`,).then((response) => {setGames(response.data.results)})
		}
	}

	const [games, setGames] = useState([])

	useEffect(() => {
		if (games.length != completedGamesId.length) {
			fetchGames()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [completedGamesId])

	console.log(games)

  return (
	<div className={classes.profile}>
		<div className={classes.heroImg} style={{backgroundImage: `url(${ProfileImg})`}}/>
		<Container>
			<Header />
			<div className={classes.main}>
				<div className={classes.pfp}>
					<AiOutlineUser className={classes.pfpImg}/>
				</div>
				<h1 className={classes.name}>My Profile</h1>
			</div>
			<div className={classes.statWrapper}>
				<div className={classes.stats}>
					<div className={classes.stat}>
						<h6 className={classes.statName}>Completed games:</h6>
						<h2 className={classes.statValue}>{games.length}</h2>
					</div>
				</div>
			</div>
			<div className={classes.favoriteGames}>
				<Title text='Completed games'/>
				<div className={classes.gamesList}>
					{games.length 
					? games.map(game => <GameCard toggleCompletedGame={(id) => toggleCompletedGame(id)} isCompleted={completedGamesId.find(id => id == game.id) != undefined} key={game.id} id={game.id} name={game.name} background_image={game.background_image} genres={game.genres}/>) 
					: <h2>There will be your completed games</h2>
					}
				</div>
			</div>
		</Container>
	</div>
  )
}

export default Profile