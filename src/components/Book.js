import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import TextTruncate from 'react-text-truncate';

class Book extends Component {

    state = {
        showInfo: false
    }

    handleInfo = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let {title, author, language, info, picture, dlLink} = this.props.item;

        return (
          <Card 
            className="mb-2"
          > 
            {/*  className="col-12 col-lg-6 col-xl-4" */}
          <Card.Img variant="top" src={picture} style={{ height: '500px' }} />
          <Card.Body>
            <Card.Title>
              <strong className="text-center" style={{ whiteSpace: 'pre-wrap' }}>{title}</strong><br />
              <i className="text-center">{author}</i><br />
              <i className="text-center">{language}</i><br />
            </Card.Title>
            <Card.Text style={{ minHeight: '150px', maxHeight: '150px' }} >
            <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={info}
                textTruncateChild={<a href="#">Suite</a>}
            />
              
            </Card.Text>
            <a href={dlLink}>Télécharger</a>
          </Card.Body>
        </Card>
        );
    }
}

export default Book;