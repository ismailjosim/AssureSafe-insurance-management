const Footer = () => {
	return (
		<nav className='navbar bg-base-200 shadow-md rounded-b-lg p-4'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-2xl font-bold text-blue-600'>
					<img
						src='https://placehold.co/40x40/0000FF/FFFFFF?text=Logo'
						alt='Company Logo'
						className='rounded-full mr-2'
					/>
					LifeSecure
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<a className='font-medium hover:text-blue-600'>Home</a>
					</li>
					<li>
						<a className='font-medium hover:text-blue-600'>All Policies</a>
					</li>
					<li>
						<a className='font-medium hover:text-blue-600'>Blog/Articles</a>
					</li>
					<li>
						<a className='font-medium hover:text-blue-600'>Dashboard</a>
					</li>
					<li>
						<a className='font-medium hover:text-blue-600'>Login/Register</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Footer
