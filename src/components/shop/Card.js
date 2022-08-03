import { CardItem, ImageContainer, CardContent, Img, ButtonContainer, CardTitle, Button, Anchor } from './Card.styles'

const Card = ( {item, handleAddBasket} ) => {

    return (
            <CardItem onClick={() => handleAddBasket(item)}>
                <ImageContainer>
                    <Img src={item.image}/> 
                </ImageContainer>
                <CardContent> 
                    <CardTitle className='card-item card-title' ></CardTitle>
                    <p>{item.price}</p>
                    <p>{item.name}</p>
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
