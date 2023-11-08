const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      I
      <div className="producto-detalle">
        <img src={item.imagen} alt="{item.img}" />
        <div>
          <h3 className="titulo">{item.name}</h3>
          <p className="autor">{item.autor}</p>
          <p className="categoria">Categoria: {item.categoria}</p>
          <p className="precio">$ {item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
