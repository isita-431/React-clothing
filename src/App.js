// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};

const App = () => {
  return (
    // <div className="categories-container">
    //   {categories.map((category) => (
    //     <CategoryItem key={category.id} category={category} />
    //   ))}
    // </div>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
