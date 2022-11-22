import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
const Form = (props) => {
  const history = useNavigate();
  const { _id, name, nickname, qualification, position, state, district, village, constituencyloksabha, constituencyassembly, phonenumber, email, facebook, instagram, image1, image2, image3, image4 } = props.form;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/forms/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/forms"));
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <h3>{nickname}</h3>
      <h3>{qualification}</h3>
      <h3>{position}</h3>
      <h3>{state}</h3>
      <h3>{district}</h3>
      <h3>{village}</h3>
      <h3>{constituencyloksabha}</h3>
      <h3>{constituencyassembly}</h3>
      <h3>{phonenumber}</h3>
      <h3>{email}</h3>
      <h3>{facebook}</h3>
      <h3>{instagram}</h3>
      <img src={image1} alt={name} />
      <img src={image2} alt={name} />
      <img src={image3} alt={name} />
      <img src={image4} alt={name} />
      <Button LinkComponent={Link} to={`/forms/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Form;
