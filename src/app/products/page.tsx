import Link from 'next/link';

export default function ProductList() {
    const productId = 100; // This would typically come from props or state
    return <>
        <h1>Product List</h1>
        <h2>Product 1</h2>
        <h2>Product 2</h2>
        <h2><Link href={'/products/${productId}'}>Product 3</Link></h2>
        <h2>
            <Link href="/products/3" replace >Product {productId}</Link>
        </h2>
    </>
}