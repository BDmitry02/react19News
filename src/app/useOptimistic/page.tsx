"use client";
import { useActionState, useOptimistic } from "react";
import BackArrow from "@/components/BackArrow/BackArrow";

interface FormActionData {
  name?: string;
  error: { message: string } | null;
}

export default function OptimisticComponent() {
  const [formState, setFormState, isPending] = useActionState(updateName, {
    //when using optimistic updates, we don't need an isPending state it's just for demonstration purposes
    name: "Anonymous user",
    error: null,
  });

  const [optimisticName, setOptimisticName] = useOptimistic(formState.name);

  async function updateName(prevState: FormActionData, formData: FormData) {
    setOptimisticName(formData.get("name") as string); //we update the optimistic state
    try {
      const newName = await updateInDb(formData.get("name") as string);
      return { name: newName, error: null };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return { name: prevState.name, error };
      } else {
        return { name: prevState.name, error: { message: "Uncaught error" } };
      }
    }
  }

  return (
    <>
      <BackArrow />
      <p>
        Current user <span className="text-blue-200">{optimisticName}</span>
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
