import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import Requests from '../requests'
const Home = () => {
  return (
    <>
        <Hero/>
        <Row title="Upcoming" fetchUrl={Requests.requestUpcoming} />
        <Row title="latest" fetchUrl={Requests.requestLatest} />
        <Row title="topRated" fetchUrl={Requests.requestTopRated} />
        <Row title="Trending" fetchUrl={Requests.requestTrending} />

    </>
  )
}

export default Home