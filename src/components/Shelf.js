import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import Book from './Book';

function Shelf(props) {
  return (
    <Card title={props.title} style={{ margin: 10 }}>
      {props.books.length === 0 && <p>No books to display.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {props.books.map(book => (
          <Book
            book={book}
            key={book.id}
            onShelfChange={shelf => props.onShelfChange(book, shelf)}
          />
        ))}
      </div>
    </Card>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func
};

export default Shelf;
