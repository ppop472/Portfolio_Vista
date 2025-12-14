import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function ExtraBewijsstukken() {
    const [isFull, setIsFull] = useState(false);
    const [fullImage, setFullImage] = useState<string | null>(null);

    // Images for B1-K2-W2
    const b1k2w2Images1 = [
        "/Proof/LOOI/K2-W2/LOOI oplever bewijs mail1.PNG",
        "/Proof/LOOI/K2-W2/LOOI oplever bewijs mail2.PNG",
        "/Proof/LOOI/K2-W2/Deeloplever LOOI mail 3.PNG",
        "/Proof/LOOI/K2-W2/Deeloplever LOOI mail 4.PNG",
    ];

    const b1k2w2Images2 = [
        "/Proof/LOOI/K2-W2/LOOI.jpeg",
        "/Proof/LOOI/K2-W2/POSTER.PNG",
    ];

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Close fullscreen on Escape
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isFull) {
                setIsFull(false);
                setFullImage(null);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isFull]);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-16">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h1 className="text-5xl font-bold mb-4">Extra Bewijsstukken</h1>
                <p className="text-gray-600 text-lg">
                    ExtraBewijsstukken!
                </p>
            </div>
            {/* B1-K2-W2 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W2</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Image grid */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k2w2Images1.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`B1-K2-W2-${idx + 1}`}
                                    className="h-24 w-full object-cover rounded cursor-pointer"
                                    onClick={() => {
                                        setFullImage(img);
                                        setIsFull(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image grid */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k2w2Images2.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`B1-K2-W2-${idx + 1}`}
                                    className="h-24 w-full object-cover rounded cursor-pointer"
                                    onClick={() => {
                                        setFullImage(img);
                                        setIsFull(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* Fullscreen overlay */}
            {isFull && fullImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
                    onClick={() => setIsFull(false)}
                >
                    <img
                        src={fullImage}
                        alt="Fullscreen"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            )}
        </div>
    );
}
