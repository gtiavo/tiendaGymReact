import Totales from "./Totales";
import CategoryTotals from "./CategoryTotals";
import LastUser from './LastUser';


function PanelTotales() {
    return ( 
        
        <section className='conteinerPanelTotal'>
        < Totales />
        <section className="conteinerLastCate">
        < CategoryTotals />
       < LastUser />
       </section>
        </section>
     );
}

export default PanelTotales;