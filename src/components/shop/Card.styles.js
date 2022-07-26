import styled from "styled-components";

const width = 200;
const imageHeight = 150;

export const CardItem = styled.div`
  min-width: ${width}px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.5s;
  animation: ease-in;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  max-height: ${imageHeight}px;

  display: flex;
  justify-content: center;

  margin-bottom: 1rem;
`;

export const Img = styled.img`
  overflow: hidden;
  // height: 200px;
  width: 100%;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;
`;

export const CardTitle = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: white;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: rgba(27, 156, 252, 0.1);
  }
`;

export const Anchor = styled.a`
  text-transform: uppercase;
  color: #189cfc;
  text-decoration: none;
  font-weight: bold;
`;
