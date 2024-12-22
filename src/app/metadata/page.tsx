"use client";
import BackArrow from "@/components/BackArrow/BackArrow";

interface FormActionData {
  name?: string;
  error: { message: string } | null;
}

export default function OptimisticComponent() {
  return (
    <>
      <BackArrow />
      <article>
        <h1>My post</h1>
        <title>My post</title>
        <meta name="description" content="This is my post" />
        <meta name="keywords" content="test1, test2" />
        <p>12322131</p>
      </article>
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
