import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContex/CartContext";
import { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link to="/carrito">
        <BsFillCartPlusFill />
        <span> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
