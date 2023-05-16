import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    
    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return
        }
    }

    const CARD_ELEMENT_OPTIONS = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#aab7c4",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
      };

    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit card payment: </h2>
                <CardElement options={CARD_ELEMENT_OPTIONS}/>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;