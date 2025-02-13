import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img,reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8 rounded-lg" src={cover} alt="" />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-[#11111199]">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className="ml-2"><GoBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="flex gap-3">
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-800 font-bold underline">Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;