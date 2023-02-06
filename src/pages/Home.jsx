import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import Requests from '../requests'
const Home = () => {
  return (
    <>
        <Hero/>
        <Row title="Upcoming" rowID="1" fetchUrl={Requests.requestUpcoming} />
        <Row title="Top Rated" rowID="2" fetchUrl={Requests.requestTopRated} />
        <Row title="Trending" rowID="3" fetchUrl={Requests.requestTrending} />

    </>
  )
}

export default Home