import React from 'react'
import './App.css'
import VideoWithText from './VideoWithText/VideoWithText.jsx'
import Section from './Section/Section.jsx'
import Quote from './Quote/Quote.jsx'
import Make from './Make/Make.jsx'
import AlorePage from './AlorePage/AlorePage.jsx'
import { Featured } from './Featured/Featured.jsx'
import { FeaturedSection } from './FeaturedSection/FeaturedSection.jsx'

function App() {
  return (
    <>
      <VideoWithText/>
      <AlorePage/>
      <FeaturedSection/>
    </>
  )
}

export default App
