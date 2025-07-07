"use client";
import Link from 'next/link';

export default async function NewsArticle({params, searchParams}: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" }>,
    }) {
        const { articleId } = await params;
        const { lang = "en" } = await searchParams;
    return (
        <>
            <h1>Breaking News</h1>
            <p>This is the content of the breaking news article.</p>
            <br />
            <Link href="/articles/${articleId}?lang=en">English</Link>
        </>
    );
}