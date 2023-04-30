import styled from "styled-components";

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
margin-bottom: 50px;

img {
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius:10px;
}
button {
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
}
&:hover {
  img {
    opacity: 0.8;
  }
  button {
    opacity: 0.85;
    display: flex;
  }
}
`

export const FooterStyle = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
` 

export const NameStyle = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const PriceStyle = styled.span`
  width: 10%;
`

export const FlavorStyle = styled.div`
width: 100%;  
padding-top: 10px;
padding-bottom: 10px;
text-align: left;
`