import Totales from "./Totales";
import CategoryTotals from "./CategoryTotals";


function PanelTotales() {
    return ( 
        <section className='conteinerPanelTotal'>
        < Totales />
        < CategoryTotals />
       
        </section>
     );
}

export default PanelTotales;