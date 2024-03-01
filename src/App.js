import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
//import Experience from './components/experience/Experience'
//import Myprojects from './components/myprojects/Myprojects'
import Timeline from './components/timeline/Timeline'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    
    <>
        <Header/>
        <Timeline/>
        <Nav/>
        <About/>
        <Contacts/>
        <Footer/>

    </>
  )
}

export default App
