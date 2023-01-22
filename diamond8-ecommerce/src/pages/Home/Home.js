import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HomeCover from '../../components/HomeCover/HomeCover'
import Slider from '../../components/Slider/Slider'


const Home = () => {
  return (
    <div>
        <Header />
        <HomeCover />
        <Slider />
        <Footer />
    </div>
  )
}

export default Home