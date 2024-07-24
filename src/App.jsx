import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import PropTypes from 'prop-types'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleBookmarks =blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  return (
    <>

      <Header></Header>
      <div className=" md:flex max-w-7xl mx-auto">
        <Blogs handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

  
    </>
  )
}
App.propTypes ={
  bookmarks: PropTypes.object


}

export default App
