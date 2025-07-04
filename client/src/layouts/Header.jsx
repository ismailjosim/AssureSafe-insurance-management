import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from 'flowbite-react'
import { NavLink } from 'react-router'

const Header = () => {
	return (
		<Navbar fluid>
			<NavLink
				className='normal-case text-2xl font-bold text-blue-600 flex items-center'
				to={'/'}
			>
				AssureLife
			</NavLink>

			<div className='flex md:order-2'>
				<Button>Get started</Button>
				<NavbarToggle />
			</div>
			<NavbarCollapse>
				<NavbarLink href='#' active>
					Home
				</NavbarLink>
				<NavbarLink href='#'>Home</NavbarLink>
				<NavbarLink href='#'>All Policies</NavbarLink>
				<NavbarLink href='#'>Blog/Articles</NavbarLink>
				<NavbarLink href='#'>Dashboard</NavbarLink>
				<NavbarLink href='#'>Login/Register</NavbarLink>
			</NavbarCollapse>
		</Navbar>
	)
}

export default Header
