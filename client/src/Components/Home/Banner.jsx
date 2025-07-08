import React from 'react'

const Banner = () => {
	return (
		<section className='hero min-h-[500px] hero-section-bg rounded-lg shadow-lg mx-auto mt-8 relative overflow-hidden'>
			<div className='hero-overlay bg-opacity-60 bg-gradient-to-r from-blue-800 to-transparent rounded-lg'></div>
			<div className='hero-content text-center text-neutral-content p-8'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold text-white leading-tight'>
						Secure Your Tomorrow Today
					</h1>
					<p className='mb-5 text-lg text-gray-200'>
						Explore personalized policies, get instant quotes, and manage your
						insurance digitally with ease.
					</p>
					<button className='btn btn-primary btn-lg shadow-xl hover:scale-105 transition-transform duration-300'>
						Get a Free Quote
					</button>
				</div>
			</div>
		</section>
	)
}

export default Banner
