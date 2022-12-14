import { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  const context = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => context.toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => context.toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    if (context.cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => context.changeCart(img)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => context.changeCart(img)}
        ></i>
      );
    }
  }

  return (
    <div
      className={`${className} image-container`}
      ref={ref}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
