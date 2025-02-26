import { ChangeEvent, FormEvent, useState } from "react";
import { updateFormInDb } from "@/funcs/form";
import { FormActionData } from "@/interfaces/form";

export default function WithoutFormActions() {
    const [formState, setFormState] = useState<FormActionData>({
        name: "Anonymous user",
        error: null,
    });

    const [inputValue, setInputValue] = useState("");
    const [isPending, setIsPending] = useState(false);

    function onInputValueChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsPending(true);

        try {
            const newName = await updateFormInDb(inputValue);

            setFormState({ name: newName, error: null });
        } catch (e) {
            const error =
                e instanceof Error ? e : { message: "Uncaught error" };

            setFormState((prevState) => ({ ...prevState, error }));
        }

        setIsPending(false);
    }

    return (
        <>
            <p>
                Current user{" "}
                <span className="text-blue-200">{formState.name}</span>
            </p>
            <form className="flex flex-col gap-4 w-72" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    name="name"
                    required
                    onChange={onInputValueChange}
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
        </>
    );
}
