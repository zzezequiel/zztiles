
import React from 'react'
import CarouselHome from '../components/home/banner/Carousel'
import Destacados from '../components/home/destacados/Destacados'
import Partners from '../components/home/partners/Partners'
import Products from '../components/home/productos/Products'
import Services from '../components/home/servicesZZ/Services'

const Home = () => {
  return (
    <>
    <CarouselHome />
    <Partners />
    <Destacados />
    
    <Products />

    <Services />
    </>
  )
}

export default Home