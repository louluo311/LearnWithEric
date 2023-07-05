import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import chakra1 from './../chakra-1.jpg'
import chakra2 from './../chakra-2.jpg'
import chakra3 from './../chakra-3.jpg'
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK57UfIIw4S4D3ylO4x3LsdfTkbVqo1veEA&usqp=CAU'


const Cards = () => {
    const cardInfo = [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMK57UfIIw4S4D3ylO4x3LsdfTkbVqo1veEA&usqp=CAU', title: "Third Eye", text: "Third Eye Chakra" },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPEJltLz6xEu1w0v7lVS3D8UqXSclOnYi2kAVGvULljLqmnPROJs5oqqGgkN0QtN1yk0&usqp=CAU', title: "Heart", text: "Heart Chakra" },
        { image: 'https://cdn.yogajournal.com/wp-content/uploads/2014/07/GettyImages-1143718219_2400x1600-scaled.jpg?width=730', title: "Navel", text: "Navel Chakra" },
    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key='index'>
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className='App'>
            {cardInfo.map(renderCard)}

        </div>
    )
}

export default Cards