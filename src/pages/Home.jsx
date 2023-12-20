import { useNavigate } from 'react-router-dom'
import classes from '../styles/Home.module.css'
import heroImg from '../assets/hero.png'
import logoSvg from '../assets/logo.svg'
import MainButton from '../components/MainButton'
import Title from '../components/Title'
import { aboutSections } from '../data/data'
import Container from '../components/Container'
import { platforms } from '../data/data'
import PlatformItem from '../components/PlatformItem'
import { Container as BContainer, Row } from 'react-bootstrap'

const Home = () => {

	const navigate = useNavigate()
	
  return (
	<BContainer className={classes.home}>
		<div className={classes.heroImg} style={{backgroundImage: `url(${heroImg})`}} />
		<div className={classes.heroGradient} />
		<Row className={classes.header}>
			<img src={logoSvg} alt=""  className={classes.headerLogo}/>
		</Row>
		<Container>
			<br />
			<div className={classes.titleWrapper}>
				<h1 className={classes.title1}>BEGIN YOUR EPIC</h1>
				<h1 className={classes.title2}>JOURNEY</h1>
			</div>
			<div className={classes.buttonWrapper}>
				<MainButton text='Explore' onClick={() => {navigate('/feed')}}/>
				<MainButton text='My Library' onClick={() => {navigate('/profile')}}/>
			</div>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<Title text={"Biggest game library"}/>
		</Container>
		<div className={classes.about}>
			{aboutSections.map(section => 
				<div key={section.txt} className={classes.section} style={{backgroundImage: `url(${section.img})`}}>
					<div className={classes.sectionCover}></div>
					<h1 className={classes.sectionTitle}>{section.txt}</h1>	
				</div>
			)}
		</div>
		<Container>
			<Row className={classes.buttonWrapper1}>
				<MainButton text='Explore' isPatterned={true} onClick={() => {navigate('/feed')}}/>
			</Row>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
			<Row className={classes.platforms}>
				{platforms.map(platform => 
					<PlatformItem key={platform.name} Icon={platform.icon} name={platform.name} games={platform.games}/>	
				)}
			</Row>
			<hr style={{border: "1px solid var(--orange)", margin: "50px 0px"}}/>
		</Container>
	</BContainer>
  )
}

export default Home