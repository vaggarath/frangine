import React, { Component } from 'react';
import { books } from "../data/books";
import Book from './Book';
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup'

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
        selectedRadio: "fantasy",
        search:''
    }

    handleRadio = (event) =>{
        //console.log(event.target.value)
        let radio = event.target.value
        this.setState({selectedRadio: radio, search:''})
    }

    handleChange =(e)=>{
        this.setState({search:e.target.value})
    }

    render() {
        let {books, radios, selectedRadio} = this.state;
        return (
            <div className="portfolioContent container">
                
                <input placeholder="chercher" className="input-group input-group-lg w-50 mx-auto mb-5 d-inline-flex" onChange={this.handleChange} value={this.state.search}/><label htmlFor="explications"><i>Chercher un auteur ou un titre</i></label>
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
                </ul><div className="container">
                {this.state.search}
                {/* 
                    <div class="row"> */}
                    
                    <CardColumns>
                   
                    {
                        books
                        .filter(item => item.style.includes(selectedRadio))
                        .filter(item=> item.author.toLowerCase().includes(this.state.search.toLowerCase()) || item.title.toLowerCase().includes(this.state.search.toLowerCase()))
                        // .filter(item=> item.title.toLowerCase().includes(this.state.search.toLowerCase()))
                        .map(item=>{
                            return <Book 
                                key={item.id}
                                item={item}
                            />
                        })
                    }</CardColumns></div>
                    {/* 
                </div> */}
            </div>
        );
    }
}

export default BooksList;