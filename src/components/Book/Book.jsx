import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-blue-200 py-8 rounded-2xl">
                    <img className="h-[166px] rounded-xl"
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3 justify-center">
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-300 text-green-900">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="pb-4">By: {author} </p>
                    {/* <div className="divider"></div> */}
                    <div className="border border-dashed border-gray-600"></div>
                    <div className="card-actions justify-between pt-4 items-center">
                        <div className="badge badge-outline">{category} </div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400 h-5"
                                />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            
        </Link>
    );
};

export default Book;