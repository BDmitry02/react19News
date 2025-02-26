import Link from "next/link";
import React from "react";

export default function BackArrow() {
    return (
        <Link href={"/"} style={{ cursor: "pointer" }}>
            <p>Go to the home page</p>
        </Link>
    );
}
