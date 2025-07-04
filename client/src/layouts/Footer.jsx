const Footer = () => {
	return (
		<nav class='navbar bg-base-200 shadow-md rounded-b-lg p-4'>
			<div class='flex-1'>
				<a class='btn btn-ghost normal-case text-2xl font-bold text-blue-600'>
					<img
						src='https://placehold.co/40x40/0000FF/FFFFFF?text=Logo'
						alt='Company Logo'
						class='rounded-full mr-2'
					/>
					LifeSecure
				</a>
			</div>
			<div class='flex-none'>
				<ul class='menu menu-horizontal px-1'>
					<li>
						<a class='font-medium hover:text-blue-600'>Home</a>
					</li>
					<li>
						<a class='font-medium hover:text-blue-600'>All Policies</a>
					</li>
					<li>
						<a class='font-medium hover:text-blue-600'>Blog/Articles</a>
					</li>
					<li>
						<a class='font-medium hover:text-blue-600'>Dashboard</a>
					</li>
					<li>
						<a class='font-medium hover:text-blue-600'>Login/Register</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Footer
