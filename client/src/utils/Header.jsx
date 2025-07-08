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
		<Navbar fluid rounded className='bg-white shadow-md'>
			<NavLink
				className='normal-case text-2xl font-bold text-blue-600 flex items-center'
				to={'/'}
			>
				<NavbarBrand>AssureLife</NavbarBrand>
			</NavLink>

			<div className='flex md:order-2'>
				<Button>Get started</Button>
				<NavbarToggle />
			</div>
			<NavbarCollapse>
				<NavLink to={'/'}>
					<NavbarLink active>Home</NavbarLink>
				</NavLink>
				<NavLink to={'/policies'}>
					<NavbarLink>All Policies</NavbarLink>
				</NavLink>
				<NavLink to={'/blogs'}>
					<NavbarLink>Blog/Articles</NavbarLink>
				</NavLink>
				<NavLink to={'/dashboard'}>
					<NavbarLink>Dashboard</NavbarLink>
				</NavLink>
				<NavLink to={'/auth/login'}>
					<NavbarLink>Login/Register</NavbarLink>
				</NavLink>
			</NavbarCollapse>
		</Navbar>
	)
}

export default Header
