import { useState } from "react";
import { SlowComponent } from "@/components/slow-component/SlowComponent";

export default function WithoutTransition() {
    const [tab, setTab] = useState("home");

    function onTabChange(tabName: string) {
        setTab(tabName);
    }

    function setStyle(selectedTabName: string) {
        return {
            backgroundColor: tab === selectedTabName ? "#262626" : "white",
            color: tab === selectedTabName ? "white" : "black",
        };
    }
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1>Without use Transition</h1>
            <div className="flex items-center justify-center gap-4 p-4">
                <button
                    onClick={() => onTabChange("home")}
                    className="border rounded-md hover:text-gray-400 p-2"
                    style={setStyle("home")}
                >
                    Home
                </button>
                <button
                    onClick={() => onTabChange("users")}
                    className="border rounded-md hover:text-gray-400 p-2"
                    style={setStyle("users")}
                >
                    Users
                </button>
                <button
                    onClick={() => onTabChange("about")}
                    className="border rounded-md hover:text-gray-400 p-2"
                    style={setStyle("about")}
                >
                    About
                </button>
            </div>
            <div>
                {tab === "home" && <h1>Home</h1>}
                {tab === "users" && <SlowComponent />}
                {tab === "about" && <h1>About Page</h1>}
            </div>
        </div>
    );
}
