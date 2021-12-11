import Logo from '../../assets/img/tgym_logos-03.png'

function Header() {
  return (
    <>
      <header className="mainHeader">
        {/* <!--A partir de acá va la parte superior del header con logo, buscador y login--> */}
        <div className="mainHeaderTop">
          <a href="../" id="logo">
            <img src={Logo} className="logoPrincipal" />
          </a>
          <nav className="busqueda">
            <i className="fas fa-search"></i>
            <form action="/search" method="GET" className="searchForm">
              <input type="text" name="search" className="search" />
            </form>
          </nav>
          <nav className="apaEnce">
            <i className="fas fa-toggle-on switchD"></i>
            <i className="fas fa-toggle-off switchN"></i>
          </nav>

          <nav className="loginCarrito ">
            <a href="../login">
              <i className="fas fa-user-circle"> </i>
            </a>
            <a href="../productCart" id="cartItem">
              <i className="fas fa-shopping-cart"> </i>
            </a>
          </nav>
        </div>
        {/*   <!--A partir de acá va la parte inferior del header con menu para la version desktop --> */}
        <nav className="mainHeaderBottom">
          <ul className="menuInferior">
            <a href="../construction">
              <li>Productos</li>
            </a>
            <a href="../construction">
              <li>Usuarios</li>
            </a>
            <a href="../construction">
              <li>Categorias</li>
            </a>
            <a href="../construction">
              <li>Home</li>
            </a>
          </ul>
        </nav>
        {/* <!--Dejo botón para versión mobile: --> */}
        <div className="mainHeaderMobile">
          <a href="#" className="botonMenuMobile">
            <i className="fas fa-dumbbell"></i>
          </a>
        </div>
      </header>

      {/*  <!--Aca está el header de web estandarizado, a importar en las páginas que lo necesiten--> */}
    </>
  );
}

export default Header;
