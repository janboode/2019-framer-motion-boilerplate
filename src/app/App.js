import React from 'react'
import FramerMotionComponent from './components/FramerMotionComponent'

import './App.scss'

const App = () => {
    return(
        <div className="App">
            <FramerMotionComponent />
            <h1>2019 basic framer-motion boilerplate.</h1>
            <p>Personal Boilerplate for mid 2019. It contains Webpack, Babel, Sass, React and some goodies like post-css (autoprefixer), uglify-js and optimize-css! Framer motion was added for animation purposes. Ready when you are!</p>
        </div>
    )
}

export default App