import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Spin } from 'antd';
import Book from './Book';
import Loader from './Loader';

function Shelf(props) {
  const { title, loading, books, onShelfChange } = props;

  return (
    <Card title={title} style={{ margin: 10 }}>
      {books.length === 0 && !loading && (
        <p>No books to display in this shelf.</p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map(book => (
          <Book
            book={book}
            key={book.id}
            onShelfChange={shelf => onShelfChange(book, shelf)}
          />
        ))}
      </div>
      {loading === true && <Loader />}
    </Card>
  );
}

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func
};

export default Shelf;
