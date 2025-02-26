export function updateFormInDb(newName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (newName.toLowerCase().includes("error")) {
                reject(new Error("Failed to update name"));
            } else {
                resolve(newName);
            }
        }, 3000);
    });
}
