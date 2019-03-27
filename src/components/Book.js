import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';
import ShelfMenu from './ShelfMenu';

const { Meta } = Card;

function Book(props) {
  const { book, onShelfChange } = props;
  const handleShelfChange = shelf => {
    if (onShelfChange) {
      onShelfChange(shelf);
    }
  };
  const actions = [];

  return (
    <Card
      style={{ margin: 10, width: 300, paddingBottom: 35 }}
      actions={actions}
      cover={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            paddingTop: 5
          }}
        >
          <div
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
        </div>
      }
    >
      <Meta
        title={book.title}
        description={book.subtitle}
        style={{ marginBottom: 5 }}
      />
      <p style={{ marginBottom: 5 }}>
        {book.authors ? book.authors.join(', ') : null}
      </p>
      {book.pageCount && (
        <p style={{ marginBottom: 5, color: 'rgba(0, 0, 0, 0.45)' }}>{`${
          book.pageCount
        } pages`}</p>
      )}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          padding: '5px 5px 5px 32px',
          backgroundColor: 'rgb(240, 242, 245)',
          alignItems: 'center'
        }}
      >
        <span style={{ flexGrow: 1 }}>
          {book.averageRating && (
            <Button icon="star" style={{ fontWeight: 'bold' }}>
              <span style={{ paddingLeft: 5 }}>{book.averageRating}</span>
            </Button>
          )}
        </span>
        <a
          href={book.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ paddingRight: 2 }}
        >
          <Button icon="eye" />
        </a>
        <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
          <Button icon="info" />
        </a>
      </div>
      <div style={{ position: 'absolute', top: -10, right: -10 }}>
        <ShelfMenu
          shelf={book.shelf || 'none'}
          onShelfChange={handleShelfChange}
        />
      </div>
    </Card>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func
};

export default Book;
