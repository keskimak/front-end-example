import * as React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from "./views/CategoryDetailsView";
import MemberListView from "./views/MemberListView";
import MemberDetailsView from "./views/MemberDetailsView";


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
        <NavLink to="/member"> Members</NavLink>
      </nav>
      <Routes>
        <Route path="/category" element={<CategoryListView />} />
        <Route path="/category/:categoryId" element={<CategoryDetailsView />} />
        <Route path="/member" element={<MemberListView />} />
        <Route path="/member/:memberId" element={<MemberDetailsView />} />

      </Routes>


    </div>
  );
}

export default App;