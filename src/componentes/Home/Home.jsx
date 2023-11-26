import Titulo from "../Titulo/Tittulo";

const Home = ({}) => {
  const tituloApp = "EL LIBRO DORADO";
  const subTituloApp = "Librería 📖";

  return (
    <div>
      <Titulo titulo={tituloApp} subTitulo={subTituloApp} />
    </div>
  );
};

export default Home;
