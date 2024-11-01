import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../Utility/AddToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [sort, setSort] = useState("")
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData(); //ideally we will get the read book list from the database.

    useEffect(() => {

        const storedReadList = getStoredList();
        // worst way
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // console.log(storedReadList, allBooks, storedReadListInt);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);
        console.log(readList);
    }, [])


    const handleSort = sortType => {
        setSort(sortType);

        // 

        if (sortType === 'Number of Pages'){
            const sortedReadList = [...readList].sort((a, b)=> a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }

        if (sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }
    return (
        <div>
            {/* dropdown menu */}
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort? `Sort by: ${sort}`:'Sort By' } </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('Number of Pages')}><a>Sort by number of pages</a></li>
                </ul>
            </div>
            {/* dropdown menu ends */}


            <h3 className='text-3xl my-8'>Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read:{readList.length} </h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;