import { Outlet } from 'react-router'
import Header from '../utils/Header'

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<h3>this is footer section</h3>
		</>
	)
}

export default MainLayout
