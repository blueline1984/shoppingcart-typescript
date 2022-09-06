import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingCart from "../components/ShoppingCart";

function Navbar() {
  const [sideBar, setSideBar] = useState(false);

  const closeSideBar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSideBar(false);
  };

  const openSideBar = () => {
    setSideBar(true);
  };

  return (
    <>
      <LinkWrapper>
        <Link to="/">Item</Link>
        <Link to="discount">Discount</Link>
        <button onClick={openSideBar}>Cart</button>
      </LinkWrapper>
      <ShoppingCart sideBar={sideBar} closeSideBar={closeSideBar} />
    </>
  );
}

const LinkWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  position: sticky;
  top: 0;
  background: #fff;
  align-items: center;

  a {
    text-decoration: none;
    color: #9586e8;
  }

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    border: 1px solid #9586e8;
    background: #fff;
    color: #9586e8;
    cursor: pointer;
  }

  button:hover {
    border: 1px solid #9586e8;
    background: #9586e8;
    color: #fff;
  }
`;

export default Navbar;
