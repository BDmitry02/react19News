"use client";
import BackArrow from "@/components/BackArrow/BackArrow";
import { useActionState } from "react";

interface FormActionData {
  name?: string;
  error: { message: string } | null;
}

export default function NewFormActions() {
  const [formState, setFormState, isPending] = useActionState(updateName, {
    name: "Anonymous user",
    error: null,
  }); //we paste the func that will be called on form submit and initial value of the state

  async function updateName(prevState: FormActionData, formData: FormData) {
    try {
      const newName = await updateInDb(formData.get("name") as string);
      return { name: newName, error: null }; //we return the new state
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return { name: prevState.name, error }; //we return the new state
      } else {
        return { name: prevState.name, error: { message: "Uncaught error" } }; //we return the new state
      }
    }
  }

  return (
    <>
      <BackArrow />
      <p>
        Current user <span className="text-blue-200">{formState.name}</span>
      </p>
      <form action={setFormState} className="flex flex-col gap-4 w-72">
        <input type="text" name="name" required className="text-black" />
        {isPending && <p>Updating...</p>}
        <button
          type="submit"
          className="border rounded-md"
          disabled={isPending}
        >
          Update
        </button>
        {!isPending && formState.error && (
          <p className="text-red-600">Error: {formState.error.message}</p>
        )}
      </form>
    </>
  );
}

function updateInDb(newName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newName.toLowerCase().includes("error")) {
        reject(new Error("Failed to update name"));
      } else {
        resolve(newName);
      }
    }, 1500);
  });
}
