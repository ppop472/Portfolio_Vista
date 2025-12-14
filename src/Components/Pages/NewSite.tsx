import { useEffect } from "react";
import placeholder from "../images/profile.png";
import ReactPlayer from "react-player";

export default function NewsSite() {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-16">

            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h1 className="text-5xl font-bold mb-4">NewsSite</h1>
                <p className="text-gray-600 text-lg">
                    Bewijsstukken per kerntaak en werkproces
                </p>
            </div>

            {/* B1-K1-W1 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W1</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* PDF with iframe */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W1/Behoefteanalyse Kembit Times v1.0.pdf`}
                            width="100%"
                            height={400}
                            className="rounded-xl border"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* PDF with iframe */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Functioneel Ontwerp NewSite v1.0.pdf`}
                            width="100%"
                            height={400}
                            className="rounded-xl border"
                            title="PDF Preview B1-K1-W2"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Functioneel Ontwerp NewSite v1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    {/* PDF with iframe */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/K1-W2/Technisch_ontwerp_NewsSite_v1.0.pdf`}
                            width="100%"
                            height={400}
                            className="rounded-xl border"
                            title="PDF Preview B1-K1-W2"
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

            {/* B1-K1-W3 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W3</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* PDF with iframe */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/NewsSite/w3.pdf`}
                            width="100%"
                            height={400}
                            className="rounded-xl border"
                            title="PDF Preview B1-K1-W3"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/NewsSite/w3.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    {/* Images */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-24 bg-gray-200 rounded"></div>
                            <div className="h-24 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Video</h3>
                        <div className="h-40 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                            MP4 placeholder
                        </div>
                    </div>

                    {/* Audio */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Audio</h3>
                        <div className="h-20 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                            MP3 placeholder
                        </div>
                    </div>

                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

        </div>
    );
}
