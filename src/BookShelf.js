import React, {Component} from "react"
import { Link } from "react-router-dom"
import Shelf from "./Shelf"


class BookShelf extends Component {

  render() {
    return (
      <div className="list-books">
            <div className="list-books-title">
                <h1>Books I'm Reading</h1>
            </div>
                <Shelf books={this.props.books.filter(book => book.shelf === "currentlyReading")} changeShelf={this.props.changeShelf} name="currentlyReading" />
                <Shelf books={this.props.books.filter(book => book.shelf === "wantToRead")} changeShelf={this.props.changeShelf} name="wantToRead" />
                <Shelf books={this.props.books.filter(book => book.shelf === "read")} changeShelf={this.props.changeShelf} name="read" />
            <div className="open-search">
                <Link className="search-books" to="/search">Add a book</Link>
            </div>
      </div>
    )
  }
}
export default BookShelf
