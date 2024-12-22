"use client";
import BackArrow from "@/components/BackArrow/BackArrow";
import { useState } from "react";

export default function OldFormActions() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("Anonymous user");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const name = await updateInDb(inputValue);
      setName(name);
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <BackArrow />
      <p>
        Current user <span className="text-blue-200">{name}</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-72">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
          className="text-black"
        />
        <button type="submit" className="border rounded-md ">
          Update
        </button>
      </form>
    </>
  );
}

function updateInDb(name: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
