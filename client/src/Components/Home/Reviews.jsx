import React from 'react'

const Reviews = () => {
	return (
		<section className='bg-blue-50 py-16 mt-12 rounded-lg shadow-inner'>
			<div className='container mx-auto p-8'>
				<h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>
					What Our Customers Say
				</h2>
				<div className='carousel w-full rounded-box shadow-lg'>
					<div
						id='review-slide-1'
						className='carousel-item w-full flex justify-center p-4'
					>
						<div className='card w-full max-w-lg bg-white shadow-xl p-8 text-center'>
							<div className='avatar mb-4'>
								<div className='w-24 rounded-full mx-auto'>
									<img
										src='https://placehold.co/100x100/FFD700/000000?text=User1'
										alt='User 1'
									/>
								</div>
							</div>
							<h3 className='text-xl font-semibold mb-2'>Customer Name 1</h3>
							<div className='rating rating-md mb-4 justify-center'>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-orange-400'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
							</div>
							<p className='text-gray-700 italic'>
								"LifeSecure made getting insurance so easy! Their team was
								incredibly helpful and transparent throughout the process.
								Highly recommend!"
							</p>
						</div>
					</div>

					<div
						id='review-slide-2'
						className='carousel-item w-full flex justify-center p-4'
					>
						<div className='card w-full max-w-lg bg-white shadow-xl p-8 text-center'>
							<div className='avatar mb-4'>
								<div className='w-24 rounded-full mx-auto'>
									<img
										src='https://placehold.co/100x100/FFD700/000000?text=User2'
										alt='User 2'
									/>
								</div>
							</div>
							<h3 className='text-xl font-semibold mb-2'>Customer Name 2</h3>
							<div className='rating rating-md mb-4 justify-center'>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
							</div>
							<p className='text-gray-700 italic'>
								"Excellent service and clear policy options. I found exactly
								what I needed without any hassle. A truly modern insurance
								experience."
							</p>
						</div>
					</div>

					<div
						id='review-slide-3'
						className='carousel-item w-full flex justify-center p-4'
					>
						<div className='card w-full max-w-lg bg-white shadow-xl p-8 text-center'>
							<div className='avatar mb-4'>
								<div className='w-24 rounded-full mx-auto'>
									<img
										src='https://placehold.co/100x100/FFD700/000000?text=User3'
										alt='User 3'
									/>
								</div>
							</div>
							<h3 className='text-xl font-semibold mb-2'>Customer Name 3</h3>
							<div className='rating rating-md mb-4 justify-center'>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-orange-400'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-orange-400'
									disabled
								/>
							</div>
							<p className='text-gray-700 italic'>
								"I appreciate the transparency and the easy-to-use platform.
								Managing my policy has never been this straightforward. Highly
								recommended for everyone."
							</p>
						</div>
					</div>
				</div>
				<div className='flex justify-center w-full py-2 gap-2 mt-4'>
					<a href='#review-slide-1' className='btn btn-xs'>
						1
					</a>
					<a href='#review-slide-2' className='btn btn-xs'>
						2
					</a>
					<a href='#review-slide-3' className='btn btn-xs'>
						3
					</a>
				</div>
			</div>
		</section>
	)
}

export default Reviews
