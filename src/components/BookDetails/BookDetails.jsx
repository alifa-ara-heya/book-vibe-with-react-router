import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList, addToWishList } from "../../Utility/AddToDB";

const BookDetails = () => {
    // const param = useParams();
    const { bookId } = useParams();
    const id = parseInt(bookId);


    const data = useLoaderData();


    // console.log(data);
    // console.log(typeof bookId, typeof id, typeof data[0].bookId);


    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image } = book;



    // console.log(book, bookId, id);
    // // console.log(bookId);

    const handleMarkAsRead = (id) => {
        // console.log('mark as read btn clicked');
        addToStoredList(id)
    }

    const handleWishList = id => {
        addToWishList(id)
    }
    return (
        <div className="my-12">
            <p>Book Details: {bookId} </p>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn bg-green-500 text-black">Mark as Read</button>
            <button onClick={()=>handleWishList(bookId)} className="btn border-green-500 text-gray-300 ml-4">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;