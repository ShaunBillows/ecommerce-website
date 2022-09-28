import "./BillingInfo.css";

const BillingInfo = ({ item }) => {
  return (
    <div className="payment-container">
      <input className="billing-input"></input>
      <span className="billing-text">{item}</span>
    </div>
  );
};

export default BillingInfo;
