"use client";
import { useState } from "react";
import BackArrow from "@/components/back-arrow/BackArrow";
import WithoutTransition from "@/components/use-transition/WithoutTransition";
import { WithTransition } from "@/components/use-transition/WithTransition";

export default function UseTransitionPage() {
    const [tab, setTab] = useState("");

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center gap-4 p-4">
                <BackArrow />
                <button
                    onClick={() => setTab("without")}
                    className={`border rounded-md hover:text-gray-400 p-2 ${
                        tab === "without"
                            ? "bg-gray-100 text-black"
                            : "text-white"
                    }`}
                >
                    Without Transition
                </button>
                <button
                    onClick={() => setTab("with")}
                    className={`border rounded-md hover:text-gray-400 p-2 ${
                        tab === "with" ? "bg-gray-100 text-black" : "text-white"
                    }`}
                >
                    With Transition
                </button>
            </div>
            {tab === "without" && <WithoutTransition />}
            {tab === "with" && <WithTransition />}
        </div>
    );
}
