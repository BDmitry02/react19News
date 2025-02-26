export interface UserData {
    name: string;
    age: number;
    error?: Error | { message: string };
}
