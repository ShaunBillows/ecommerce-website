// import { CardItem, ImageContainer, CardContent, Img, ButtonContainer, CardTitle, Button, Anchor } from './Card.styles'
// import './Card.styles'
import styled from "styled-components";

const Card = ( {item, handleAddBasket} ) => {

    const width = 200;
    const imageHeight = 120;

    const CardItem = styled.div`
    width: ${width}px;
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

    const ImageContainer = styled.div`
    overflow: hidden;
    height: ${imageHeight}px;

    display: flex;
    justify-content: center;

    margin-bottom: 1rem;
    `;

    const Img = styled.img`
    overflow: hidden;
    // height: 200px;
    width: ${width}px;
    `;

    const CardContent = styled.div`
    margin: 1rem;
    margin-top: 0.5rem;
    `;

    const CardTitle = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
    `;

    const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    `;

    const Button = styled.button`
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

    const Anchor = styled.a`
    text-transform: uppercase;
    color: #189cfc;
    text-decoration: none;
    font-weight: bold;
    `;

    return (
            <CardItem onClick={() => handleAddBasket(item)}>
                <ImageContainer>
                    <Img src={item.image}/> 
                </ImageContainer>
                <CardContent> 
                    <CardTitle className='card-item card-title' ></CardTitle>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                    {/* <p>{props.camera}</p>
                    <p>{props.sol}</p>
                    <p>{props.earthDate}</p>
                    <p>{props.landingDate}</p>
                    <p>{props.launchDate}</p> */}
                </CardContent>
                <ButtonContainer>
                    <Button >
                        <Anchor target="_blank"></Anchor>
                    </Button>
                </ButtonContainer>
            </CardItem>
    )
}

export default Card
