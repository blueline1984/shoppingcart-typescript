import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <LinkWrapper>
      <Link to="/">Item</Link>
      <Link to="discount">Discount</Link>
      <Link to="shoppingcart">Shopping Cart</Link>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  a {
    text-decoration: none;
    color: #9586e8;
  }
`;

export default Navbar;
