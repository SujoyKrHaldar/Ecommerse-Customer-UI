import { MetaTags } from "../../components/shared";
import { EmptyWishlistPopup, LoginToAccessPopup } from "../../components/pages";

function Wishlist() {
  const wishlistedProducts = [];
  const user = false;
  return (
    <>
      <MetaTags
        title="Wishlist • Ecommerse"
        description="Your wishlist"
        conicalRoute="/wishlist"
      />
      {user ? (
        wishlistedProducts.length === 0 ? (
          <EmptyWishlistPopup />
        ) : (
          ""
        )
      ) : (
        <LoginToAccessPopup />
      )}
    </>
  );
}

export default Wishlist;
