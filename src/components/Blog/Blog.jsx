import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";
const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img,reading_time, posted_date, hashtags } = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8" src={cover} alt="" />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className="ml-2"><GoBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;