import BillingInfo from "./BillingInfo"

const Payment = ({total, setModalContent, closeModal, setBasket}) => {

    const billingInfo = ["name", "address", "city", "postcode", "name on card", "card number", "csc"]

    return (
        <div>
            <h2>Enter billing address</h2>

            {
                billingInfo.map( (item, index) => (
                    <BillingInfo index={index} item={item}/>
 
                ))
            }
            <div>
            <button onClick={()=>setModalContent('review')}>go back</button>   
            <button onClick={() => {closeModal(); alert('Purchase successful'); setBasket([])}}>confirm</button>   
            </div>
        </div>
    )
}

export default Payment