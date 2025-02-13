import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-2 text-center bg-gray-200 mt-2">
            <div>
                <h1 className="text-3xl">
                    Time spend in reading: {readingTime} min
                </h1>
            </div>
            <h1 className="text-2xl">Bookmarks:{bookmarks.length}</h1>
            
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}/>)
                }
            
                
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;