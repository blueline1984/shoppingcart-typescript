import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <button>Add To Cart</button>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background: #9586e8;
  bordertop: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 5%;
  width: 100%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    border: 1px solid #9586e8;
    background: #fff;
    color: #9586e8;
    cursor: pointer;
  }
`;

export default Footer;
