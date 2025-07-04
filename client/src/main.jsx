import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import routes from './routes/routes'
import { RouterProvider } from 'react-router'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<HelmetProvider>
				<RouterProvider router={routes}></RouterProvider>
			</HelmetProvider>
		</QueryClientProvider>
	</StrictMode>,
)
