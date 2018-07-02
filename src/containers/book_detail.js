import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started</div>;    
        }
        return(
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
      return {
        book: state.activeBook
      };          
}

export default connect(mapStateToProps)(BookDetail);

//https://docs.google.com/spreadsheets/d/1eoI4jjIBCyVnBIl8eAXas91K3jh-q5cNf1fd7WXyZmk/edit#gid=1601890754