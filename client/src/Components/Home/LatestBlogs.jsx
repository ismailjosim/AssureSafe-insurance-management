import React from 'react'

const LatestBlogs = () => {
	return (
		<section className='container mx-auto p-8 mt-12'>
			<h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>
				Latest from Our Blog
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-40'>
						<img
							src='https://placehold.co/400x200/8BC34A/FFFFFF?text=Blog+1'
							alt='Blog 1'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-xl text-gray-800 mb-2'>
							Blog Title 1
						</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Short summary of the blog post, enticing the reader to click and
							learn more.
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-secondary'>
								Read More
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-40'>
						<img
							src='https://placehold.co/400x200/8BC34A/FFFFFF?text=Blog+2'
							alt='Blog 2'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-xl text-gray-800 mb-2'>
							Blog Title 2
						</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Short summary of the blog post, enticing the reader to click and
							learn more.
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-secondary'>
								Read More
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-40'>
						<img
							src='https://placehold.co/400x200/8BC34A/FFFFFF?text=Blog+3'
							alt='Blog 3'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-xl text-gray-800 mb-2'>
							Blog Title 3
						</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Short summary of the blog post, enticing the reader to click and
							learn more.
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-secondary'>
								Read More
							</button>
						</div>
					</div>
				</div>

				<div className='card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden'>
					<figure className='h-40'>
						<img
							src='https://placehold.co/400x200/8BC34A/FFFFFF?text=Blog+4'
							alt='Blog 4'
							className='w-full h-full object-cover'
						/>
					</figure>
					<div className='card-body p-6'>
						<h3 className='card-title text-xl text-gray-800 mb-2'>
							Blog Title 4
						</h3>
						<p className='text-gray-600 text-sm mb-4'>
							Short summary of the blog post, enticing the reader to click and
							learn more.
						</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-sm btn-outline btn-secondary'>
								Read More
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center mt-10'>
				<button className='btn btn-lg btn-accent shadow-lg hover:scale-105 transition-transform duration-300'>
					View All Blog/Articles
				</button>
			</div>
		</section>
	)
}

export default LatestBlogs
