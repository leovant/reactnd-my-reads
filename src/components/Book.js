import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
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
    >
      <Meta title={book.title} description={book.subtitle} />
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
