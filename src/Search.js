import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {

  state = {
    query : "",
    matchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.fetchMatched(query)
  }

  fetchMatched = (query) => {
    if (query.length != 0) {
      BooksAPI.search(query).then((matchedBooks) => {
          if (matchedBooks.error){
            this.setState({matchedBooks: [] })
          } else {
            this.setState({matchedBooks: matchedBooks})
          }
        }
      )
    } else {
      this.setState({matchedBooks: [] })
    }
  }

    render() {

      return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
              <input
                 type="text"
                 placeholder="Input a title or author"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}
                  />
            </div>
       </div>
       <div className="search-books-results">
          <ol className="books-grid">
            {this.state.matchedBooks.map(matchedBook => {
              let shelf = "none"

              this.props.books.forEach(book => {
                if (book.id !== matchedBook.id) {
                    matchedBook.shelf = "none"
                } else {
                    shelf = book.shelf
                }
              })
            return (
              <li key={matchedBook.id}>
                <Book
                    book={matchedBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                />
             </li>
              )
            }
          )
          }
            </ol>
          </div>
        </div>
    )};
}


export default Search
