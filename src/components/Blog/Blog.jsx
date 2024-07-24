import PropTypes from "prop-types";
import { FcBookmark } from "react-icons/fc";

const Blog = ({ blog, handleBookmarks}) => {
  const {
    Title,
    Cover,
    Author,
    Author_img,
    Posted_date,
    Reading_time,
    Hashtags,
    
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-1/3 mb-4"  src={Cover} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={Author_img} alt="" />
          <div className="ml-2">
            <h2 className="text-2xl">{Author}</h2>
            <p>{Posted_date}</p>
          </div>
        </div>
        <div className="mx-auto">
          <span>{Reading_time} min read</span>
          <button className="ml-2 text-2xl" onClick={()=>handleBookmarks(blog)}><FcBookmark /></button>
        </div>
      </div>
      <h2 className="text-2xl"> Title:{Title}</h2>
      <p>
        {Hashtags.map((Hashtag,Idx) => (
          <span key={Idx}>
            <a href="">{Hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func
};
export default Blog;
