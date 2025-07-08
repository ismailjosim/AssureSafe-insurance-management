import React from 'react'

const Newsletter = () => {
	return (
		<section className='bg-gradient-to-r from-blue-600 to-blue-400 py-16 mt-12 rounded-lg shadow-xl'>
			<div className='container mx-auto p-8 text-center text-white'>
				<h2 className='text-4xl font-bold mb-6'>
					Stay Updated with Our Newsletter
				</h2>
				<p className='text-lg mb-8'>
					Get the latest insurance tips, policy updates, and exclusive offers
					directly to your inbox.
				</p>
				<form className='flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto'>
					<input
						type='text'
						placeholder='Your Name'
						className='input input-bordered w-full md:w-auto flex-grow rounded-md p-3 text-gray-800'
					/>
					<input
						type='email'
						placeholder='Your Email'
						className='input input-bordered w-full md:w-auto flex-grow rounded-md p-3 text-gray-800'
					/>
					<button
						type='submit'
						className='btn btn-warning btn-lg shadow-lg hover:scale-105 transition-transform duration-300'
					>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	)
}

export default Newsletter
