"use client";
import BackArrow from "@/components/back-arrow/BackArrow";

export default function MetaDataPage() {
    return (
        <>
            <BackArrow />
            <article>
                <h1>My post</h1>
                <title>My post</title>
                <meta name="description" content="This is my post" />
                <meta name="keywords" content="test1, test2" />
                <p>12322131</p>
            </article>
        </>
    );
}
