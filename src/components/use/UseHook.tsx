import { createContext, ReactNode, use, useEffect, useState } from "react";

const AuthContext = createContext<
    | {
          loginState: string | undefined;
          setLoginState: (v: string | undefined) => void;
      }
    | undefined
>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [loginState, setLoginState] = useState<string | undefined>(
        localStorage.getItem("loginState") || ""
    );

    useEffect(() => {
        if (loginState) {
            localStorage.setItem("loginState", loginState);
        } else {
            localStorage.removeItem("loginState");
        }
    }, [loginState]);

    return (
        <AuthContext value={{ loginState, setLoginState }}>
            {children}
        </AuthContext>
    );
}

export function useAuth() {
    const context = use(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
}
