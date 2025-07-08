import React from 'react'

const Agents = () => {
	return (
		<section className='container mx-auto p-8 mt-12 mb-12'>
			<h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>
				Meet Our Expert Agents
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-60'>
						<img
							src='https://placehold.co/400x300/FF6347/FFFFFF?text=Agent+1'
							alt='Agent 1'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6 text-center'>
						<h3 className='card-title text-2xl text-gray-800 mb-2 justify-center'>
							Agent Name 1
						</h3>
						<p className='text-gray-600 mb-2'>Experience: 10 Years</p>
						<p className='text-gray-700 font-medium'>
							Specialties: Term Life, Senior Plans
						</p>
						<div className='card-actions justify-center mt-4'>
							<button className='btn btn-sm btn-outline btn-info'>
								Contact Agent
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-60'>
						<img
							src='https://placehold.co/400x300/FF6347/FFFFFF?text=Agent+2'
							alt='Agent 2'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6 text-center'>
						<h3 className='card-title text-2xl text-gray-800 mb-2 justify-center'>
							Agent Name 2
						</h3>
						<p className='text-gray-600 mb-2'>Experience: 11 Years</p>
						<p className='text-gray-700 font-medium'>
							Specialties: Health Insurance, Family Plans
						</p>
						<div className='card-actions justify-center mt-4'>
							<button className='btn btn-sm btn-outline btn-info'>
								Contact Agent
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-60'>
						<img
							src='https://placehold.co/400x300/FF6347/FFFFFF?text=Agent+3'
							alt='Agent 3'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6 text-center'>
						<h3 className='card-title text-2xl text-gray-800 mb-2 justify-center'>
							Agent Name 3
						</h3>
						<p className='text-gray-600 mb-2'>Experience: 12 Years</p>
						<p className='text-gray-700 font-medium'>
							Specialties: Investment Linked, Retirement
						</p>
						<div className='card-actions justify-center mt-4'>
							<button className='btn btn-sm btn-outline btn-info'>
								Contact Agent
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Agents
