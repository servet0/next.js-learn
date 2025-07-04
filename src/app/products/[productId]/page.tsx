import {Metadata} from 'next';

type Props = {
    params: Promise<{
        productId: string;
    }>;
}

export const generateMetadata = async ({params} : Props ) :Promise<Metadata> => {
    const { productId } = await params;
    return {
        title: `Product ${productId} Details`,
        description: `Details of product with ID ${productId}`,
    };
}

export default async function ProductDetails(
    {
        params,
    }:  Props
)
{
    const { productId } = await params;
    return (
        <>
            <h1>Product Details</h1>
            <p>Product ID: {productId}</p>
        </>
    );
}