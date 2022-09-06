import React from "react";
import styled from "styled-components";

type ShoppingCartProps = {
  sideBar: boolean;
  closeSideBar: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

function ShoppingCart({ sideBar, closeSideBar }: ShoppingCartProps) {
  return (
    <SideBarWrapper>
      <div className={sideBar ? "side-menu active" : "side-menu"}>
        ShoppingCart
        <button className="side-menu-toggle" onClick={closeSideBar}>
          X
        </button>
      </div>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  .side-menu {
    background-color: #9586e8;
    width: 25%;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 100%;
    transition: 0.7s;
  }

  .side-menu.active {
    left: 75%;
    transition: 0.7s;
  }

  .side-menu-toggle {
    position: absolute;
    display: flex;
    margin: 2% 5%;
    padding: 0 3%;
    left: 85%;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 2rem;
    align-items: center;
    cursor: pointer;
  }
`;

export default ShoppingCart;
