import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

function BasicExample({addTodo}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const submit = (e) => {
      e.preventDefault();
      if(!title || !desc){
        alert('Title or Description cannot be blank')
      }
       else{
      addTodo(title, desc);
      navigate('/todos')
      setTitle('');
      setDesc('');}
  } 

  return (
    <div className='container my-3' style={{height:'81vh'}}>
        <h3>Add a Todo</h3>
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Add title" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Add description</Form.Label>
        <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" />
      </Form.Group>
      
      <Button variant="btn btn-sm btn-success" type="submit" >
       Add Todo
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;
