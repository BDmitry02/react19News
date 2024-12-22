"use client";
import { useState, useTransition } from "react";
import { users } from "../../../../data";
import BackArrow from "@/components/BackArrow/BackArrow";

export default function WithTransition() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(tabName: string) {
    startTransition(() => setTab(tabName));
  }

  function setStyle(selectedTabName: string) {
    return {
      backgroundColor: tab === selectedTabName ? "#262626" : "white",
      color: tab === selectedTabName ? "white" : "black",
    };
  }
  return (
    <main className="w-full">
      <BackArrow />
      <nav className="flex items-center justify-center gap-4 p-4">
        <button
          onClick={() => handleTabChange("home")}
          style={setStyle("home")}
        >
          Home
        </button>
        <button
          onClick={() => handleTabChange("users")}
          style={setStyle("users")}
        >
          Users
        </button>
        <button
          onClick={() => handleTabChange("about")}
          style={setStyle("about")}
        >
          About
        </button>
      </nav>
      <div>
        {isPending && <h1>Loading...</h1>}
        {!isPending && tab === "home" && <h1>Home</h1>}
        {!isPending && tab === "users" && <Users />}
        {!isPending && tab === "about" && <h1>About Page</h1>}
      </div>
    </main>
  );
}

function Users() {
  const userList = users.map((user, i) => <SlowProduct key={i} user={user} />);
  return (
    <>
      <h1>Products page</h1>
      <ul>{userList}</ul>
    </>
  );
}

function SlowProduct({ user }: { user: { name: string } }) {
  sleep(3);
  return <li>Product {user.name}</li>;
}
function sleep(seconds: number) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < seconds) {}
}
