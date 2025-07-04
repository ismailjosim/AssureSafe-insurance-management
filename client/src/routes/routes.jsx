import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'

const routes = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		errorElement: <h3>page not found</h3>,
		children: [
			{
				index: true,
				element: <h3> Home page</h3>,
			},
		],
	},
])
export default routes
