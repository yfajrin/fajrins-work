import styled from "styled-components";
import Button from '../button/button.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  & ::-webkit-scrollbar {
    width: 10px;
  }
  
  & ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  & ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius:20%;
  }
  
  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const TotalContainer = styled.div`
  padding: 10px 10px;
  text-align: right;
  font-size: 18px;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItemsStyle = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
export const ButtonDropdownStyle = styled(Button)`
  margin-top: auto;
`