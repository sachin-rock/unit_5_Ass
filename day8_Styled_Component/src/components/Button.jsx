
import styled from "styled-components"

const Button = styled.button`


  background-color: ${(props)=> props.theme==="light" ? "yellowgreen" : "teal"};
  color :${(props)=> props.theme==="light" ? "teal" : "yellowgreen"};
  border: 0px;
  margin: 1%;
  cursor: pointer;
  border-radius: 5px;
  padding: 1%;
 

  &:hover{
    box-shadow: rgba(107, 244, 107, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border: 2px solid grey;
}

`;

export {Button}