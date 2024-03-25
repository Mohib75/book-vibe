import { NavLink } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
	return (
		<div className='navbar bg-base-100 mt-6'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
						</svg>
					</div>
					<ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}>
							NavLinksted Books
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5"
									: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
							}>
							Pages To Read
						</NavLink>
					</ul>
				</div>
				<h1 className='text-3xl font-bold leading-8 text-center text-black'>Book Vibe</h1>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal gap-8 items-center'>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5 text-[#23BE0A] px-4 py-2"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/'>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5 text-[#23BE0A]"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/listedBooks'>
						Listed Books
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "border-[1px] border-solid border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] hover:text-white transition-all duration-500 text-lg leading-5 text-[#23BE0A]"
								: "text-lg leading-5 text-[#131313CC] hover:bg-[#131313CC] hover:text-white hover:rounded-lg transition-all duration-500 px-4 py-2"
						}
						to='/pagesToRead'>
						Pages To Read
					</NavLink>
				</ul>
			</div>
			<div className='navbar-end gap-4'>
				<Button
					className='btn rounded-lg bg-[#23BE0A] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#23BE0A] hover:scale-105 transform transition-all duration-500'
					text='Sign In'
				/>
				<Button
					className='btn rounded-lg bg-[#59C6D2] text-white w-[116px] text-lg font-semibold leading-5 hover:bg-[#59C6D2] hover:scale-105 transform transition-all duration-500'
					text='Sign Up'
				/>
			</div>
		</div>
	)
}

export default Navbar
