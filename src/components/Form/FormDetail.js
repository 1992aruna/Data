import {
  Box,
  Button,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/forms/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.form));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/forms/${id}`, {
    name: String(inputs.name),
    nickname: String(inputs.nickname),
    qualification: String(inputs.qualification),
    position: String(inputs.position),
    state: String(inputs.state),
    district: String(inputs.district),
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
    sendRequest().then(() => history("/forms"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
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
        <FormLabel>District</FormLabel>
        <TextField
          value={inputs.district}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="district"
        />
        <FormLabel>Village</FormLabel>
        <TextField
          value={inputs.village}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="village"
        />
        <FormLabel>Constituencyloksabha</FormLabel>:     
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
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default FormDetail;
