import React from 'react'
import NavbarUser from '../../components/NavbarUser'
import SlideImages from '../../components/SlideImages'
import SlidePromotion from '../../components/SlidePromotion'
import Categories from '../../components/Categories'
import SlideCard from '../../components/SliderCard'
import BookFlashSale from '../../components/BookFlashSale'
import Books from '../../components/Books'
import Footer from '../../components/Footer'

function HomeUser() {
  return (
    <>
    <NavbarUser/>
    <SlideImages/>
    <SlidePromotion/>
    <Categories/>
    <SlideCard/>
    <BookFlashSale/>
    <Books/>
    <Footer/>
    </>
  )
}

export default HomeUser