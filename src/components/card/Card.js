import { CardItem, ImageContainer, CardContent, Img, ButtonContainer, CardTitle, Button, Anchor } from './Card.styles'
import './Card.styles'

const Card = ( {item, handleAddBasket} ) => {

    return (
            <CardItem onClick={() => handleAddBasket(item)}>
                <ImageContainer>
                    <Img src={item.image}/> 
                </ImageContainer>
                <CardContent> 
                    <CardTitle className='card-item card-title' ></CardTitle>
                    <p>{item.price}</p>
                    {/* <p>{props.status}</p>
                    <p>{props.camera}</p>
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
