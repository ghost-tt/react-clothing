import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    alert('Payment Successful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe  = price * 100;
    const publishableKey = "pk_test_51I5GthGCvK08v4qvWYduwg4gR7JueXT8JCifQY5590cQM9943UstKqubZf2U79tcPoB9gG5aG6poLCyeSAzsKevm00GnCKLvRS";
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;