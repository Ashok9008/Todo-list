import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Todoitem = ({ todo, onDelete }) => {
  return (
    <Card className='mb-4'>
      <Card.Header className='fw-bolder ' >{todo.sno}</Card.Header>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.desc}</Card.Text>
        <Button variant="danger" onClick={() => { onDelete(todo) }}>Delete</Button>
      </Card.Body>
    </Card>
  )
}

export default Todoitem

