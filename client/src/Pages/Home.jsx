import Agents from '../Components/Home/Agents'
import Banner from '../Components/Home/Banner'
import LatestBlogs from '../Components/Home/LatestBlogs'
import Newsletter from '../Components/Home/Newsletter'
import PopularPolicies from '../Components/Home/PopularPolicies'
import Reviews from '../Components/Home/Reviews'

const Home = () => {
	return (
		<section>
			<Banner />
			<PopularPolicies />
			<Reviews />
			<LatestBlogs />
			<Newsletter />
			<Agents />
		</section>
	)
}

export default Home
