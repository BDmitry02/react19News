"use client";
import { useState } from "react";
import BackArrow from "@/components/back-arrow/BackArrow";
import WithFormActions from "@/components/form-actions/WithFormActions";
import WithoutFormActions from "@/components/form-actions/WithoutFormActions";

export default function FormActionsPage() {
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
                    Without ActionState
                </button>
                <button
                    onClick={() => setTab("with")}
                    className={`border rounded-md hover:text-gray-400 p-2 ${
                        tab === "with" ? "bg-gray-100 text-black" : "text-white"
                    }`}
                >
                    With ActionState
                </button>
            </div>
            {tab === "without" && <WithoutFormActions />}
            {tab === "with" && <WithFormActions />}
        </div>
    );
}
