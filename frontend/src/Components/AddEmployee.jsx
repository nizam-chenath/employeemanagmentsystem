import React ,{useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import "../style/AddEmployee.css"

const AddEmployee = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState("")

  const handleNameChange = ( event ) =>{
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can handle the form submission, including image upload

    // Reset the form fields
    setName("")
    setEmail('');
    setPassword('');
    setAddress('');
    setImage(null);
  };

  return (
    <div className="container ">
      
      <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formText" className='section'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className='section'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className='section'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group controlId="formAddress" className='section'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          />
        </Form.Group>

        <Form.Group controlId="formImage" className='section'>
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddEmployee