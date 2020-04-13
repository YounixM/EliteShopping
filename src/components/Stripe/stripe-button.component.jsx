import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeCheckoutButton ({ price }) {
    const priceForStripe = price * 100,
        publishKey = 'Stripe Test Public Key';

    function onToken (token) {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Elite Shopping'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}           
        />
    )
}
