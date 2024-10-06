import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HubPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Specter solution</h1>
            <div className="grid grid-cols-2 gap-4">
                <Link to="/intervention">
                    <Button className="w-44 h-40 text-lg rounded-xl p-2 bg-red-400">
                        Panel interwencyjny
                    </Button>
                </Link>
                <Link to="/form">
                    <Button className="w-44 h-40 text-lg rounded-xl p-2 bg-green-400">
                        Panel obywatela
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HubPage;
