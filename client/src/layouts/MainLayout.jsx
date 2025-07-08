import { Outlet } from 'react-router'
import Header from '../utils/Header'
import Footer from '../utils/Footer'

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default MainLayout
