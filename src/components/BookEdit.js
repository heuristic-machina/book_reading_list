import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    const { editBookById } = useBooksContext();
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Title: ', title);
        onSubmit();
        editBookById(book.id, title);
    };

    return (
    <form onSubmit={handleSubmit}
    className='book-edit'>
        <label>Title</label>
        <input className='input' 
        onChange={handleChange}
        value={title}
        /> 
        <button className='button is-primary'>
            Save
        </button>
    </form>
    )
}

export default BookEdit;