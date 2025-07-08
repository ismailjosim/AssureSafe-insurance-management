const PopularPolicies = () => {
	return (
		<section className='container mx-auto p-8 mt-12'>
			<h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>
				Our Popular Policies
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+1'
							alt='Policy 1'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 1
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+2'
							alt='Policy 2'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 2
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+3'
							alt='Policy 3'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 3
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+4'
							alt='Policy 4'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 4
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+5'
							alt='Policy 5'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 5
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-48'>
						<img
							src='https://placehold.co/400x200/4CAF50/FFFFFF?text=Policy+6'
							alt='Policy 6'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-2xl text-gray-800 mb-2'>
							Policy Title 6
						</h3>
						<p className='text-gray-600 mb-4'>
							Coverage: $500,000 | Term: 20 Years
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-primary'>
								Details
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PopularPolicies
