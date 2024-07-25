
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    
    <div className="md:w-1/3  bg-red-400">
        <div className="font-bold text-3xl p-4 mb-3 text-center bg-white border-2 border-red-950">Reading Time: {readingTime}</div>
    <h2 className="text-3xl text-center border-2 bg-black text-white p-4 ">Bookmarked Blog: {bookmarks.length}</h2>
    {
        bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
    }
</div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.func
}

export default Bookmarks