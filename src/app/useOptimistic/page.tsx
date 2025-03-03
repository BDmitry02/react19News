"use client";
import BackArrow from "@/components/back-arrow/BackArrow";
import { WithoutUseOptimistic } from "@/components/use-optimistic/WithoutUseOptimistic";
import { WithUseOptimistic } from "@/components/use-optimistic/WithUseOptimistic";
import { useState } from "react";

export default function UseOptimisticPage() {
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
                    Without Optimistic
                </button>
                <button
                    onClick={() => setTab("with")}
                    className={`border rounded-md hover:text-gray-400 p-2 ${
                        tab === "with" ? "bg-gray-100 text-black" : "text-white"
                    }`}
                >
                    With Optimistic
                </button>
            </div>
            {tab === "without" && <WithoutUseOptimistic />}
            {tab === "with" && <WithUseOptimistic />}
        </div>
    );
}
