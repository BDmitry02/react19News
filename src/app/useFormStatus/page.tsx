"use client";
import BackArrow from "@/components/back-arrow/BackArrow";
import UseFormStatus from "@/components/use-form-status/UseFormStatus";

export default function UseFormStatusPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center gap-4 p-4">
                <BackArrow />
            </div>
            <UseFormStatus />
        </div>
    );
}
