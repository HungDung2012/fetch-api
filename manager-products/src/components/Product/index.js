import ProductList from "./ProductList";
import './Product.css';
import CreateProduct from "./CreateProduct";

function Product() {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    }

    return (
        <>
            <h2>danh sach san pham</h2>
            <CreateProduct onReload={handleReload}/>
            <ProductList reload={reload}/>
        </>
    )
}

export default Product;