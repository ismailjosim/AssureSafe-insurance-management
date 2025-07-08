import Header from '../utils/Header'
import { Outlet } from 'react-router'

const AuthLayout = () => {
	return (
		<section>
			<Header />
			<Outlet />
		</section>
	)
}

export default AuthLayout
