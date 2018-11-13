import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class Search extends Component {

  state = {
    query : "",
    matched: []
  }

  updateQuery = (query) => {
    let splitQuery = query.replace(/^\s+/, '')
    this.setState({query: splitQuery})
    this.fetchMatched(query)
  }

  fetchMatched = (query) => {
    if (query.length) {
      BooksAPI.search(query).then((matched) => {
          if (matched.error){
            this.setState({matched: [] })
          } else {
            this.setState({matched: matched})
          }
        }
      )
    } else {
      this.setState({matched: []})
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
                 onChange={(e) => this.updateQuery(e.target.value)}
                  />
            </div>
       </div>
       <div className="search-books-results">
          <ol className="books-grid">
            {this.state.matched.map(matched => {
              let temp = "None"
              this.props.books.forEach(book => {
                if (book.id !== matched.id) {
                  matched.temp = "None"
                } else {
                  temp = book.temp
                }
              })
            return (
              <li key={matched.id}>
                <Book
                    book={matched}
                    changeShelf={this.props.changeShelf}
                    curShelf={temp}
                />
             </li>
            )
            })
            }
            </ol>
          </div>
        </div>
      );
    }
}


export default Search
