import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex justify-center items-center h-screen">
            <nav className="bg-gray-800 p-4 rounded-lg">
                <ul className="flex space-x-4 gap-5">
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/useTransition"
                            className="text-white hover:text-gray-400"
                        >
                            useTransition
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/useActionState"
                            className="text-white hover:text-gray-400"
                        >
                            useActionState
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/formActions"
                            className="text-white hover:text-gray-400"
                        >
                            Form Actions
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/useOptimistic"
                            className="text-white hover:text-gray-400"
                        >
                            useOptimistic
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/useFormStatus"
                            className="text-white hover:text-gray-400"
                        >
                            useFormStatus
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/metadata"
                            className="text-white hover:text-gray-400"
                        >
                            Metadata
                        </Link>
                    </li>
                    <li className="bg-gray-700 p-2 rounded">
                        <Link
                            href="/use"
                            className="text-white hover:text-gray-400"
                        >
                            Use
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
