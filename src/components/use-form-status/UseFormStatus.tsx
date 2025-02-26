import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { updateFormInDb } from "@/funcs/form";
import { FormActionData } from "@/interfaces/form";

export default function UseFormStatus() {
    const [formState, setFormState, isPending] = useActionState(updateName, {
        name: "Anonymous user",
        error: null,
    });

    const [optimisticName, setOptimisticName] = useOptimistic(formState.name);

    async function updateName(prevState: FormActionData, formData: FormData) {
        const newName = formData.get("name") as string;

        setOptimisticName(newName);

        try {
            const updatedName = await updateFormInDb(newName);

            return { name: updatedName, error: null };
        } catch (e) {
            const error =
                e instanceof Error ? e : { message: "Uncaught error" };

            return { ...prevState, error };
        }
    }

    return (
        <>
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
                <MyButton
                    type="submit"
                    className="border rounded-md"
                    disabled={isPending}
                >
                    Update
                </MyButton>
                {!isPending && formState.error && (
                    <p className="text-red-600">
                        Error: {formState.error.message}
                    </p>
                )}
            </form>
        </>
    );
}

function MyButton({
    children,
    ...rest
}: {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { pending } = useFormStatus();

    return <button {...rest}>{pending ? "Submitting...." : children}</button>;
}
