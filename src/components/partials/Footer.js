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
    <a href="#"><i className="fab fa-whatsapp"></i></a>
    <a href="#"><i href="#" className="fab fa-facebook"></i></a>
    <a href="#"><i href="#" className="fab fa-instagram"></i></a>
  </div>
</footer>
        </>
     );
}

export default Footer;