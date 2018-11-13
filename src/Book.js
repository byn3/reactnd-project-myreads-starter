import React, { Component } from 'react'

class Book extends Component {
  render () {
    let bookcover
     if (this.props.book.imageLinks) {
      bookcover = this.props.book.imageLinks.thumbnail
      } else {
        bookcover = ""
      }

      return (
        <div className="book">
          <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${bookcover})` }}></div>
              <div className="book-shelf-changer">
                  <select
                      onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)}
                      value={this.props.book.shelf}
                  >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">Remove</option>
                  </select>
              </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
      </div>
      )
  }
}
export default Book
