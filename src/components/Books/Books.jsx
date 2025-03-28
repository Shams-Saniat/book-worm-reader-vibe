import React, { useState } from 'react';

const Books = () => {

    const [books, setBooks] = useState([]);

    return (
        <div>
            {/* h3.text-4xl.font-bold.text-center */}
            <h3 className="text-4xl font-bold text-center">Books</h3>
        </div>
    );
};

export default Books;

/**
 * 1. state to store the books
 * 2. 
 */