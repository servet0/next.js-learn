import { notFound, redirect } from 'next/navigation';
import { parse } from 'path';

export default async function ProductReview({params}:
    {params: Promise<{ productId: string, reviewId: string }>}
)
{
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        // notFound();
        redirect('/products');
        return;
    }
    return (
        <>
            <h1>Review {reviewId} for product {productId}</h1>
            
        </>
    );
}