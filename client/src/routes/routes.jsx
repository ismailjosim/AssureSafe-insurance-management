import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../Pages/Home'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'

const routes = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		errorElement: <h3>page not found</h3>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/policies',
				element: <h3>All Policies page</h3>,
			},
			{
				path: '/single-policy/:policyId',
				element: <h3>Single Policy page</h3>,
			},
			{
				path: '/blogs',
				element: <h3>All Blogs page</h3>,
			},
			{
				path: '/single-blog/:blogId',
				element: <h3>Single Blog page</h3>,
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
])
export default routes
