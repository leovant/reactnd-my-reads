import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'antd';
import * as BooksAPI from '../utils/BooksAPI';
import Shelf from '../components/Shelf';

class Home extends Component {
  state = {
    loading: true,
    books: []
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.setState(currentState => {
        const updatedBooks = currentState.books.map(item => {
          if (item.id === book.id) {
            return { ...item, shelf };
          }
          return item;
        });
        return { books: updatedBooks };
      });
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({ books, loading: false }));
    });
  }

  render() {
    const { books, loading } = this.state;

    return (
      <div>
        <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100 }}>
          <Link to="/search">
            <Button
              type="primary"
              icon="plus"
              size="large"
              shape="circle"
              style={{ width: 56, height: 56 }}
            />
          </Link>
        </div>
        <Row>
          <Shelf
            title="Currently Reading"
            books={books.filter(book => book.shelf === 'currentlyReading')}
            onShelfChange={this.handleShelfChange}
          />
        </Row>
        <Row>
          <Shelf
            title="Want to Read"
            books={books.filter(book => book.shelf === 'wantToRead')}
            onShelfChange={this.handleShelfChange}
          />
        </Row>
        <Row>
          <Shelf
            title="Read"
            books={books.filter(book => book.shelf === 'read')}
            onShelfChange={this.handleShelfChange}
          />
        </Row>
      </div>
    );
  }
}

export default Home;
