import { useActionState, useOptimistic } from "react";
import { updateFormInDb } from "@/funcs/form";
import { FormActionData } from "@/interfaces/form";

export function WithUseOptimistic() {
    const [formState, setFormState, isPending] = useActionState(updateName, {
        name: "Anonymous user",
        error: null,
    });

    const [optimisticName, setOptimisticName] = useOptimistic(formState.name);

    async function updateName(prevState: FormActionData, formData: FormData) {
        setOptimisticName(formData.get("name") as string);
        try {
            const newName = await updateFormInDb(
                formData.get("name") as string
            );

            return { name: newName, error: null };
        } catch (e) {
            const error =
                e instanceof Error ? e : { message: "Uncaught error" };

            return { ...prevState, error };
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1>With use Optimistic</h1>
            <p>
                Current user{" "}
                <span className="text-blue-200">{optimisticName}</span>
            </p>
            <form action={setFormState} className="flex flex-col gap-4 w-72">
                <input
                    type="text"
                    name="name"
                    required
                    className="text-black"
                />
                {isPending && <p>Updating...</p>}
                <button
                    type="submit"
                    className="border rounded-md"
                    disabled={isPending}
                >
                    Update
                </button>
                {!isPending && formState.error && (
                    <p className="text-red-600">
                        Error: {formState.error.message}
                    </p>
                )}
            </form>
        </div>
    );
}
