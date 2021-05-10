import React from 'react'
import '../stylesheets/Book.css'

const Book =props=>{
    return (
        <div className="Book">
            <h4 onClick={props.change}>Book Name : {props.bookName}</h4>
            <h3>Writer Name : {props.writer}</h3>
            <input type="text" value={props.bookName} onChange={props.inputName} ></input>
        </div>
    );
}


export default Book;