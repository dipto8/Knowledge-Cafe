import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    Title,
    Cover,
    Author,
    Author_img,
    Posted_date,
    Reading_time,
    Hashtags,
    Id,
  } = blog;
  return (
    <div>
      <img src={Cover} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={Author_img} alt="" />
          <div className="ml-2">
            <h2 className="text-2xl">{Author}</h2>
            <p>{Posted_date}</p>
          </div>
        </div>
        <div className="">
          <span>{Reading_time} min read</span>
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
};
export default Blog;
