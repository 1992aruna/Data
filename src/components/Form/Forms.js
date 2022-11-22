import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import Form from "./Form";
const URL = "http://localhost:5000/forms";
const fetchHandler = async () => {
  return await axios.get(URL)
  .then((res) => res.data);
};
const Forms = () => {
  const [forms, setForms] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setForms(data.forms));
  }, []);
  console.log(forms);
  return (
    <div>
      <ul>
        {forms &&
          forms.map((form, i) => (
            <li key={i}>
              <Form form={form} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Forms;
