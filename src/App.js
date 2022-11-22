import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import Forms from "./components/Form/Forms";
import About from "./components/About";
import FormDetail from "./components/Form/FormDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddForm />} exact />
          <Route path="/forms" element={<Forms />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/forms/:id" element={<FormDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
