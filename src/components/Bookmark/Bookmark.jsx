import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {Title} =bookmark
    return (
        <div className='bg-gray-200 p-4 m-5 rounded-xl'>
            <h3 className='text-3xl text-center'>{Title}</h3>
            
        </div>
    );
};

export default Bookmark;
Bookmark.propTypes ={
    bookmark: PropTypes.object
}