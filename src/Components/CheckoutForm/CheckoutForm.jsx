import { Button, Typography } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useUserFunding from "../../hooks/useUserFunding";

const CheckoutForm = () => {
  const [error, setError] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [,,refetch] = useUserFunding();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    axiosSecure.post("/api/v1/payment-intent", { price: 25 }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
      setMount(!mount)
    } else {
      setError("");
      console.log("[paymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "anonymous",
            email: user.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setMount(!mount)
      setError('confirmation error');
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setError('')
        const date = new Date(paymentIntent.created * 1000);

        // Extract the various date and time components
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        const seconds = ("0" + date.getSeconds()).slice(-2);
        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        const donationInfo = {
          name: user.displayName,
          email: user.email,
          amount: 25,
          transactionId: paymentIntent.id,
          created: formattedDateTime,
        };
        axiosSecure.post("/api/v1/addFunding", donationInfo).then((res) => {
          if (res.data.insertedId) {
            setMount(!mount)
            refetch();
            toast.success(`Donation successful!`);
          }
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <Typography fontSize={"12px"} fontStyle={"italic"} color="red">
        {error}
      </Typography>
      <Button
        variant="contained"
        sx={{ minWidth: "200px", mt: 4 }}
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Donate $25
      </Button>
    </form>
  );
};

export default CheckoutForm;
