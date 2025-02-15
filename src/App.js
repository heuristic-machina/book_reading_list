import { useEffect, useContext, useCallback } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {
    const { fetchBooks } = useContext(BooksContext);

    const fetchBooksCallback = useCallback(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        fetchBooksCallback();
    }, [fetchBooksCallback]);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
};

export default App;
