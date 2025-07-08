import { Link } from 'react-router'

const Register = () => {
	return (
		<main className='flex-grow flex items-center justify-center p-8'>
			<div className='card w-full max-w-md bg-white shadow-xl rounded-lg'>
				<div className='card-body p-8'>
					<h2 className='card-title text-3xl font-bold text-center text-gray-900 mb-6'>
						Create Your Account
					</h2>

					<form className='space-y-5'>
						{/* <!-- Full Name --> */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Full Name</span>
							</label>
							<input
								type='text'
								placeholder='John Doe'
								className='input input-bordered w-full rounded-md'
								required
							/>
						</div>

						{/* <!-- Email --> */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='email@example.com'
								className='input input-bordered w-full rounded-md'
								required
							/>
						</div>

						{/* <!-- Password --> */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='********'
								className='input input-bordered w-full rounded-md'
								required
							/>
						</div>

						{/* <!-- Confirm Password --> */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Confirm Password</span>
							</label>
							<input
								type='password'
								placeholder='********'
								className='input input-bordered w-full rounded-md'
								required
							/>
						</div>

						{/* <!-- Register Button --> */}
						<div className='form-control mt-6'>
							<button
								type='submit'
								className='btn btn-primary btn-lg w-full rounded-md shadow-lg hover:scale-105 transition-transform duration-300'
							>
								Register
							</button>
						</div>
					</form>

					<div className='divider text-gray-500 my-8'>OR</div>

					{/* <!-- Google Login Option --> */}
					<div className='form-control'>
						<button className='btn btn-outline btn-info btn-lg w-full rounded-md shadow-lg flex items-center justify-center space-x-3 hover:scale-105 transition-transform duration-300'>
							<i className='fab fa-google text-xl'></i>
							<span>Sign in with Google</span>
						</button>
					</div>

					<p className='text-center text-sm text-gray-600 mt-8'>
						Already have an account?{' '}
						<Link to={'/auth/login'} className='text-blue-600 hover:underline'>
							Login here
						</Link>
					</p>
				</div>
			</div>
		</main>
	)
}

export default Register
