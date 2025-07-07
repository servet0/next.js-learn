import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest blog posts on various topics.',
};



export default async function Blog() {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
    return <h1>Blog Page</h1>;
}