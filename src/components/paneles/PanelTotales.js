import Totales from "./Totales";
import CategoryTotals from "./CategoryTotals";
import LastUser from './LastUser';
import LastProduct from "./LastProduct";
import ListProducts from "./ListProducts";


function PanelTotales() {
    return ( 
        <div>
        < Totales />
        <section className="conteinerPanelTotal">
        < CategoryTotals />
        <section className="conteinerLastCate">
       < LastUser />
       < LastProduct />
       < ListProducts />
       </section>
       </section>
        </div>
     );
}

export default PanelTotales;