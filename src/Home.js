import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkouthandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:8000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:8000/checkout", { amount });
    console.log(window);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "IPhone",
      description: "Razorpay tutorial",
      image:
        "https://m.media-amazon.com/images/I/711wsjBtWeL._AC_UF894,1000_QL80_.jpg",
      order_id: order.id,
      callback_url: "http://localhost:8000/paymentverification",
      prefill: {
        name: "Mukilan Selvaraj",
        email: "tn.mukilan88@gmail.com",
        contact: "9080750760",
      },
      notes: {
        address: "razorapy official",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={159900}
          img={
            "https://darlingretail.com/cdn/shop/products/iPhone_14_Pro_Max_Space_Black_PDP_Image_Position-1a_Avail__en-IN.jpg?v=1663067771"
          }
          checkouthandler={checkouthandler}
        />
        <Card
          amount={159900}
          img={
            "https://www.bdmobiles.co/wp-content/uploads/2023/03/Apple-iPhone-15-Pro-blue-titanium.jpg"
          }
          checkouthandler={checkouthandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
