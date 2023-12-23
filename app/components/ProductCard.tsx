
import AddToCart from './AddToCart';


const ProductCard = () => {
    return (
        <div className='p-8 my-5, bg-sky-400 text-white text-xl hover:bg-sky-700'>
            <h1>ProductCard</h1>
            <AddToCart />
        </div>
    );
};

export default ProductCard;