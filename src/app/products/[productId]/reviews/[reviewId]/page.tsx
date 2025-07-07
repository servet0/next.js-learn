import { count } from 'console';
import { notFound, redirect } from 'next/navigation';
import { parse } from 'path';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({params}:
    {params: Promise<{ productId: string, reviewId: string }>}
)
{
    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error('Something went wrong!');
    }
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