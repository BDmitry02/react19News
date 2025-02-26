import { UserData } from "@/interfaces/user";

export function getUserData(userName: string) {
    switch (userName) {
        case "John":
            return { name: "John", age: 25 };
        case "Jane":
            return { name: "Jane", age: 30 };
        default:
            return {
                name: "error",
                age: 0,
            };
    }
}

export function updateUserInDb(userData: UserData): Promise<UserData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData.name.toLowerCase().includes("error")) {
                reject(new Error("Failed to update user"));
            } else {
                resolve({ ...userData, error: undefined });
            }
        }, 3000);
    });
}