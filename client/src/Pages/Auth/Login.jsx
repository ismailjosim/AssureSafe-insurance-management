import { Link } from 'react-router'

const Login = () => {
	return (
		<main className='flex-grow flex items-center justify-center p-8'>
			<div className='card w-full max-w-md bg-white shadow-xl rounded-lg'>
				<div className='card-body p-8'>
					<h2 className='card-title text-3xl font-bold text-center text-gray-900 mb-6'>
						Welcome Back!
					</h2>

					<form className='space-y-5'>
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

						{/* <!-- Forgot Password Link --> */}
						<div className='text-right text-sm'>
							<a href='#' className='text-blue-600 hover:underline'>
								Forgot password?
							</a>
						</div>

						{/* <!-- Login Button --> */}
						<div className='form-control mt-6'>
							<button
								type='submit'
								className='btn btn-primary btn-lg w-full rounded-md shadow-lg hover:scale-105 transition-transform duration-300'
							>
								Login
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
						Don't have an account?{' '}
						<Link
							to={'/auth/register'}
							className='text-blue-600 hover:underline'
						>
							Register here
						</Link>
					</p>
				</div>
			</div>
		</main>
	)
}

export default Login
