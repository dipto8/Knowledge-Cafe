import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import PropTypes from 'prop-types'


function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)
  const handleBookmarks =blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  
  }
  const handleReadingTime = (id,time) =>{
     const newreadingTime = readingTime + time
     setReadingTime(newreadingTime)
      // remove the read blog from Bookmark
      // console.log('remove Bookmark',id)
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
      setBookmarks(remainingBookmarks)
  }


  return (
    <>

      <Header></Header>
      <div className=" md:flex max-w-7xl mx-auto">
        <Blogs handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks} ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>

  
    </>
  )
}
App.propTypes ={
  bookmarks: PropTypes.object


}

export default App
