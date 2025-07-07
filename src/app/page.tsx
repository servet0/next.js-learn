import Link from 'next/link';

export default function Home() {
    return(
    <>
        <h1>Welcome Home!</h1>
        <Link href="/blog">Blog</Link>
        <br />
        <Link href="/products">Products</Link>
        <br />
        <Link href="/articles/breaking-news-123?lang=en" replace >Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr" replace >Read in French</Link>
    </>
    );
}