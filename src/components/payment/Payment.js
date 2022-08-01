
const Payment = ({total, setModalContent, closeModal, setBasket}) => {
    return (
        <div>
            <h2>Enter billing address</h2>
            <div>
            <input></input><span>name</span>
            </div>
            <div>
            <input></input><span>address</span> 
            </div>
            <div>
            <input></input><span>city</span> 
            </div>
            <div>
            <input></input><span>postcode</span>     
            </div>
            <br></br>
            <div>
            <input></input><span>name on card</span>     
            </div>
            <div>
            <input></input><span>card number</span>     
            </div>
            <div>
            <input></input><span>csc</span>     
            </div>
            <div>
            <button onClick={()=>setModalContent('review')}>go back</button>   
            <button onClick={() => {closeModal(); alert('Purchase successful'); setBasket([])}}>confirm</button>   
            </div>





        </div>
    )
}

export default Payment