import { Outlet } from "react-router-dom";
import Burger from "../Burger/Burger";
import ListIngredients from "../listIngredients/ListIngredients";
import NavBar from "../navBar/NavBar";
import "./builder.scss";

const Builder = () => {
  return (
    <>
      <NavBar />
      <section className="builder-container">
        <Burger />
        <ListIngredients />
      </section>
    </>
  );
};

export default Builder;
