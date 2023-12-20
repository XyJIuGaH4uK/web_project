import aboutIMG from '../assets/aboutIMG.png'
import aboutIMG2 from '../assets/aboutIMG2.png'
import aboutIMG3 from '../assets/aboutIMG3.png'
import { BsXbox, BsPlaystation, BsWindows, } from 'react-icons/bs'

export const aboutSections = [
	{img: aboutIMG, txt: "AAA Projects"},
	{img: aboutIMG2, txt: "E-Sports"},
	{img: aboutIMG3, txt: "Eternal classic"},
]

export const platforms = [
	{icon: BsWindows, name: "PC", games: 6729, slug: 'pc'},
	{icon: BsPlaystation, name: "PS", games: 517915, slug: 'playstation'},
	{icon: BsXbox, name: "XBOX", games: 5558, slug: 'xbox'},
]

export const ratingColors = {
	exceptional: ["#AFDB01", "#0FBB00"],
	recommended:["#00D2DF", "#0400BB"],
	meh:["#ED8E00", "#D22600"],
	skip: ["#D22600", "#3F00C6"]
}