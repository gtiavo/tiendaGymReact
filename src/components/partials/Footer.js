import { Link } from 'react-router-dom'
function Footer() {
    return ( 
        <>
        <footer>
  {/* <!--Aca iría pie de web estandarizado con links y redes--> */}
  <div className="footerLinks">
    <ul>
      <li>Preguntas frecuentes</li>
      <li>Quienes somos</li>
      <li>Contacto</li>
      <li>Dirección</li>
    </ul>
  </div>
  <div className="redesSociales">
    <Link to="#"><i className="fab fa-whatsapp"></i></Link>
    <Link to="#"><i href="#" className="fab fa-facebook"></i></Link>
    <Link to="#"><i href="#" className="fab fa-instagram"></i></Link>
  </div>
</footer>
        </>
     );
}

export default Footer;