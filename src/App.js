import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from "./views/CategoryDetailsView";


function App() {
  return (
    <div className="App">
      <h1>Front page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
       <NavLink to="/category"> Categories</NavLink> 
 
      </nav>
      <Routes>
        <Route path="/category" element={<CategoryListView />}/>
        <Route path="/category/:categoryId" element={<CategoryDetailsView />}/>
      </Routes>
      

    </div>
  );
}

export default App;