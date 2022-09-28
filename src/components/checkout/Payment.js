import BillingInfo from "./BillingInfo";
import "./Payment.css";

const Payment = ({ total, setModalContent, closeModal, setBasket }) => {
  const billingInfo = [
    "name",
    "address",
    "city",
    "postcode",
    "name on card",
    "card number",
    "csc",
  ];

  return (
    <div className="review-order-container">
      <h2>Enter billing address</h2>

      {billingInfo.map((item, index) => (
        <BillingInfo index={index} item={item} key={index} />
      ))}
      <div className="payment-buttons">
        <button
          onClick={() => setModalContent("review")}
          className="checkout-button"
        >
          go back
        </button>
        <button
          className="checkout-button"
          onClick={() => {
            closeModal();
            alert("Purchase successful");
            setBasket([]);
          }}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default Payment;
