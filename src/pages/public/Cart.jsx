import { EmptyCartPopup } from "../../components/pages";

function Cart() {
  const products = [];

  return products.length === 0 ? (
    <EmptyCartPopup />
  ) : (
    <h1 className="container py-36">Your cart</h1>
  );
}

export default Cart;
