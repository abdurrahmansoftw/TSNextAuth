
interface Props {
    params: {slug: string[]}
    searchParams: {sortOrders: string}
}

const ProductPage = ({params: {slug}, searchParams: {sortOrders}}: Props) => {
    return (
        <div>
            <h1>params {slug}</h1>
            <h2>sortOrders {sortOrders}</h2>
        </div>
    );
};

export default ProductPage; 