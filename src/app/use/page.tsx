"use client";

import { AuthProvider } from "@/components/use/UseHook";

export default function UsePage() {
    return (
        <div>
            <AuthProvider>
                <p>some components</p>
            </AuthProvider>
        </div>
    );
}
