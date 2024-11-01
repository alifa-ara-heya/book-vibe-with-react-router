import { useParams } from "react-router-dom";

const BookDetails = () => {
    // const param = useParams();
    const {bookId} = useParams();
    console.log(bookId);
    return (
        <div>
            <p>Book Details: {bookId} </p>
        </div>
    );
};

export default BookDetails;