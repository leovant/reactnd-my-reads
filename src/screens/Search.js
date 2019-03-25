import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Input, notification, Row, Typography } from 'antd';
import Book from '../components/Book';
import * as BooksAPI from '../utils/BooksAPI';

const { Title } = Typography;

class Search extends Component {
  state = {
    loading: true,
    books: []
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      notification.success({
        placement: 'bottomLeft',
        message: 'Book added',
        description:
          'The book was added to your shelf. Click here to see it there.',
        onClick: () => {
          this.props.history.push('/');
        }
      });
    });
  };

  handleSearch = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          notification.error({
            placement: 'bottomLeft',
            message: 'No books found!'
          });
        }
        this.setState(() => {
          return { books, loading: false };
        });
      });
    }
  };

  render() {
    const { books } = this.state;
    return (
      <div>
        <Row style={{ margin: 10 }}>
          <div style={{ display: 'flex' }}>
            <Link to="/">
              <Button icon="left" />
            </Link>
            <Input.Search
              placeholder="Type to search for books"
              onSearch={this.handleSearch}
              onChange={e => {
                if (e.target.value.length === 0) {
                  this.setState(() => ({ books: [] }));
                }
              }}
              enterButton
            />
          </div>
        </Row>
        {books.length === 0 && (
          <Row style={{ margin: 10 }}>
            <p>Type in the text field to search for books</p>
          </Row>
        )}
        {books.length > 0 && (
          <Card style={{ margin: 10 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {books.map(book => (
                <Book
                  book={book}
                  key={book.id}
                  onShelfChange={shelf => this.handleShelfChange(book, shelf)}
                />
              ))}
            </div>
          </Card>
        )}
      </div>
    );
  }
}

export default Search;
