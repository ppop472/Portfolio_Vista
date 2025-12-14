import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function NewsSite() {
    const [isFull, setIsFull] = useState(false);
    const [fullImage, setFullImage] = useState<string | null>(null);

    // Images for B1-K2-W1
    const b1k2w1Images1 = [
        "/Proof/NewsSite/K2-W1/Mike Feedback.png",
        "/Proof/NewsSite/K2-W1/TeamsVergaderingImg.png",
        "/Proof/NewsSite/K2-W1/TeamsVergadering2Img.png",
        "/Proof/NewsSite/K2-W1/TeamsVergadering3VoortgangGesrekImg.png",
        "/Proof/NewsSite/K2-W1/DevOpsImg.png",
    ];

    // Images for B1-K1-W5
    const b1k1w5Images1 = [
        "/Proof/NewsSite/K1-W5/Mike Feedback.PNG",
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className="min-h-screen bg-gray-100 px-4 py-16">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h1 className="text-5xl font-bold mb-4">NewsSite</h1>
                <p className="text-gray-600 text-lg">
                    Bewijsstukken per kerntaak en werkproces
                </p>
            </div>

            {/* B1-K1-W1 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W1</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W1/Behoefteanalyse Kembit Times v1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W1/Behoefteanalyse Kembit Times v1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K1-W2 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W2</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Functioneel Ontwerp</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Functioneel Ontwerp NewSite v1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview Functioneel Ontwerp"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Functioneel Ontwerp NewSite v1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Technisch Ontwerp</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Technisch_ontwerp_NewsSite_v1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview Technisch Ontwerp"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Technisch_ontwerp_NewsSite_v1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>


            {/* B1-K1-W4 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W4</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">TestPlan</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W4/TestPlan NewsSite.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W4/TestPlan NewsSite.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K1-W5 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W5</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Verbetervoorstellen</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W5/Verbetervoorstel NewsSite 1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W5/Verbetervoorstel NewsSite 1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    {/* Images 1 */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k1w5Images1.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`B1-K2-W1-${idx + 1}`}
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

            {/* B1-K2-W1 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W1</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* PDF */}
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W1/Beoordeling overlegvaardigheden.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K2-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W1/Beoordeling overlegvaardigheden.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    {/* Images 1 */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k2w1Images1.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`B1-K2-W1-${idx + 1}`}
                                    className="h-24 w-full object-cover rounded cursor-pointer"
                                    onClick={() => {
                                        setFullImage(img);
                                        setIsFull(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Video */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Interview</h3>
                        <video
                            controls
                            className="w-full rounded-xl"
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W1/Interview.mp4`}
                        />
                    </div>

                    {/* Audio */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Audio</h3>
                        <audio
                            controls
                            className="w-full"
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W1/sample-audio.mp3`}
                        />
                    </div>

                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>


            {/* B1-K2-W2 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W2</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        {/* Video */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Deeloplevering</h3>
                            <video
                                controls
                                className="w-full rounded-xl"
                                src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W2/Deeloplevering.mov`}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>


            {/* B1-K2-W3 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W2</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Reflectieverslag</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W3/Reflectieverslag met feedback van Mike.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K2-W3/Reflectieverslag met feedback van Mike.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
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
