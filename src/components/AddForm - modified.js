import {
  Button,
  FormLabel,
  TextField,
  } from "@mui/material";
import {DropdownButton, Dropdown} from "react-bootstrap";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const countries = ["India", "USA", "Australia"];

const AddForm = () => {
  const history = useNavigate();
  const [country, setCountry] = useState([countries]);
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    qualification: "",
    position: "",
    state: "",
    country: [],
    village: "",
    constituencyloksabha: "",
    constituencyassembly: "",
    phonenumber: "",
    email: "",
    facebook: "",
    instagram: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
    const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    };
    const handleSelect = (e) => {
      setCountry((prevState) => ({
        ...prevState,
        [e.target.country]: e.target.value,
      }));
      };
      
   const sendRequest = async () => {
    await axios.post("http://localhost:5000/forms", {
    name: String(inputs.name),
    nickname: String(inputs.nickname),
    qualification: String(inputs.qualification),
    position: String(inputs.position),
    state: String(inputs.state),
    country: Array(country.country),
    village: String(inputs.village),
    constituencyloksabha: String(inputs.constituencyloksabha),
    constituencyassembly: String(inputs.constituencyassembly),
    phonenumber: Number(inputs.phonenumber),
    email: String(inputs.email),
    facebook: String(inputs.facebook),
    instagram: String(inputs.instagram),
    image1: String(inputs.image1),
    image2: String(inputs.image2),
    image3: String(inputs.image3),
    image4: String(inputs.image4),   
   })
  .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/forms"));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Nickname</FormLabel>
        <TextField
          value={inputs.nickname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="nickname"
        />
        <FormLabel>Qualification</FormLabel>
        <TextField
          value={inputs.qualification}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="qualification"
        />
        <FormLabel>Position</FormLabel>
        <TextField
          value={inputs.position}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="position"
        />
        
        <FormLabel>State</FormLabel>
        <TextField
          value={inputs.state}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="state"
        />
        <FormLabel>Country</FormLabel>
        <DropdownButton 
        variant="light" 
        title="-- Select Country --"
        value={country.country}
        onSelect={handleSelect}   
        margin="normal"
        Width="100%"
        background="none"
        >
        {countries.map((countries) =>(
        <Dropdown.Item key={countries} >{countries}</Dropdown.Item>
        ))}
        </DropdownButton>
        <FormLabel>Village</FormLabel>
        <TextField
          value={inputs.village}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="village"
        />
        <FormLabel>Constituencyloksabha</FormLabel>   
        <TextField
          value={inputs.constituencyloksabha}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="constituencyloksabha"
        />
        <FormLabel>Constituencyassembly</FormLabel>
        <TextField
          value={inputs.constituencyassembly}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="constituencyassembly"
        />
        <FormLabel>Phone Number</FormLabel>
        <TextField
          value={inputs.phonenumber}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="phonenumber"
        />
        <FormLabel>Email</FormLabel>
        <TextField
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />
        <FormLabel>Facebook</FormLabel>
        <TextField
          value={inputs.facebook}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="facebook"
        />
        <FormLabel>Instagram</FormLabel>
        <TextField
          value={inputs.instagram}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="instagram"
        />
        <FormLabel>Image1</FormLabel>
        <TextField
          value={inputs.image1}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image1"
        />
        <FormLabel>Image2</FormLabel>
        <TextField
          value={inputs.image2}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image2"
        />
        <FormLabel>Image3</FormLabel>
        <TextField
          value={inputs.image3}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image3"
        />
        <FormLabel>Image4</FormLabel>
        <TextField
          value={inputs.image4}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image4"
        />
       <Button variant="contained" type="submit">
          Add Form
        </Button>
      </Box>
    </form>
  );
};

export default AddForm;
