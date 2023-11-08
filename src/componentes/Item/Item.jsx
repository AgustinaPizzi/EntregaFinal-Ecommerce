import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="row">
      <div className="col-6 mt-5">
        <img src={producto.imagen} className="img-card" />
        <div className="card-body">
          <p className="nombre">Nombre: {producto.titulo}</p>
          <p className="autor">Autor: {producto.autor}</p>
          <p className="cat">Categoria: {producto.categoria}</p>
          <p className="precio">Precio: ${producto.precio}</p>
        </div>
        <div>
          <Link className="ver-mas" to="{`/item/${producto.id}`}">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
