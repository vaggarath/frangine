import React, { Component } from 'react';
import { books } from "../data/books";
import Book from './Book';

import 'bootstrap/dist/css/bootstrap.min.css';

class BooksList extends Component {

    state = {
        books:books,
        radios:[
            {id:1, value:"fantasy"},
            {id:2, value:"humour"},
            {id:3, value:"historique"},
            {id:4, value:"science-fiction"},
            {id:4, value:"classique"},
            {id:4, value:"drame"},
        ],
        selectedRadio: "fantasy"
    }

    handleRadio = (event) =>{
        //console.log(event.target.value)
        let radio = event.target.value
        this.setState({selectedRadio: radio})
    }

    render() {
        let {books, radios, selectedRadio} = this.state;
        return (
            <div className="portfolioContent">
                <ul className="d-flex justify-content-around flex-lg-row flex-xl-row flex-column mx-auto text-center">
                    {
                        radios.map((radio=>{
                            return(
                                <li key={radio.id}>
                                    <input 
                                    type="radio" 
                                    name="radio" 
                                    checked ={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    className="form-check-input"
                                    onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        }))
                    }
                </ul>
                <div className="container">
                    <div class="row">
                    {
                        books
                        .filter(item => item.style.includes(selectedRadio))
                        .map(item=>{
                            return <Book 
                                key={item.id}
                                item={item}
                            />
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksList;