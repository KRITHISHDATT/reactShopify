import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import { useState } from "react";

function App() {

  const [cartValue, setCartValue] = useState(0);

  let data = [
    {
      product: "Fancy Product",
      orgAmount: "$40.00 - $80.00",
      offAmount: "",
      isRating: false,
      isSale: false
    },
    {
      product: "Special Item",
      orgAmount: "$20.00",
      offAmount: "$18.00",
      isRating: true,
      isSale: true
    },
    {
      product: "Sale Item",
      orgAmount: "$50.00",
      offAmount: "$25.00",
      isRating: false,
      isSale: true
    },
    {
      product: "Popular Item",
      orgAmount: "$40.00",
      offAmount: "",
      isRating: true,
      isSale: false
    },
    {
      product: "Sale Item",
      orgAmount: "$50.00",
      offAmount: "$25.00",
      isRating: false,
      isSale: false
    },
    {
      product: "Fancy Product",
      orgAmount: "$120.00 - $180.00",
      offAmount: "",
      isRating: false,
      isSale: false
    },
    {
      product: "Special Item",
      orgAmount: "$20.00",
      offAmount: "$18.00",
      isRating: true,
      isSale: true
    },
    {
      product: "Popular Item",
      orgAmount: "$40.00",
      offAmount: "",
      isRating: true,
      isSale: false
    }
  ]

  return <>
    <Navbar cartValue={cartValue} />
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            data.map((res) => {
              return <Content cartValue={setCartValue} data={res} />
            })
          }
        </div>
      </div>
    </section>
    <Footer />
  </>
}

export default App;
