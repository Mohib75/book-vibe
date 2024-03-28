import { NavLink } from "react-router-dom"
import Button from "./Button"

const Hero = () => {
	return (
		<div className='hero h-[600px] bg-[#1313130D] rounded-3xl'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='sm:w-[526px]'>
					<h1 className='text-2xl leading-[40px] sm:text-5xl font-bold sm:leading-[84px] text-black'>
						Books to freshen <br /> up your bookshelf
					</h1>

					<NavLink to='/listedBooks'>
						<Button
							className='btn rounded-lg bg-[#23BE0A] text-white w-[189px] text-xl font-bold leading-5 hover:bg-[#23BE0A] hover:scale-105 transform transition-all duration-500 mt-4'
							text='View The List'
						/>
					</NavLink>
				</div>
				<img src='hero.png' className='max-w-40  sm:max-w-sm' />
			</div>
		</div>
	)
}

export default Hero
