import { useState } from "react";
import { UserData } from "@/interfaces/user";
import { getUserData, updateUserInDb } from "@/funcs/user";

export function WithoutUseActionState() {
    const [state, setState] = useState<UserData>({
        name: "",
        age: 0,
        error: undefined,
    });

    const [isPending, setIsPending] = useState(false);

    async function updateState(userName: string) {
        setIsPending(true);

        const userData = getUserData(userName);

        try {
            const result = await updateUserInDb(userData);

            setState(result);
        } catch (e) {
            const error =
                e instanceof Error ? e : { message: "Uncaught error" };

            setState((prevState) => ({ ...prevState, error }));
        }

        setIsPending(false);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1>Without use Action State</h1>
            <div className="flex items-center justify-center gap-4 p-4">
                <button
                    onClick={() => updateState("John")}
                    className={`border rounded-md p-2 ${
                        state.name === "John"
                            ? "bg-gray-100 text-black"
                            : "text-white"
                    }`}
                >
                    John
                </button>
                <button
                    onClick={() => updateState("Jane")}
                    className={`border rounded-md p-2 ${
                        state.name === "Jane"
                            ? "bg-gray-100 text-black"
                            : "text-white"
                    }`}
                >
                    Jane
                </button>
                <button
                    onClick={() => updateState("error")}
                    className={`border rounded-md p-2 ${
                        state.error?.message
                            ? "bg-gray-100 text-black"
                            : "text-white"
                    }`}
                >
                    error
                </button>
            </div>
            {isPending ? (
                <p>Updating...</p>
            ) : (
                <div className="flex flex-col gap-4">
                    <h2>User Data:</h2>
                    <p>Name: {state.name}</p>
                    <p>Age: {state.age}</p>
                    {state.error && (
                        <p className="text-red-500">{state.error.message}</p>
                    )}
                </div>
            )}
        </div>
    );
}
