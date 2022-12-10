import { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  // const [hovered, setHovered] = useState(false);
  const { changeCart } = useContext(Context);
  const [hovered, ref] = useHover();

  const iconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i className={iconClass} ref={ref} onClick={() => changeCart(item)}></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
