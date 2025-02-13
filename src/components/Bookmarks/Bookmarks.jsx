import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-3">
            <div className="bg-[#6047EC1A] rounded-xl">
                <h1 className="text-center text-2xl text-[#6047EC]  p-2 rounded-xl">
                    Time spend in reading: {readingTime} min
                </h1>
            </div>
            <div className="bg-[#1111110D] mt-2 p-3 space-y-3 rounded-xl">
            <h1 className="text-2xl font-bold">Bookmarked Blogs:{bookmarks.length}</h1>
            
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}/>)
                }
            
                
        </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;