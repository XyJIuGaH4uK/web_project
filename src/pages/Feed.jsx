/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import classes from '../styles/Feed.module.css'
import Container from '../components/Container'
import Title from '../components/Title'
import Header from '../components/Header'
import axios from 'axios'
import GameCard from '../components/GameCard'

const Feed = ({toggleCompletedGame, completedGames}) => {

	const fetchGames = () => {
		axios.get('https://api.rawg.io/api/games?key=7fc5502620c64a2da2116a770ca355ea&page=1',).then((response) => {setGames(response.data.results)})
	}

	const [games, setGames] = useState([])

	useEffect(() => {
		if (games.length === 0) {
			fetchGames()
		}
	})

	const [searchVal, setSearchVal] = useState("")

	if (!games.length) {
		return <div className={classes.loader}></div>
	}
  return (
	<div className={classes.feed}>
		<div className={classes.heroGradient}></div>
		<Container>
			<Header searchVal={searchVal} setSearchVal={(val) => setSearchVal(val)}/>
			<Title text='Popular games'/>
			<div className={classes.gamesList}>
				{searchVal 
				? games.filter(game => game.name.toLowerCase().startsWith(searchVal.toLowerCase())).map(game => 
					<GameCard toggleCompletedGame={(id) => toggleCompletedGame(id)} isCompleted={completedGames.find(id => id == game.id) != undefined} key={game.id} id={game.id} name={game.name} background_image={game.background_image} genres={game.genres}/>
				) : games.map(game => 
					<GameCard toggleCompletedGame={(id) => toggleCompletedGame(id)} isCompleted={completedGames.find(id => id == game.id) != undefined} key={game.id} id={game.id} name={game.name} background_image={game.background_image} genres={game.genres}/>
				)}
			</div>
		</Container>
	</div>
  )
}

export default Feed