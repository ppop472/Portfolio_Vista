import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function TheKEMBITTimes() {
    const [isFull, setIsFull] = useState(false);
    const [fullImage, setFullImage] = useState<string | null>(null);


    // Images for B1-K1-W1
    const b1k1w1Images1 = [
        "/Proof/TheKEMBITTimes/K1-W1/trello1.PNG",
        "/Proof/TheKEMBITTimes/K1-W1/trello2.PNG",
        "/Proof/TheKEMBITTimes/K1-W1/trello3.PNG",
        "/Proof/TheKEMBITTimes/K1-W1/trello4.PNG",
    ];


    // Images for B1-K1-W1
    const b1k1w3Images1 = [
        "/Proof/TheKEMBITTimes/K1-W3/Img1.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img2.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img3.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img4.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img5.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img6.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img7.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img8.png",
    ];

    const b1k1w3Images2 = [
        "/Proof/TheKEMBITTimes/K1-W3/Img9.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img10.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img11.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img12.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img13.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img14.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img15.png",
        "/Proof/TheKEMBITTimes/K1-W3/Img16.png",
    ];

    const b1k1w3Images3 = [
        "/Proof/TheKEMBITTimes/K1-W3/GitKrakenPic1.png",
        "/Proof/TheKEMBITTimes/K1-W3/GitKrakenPic2.png",
        "/Proof/TheKEMBITTimes/K1-W3/GithubImg1.png",
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
                <h1 className="text-5xl font-bold mb-4">The KEMBIT Times</h1>
                <p className="text-gray-600 text-lg">
                    Bewijsstukken per kerntaak en werkproces
                </p>
            </div>

            {/* B1-K1-W1 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W1</h2>
                <p>Alle toegewezen user stories zijn gerealiseerd binnen de geplande tijd en voldoen volledig aan de eisen en wensen van de opdrachtgever.</p>
                <p>User stories zijn correct geformuleerd, compleet met prioritering en tijdsindicatie, en de kandidaat kan dit goed onderbouwen.</p>
                <br></br>
                <p>De planning is volledig en realistisch, met alle taken correct ingeschat en ingepland.</p>
                <p>Voortgang wordt duidelijk bewaakt, prioriteiten zijn goed inzichtelijk en keuzes en afwegingen worden zowel binnen het team als met de opdrachtgever gemaakt.</p>
                <br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">PDF</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W1/Behoefteanalyse Kembit Times v1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W1/Behoefteanalyse Kembit Times v1.0.pdf`}
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
                            {b1k1w1Images1.map((img, idx) => (
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

                    {/* Links */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Trello Link</h3>
                        <h1><a className="text-blue-400 underline" target="_blank" href="https://trello.com/b/mcqUSTDm/stage-opdracht">Trello</a></h1>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K1-W2 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W2</h2>
                <p>Het ontwerp weerspiegelt volledig alle eisen, wensen en user stories, met duidelijke toelichting.</p>
                <p>Alle benodigde schema’s zijn aanwezig en correct, inclusief dataschema, activiteitendiagram, class diagram en design patterns.</p>
                <p>Alle keuzes zijn goed beargumenteerd, met aandacht voor ethiek, privacy en security.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Functioneel Ontwerp</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W2/Functioneel_Ontwerp_Kembit_Times.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview Functioneel Ontwerp"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W2/Functioneel_Ontwerp_Kembit_Times.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Technisch Ontwerp</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W2/Technisch_ontwerp_Kembit_Times.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview Technisch Ontwerp"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W2/Technisch_ontwerp_Kembit_Times.pdf`}
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
                <p>Alle toegewezen user stories zijn gerealiseerd en de functionaliteit werkt volledig volgens de ontwerpprincipes.</p>
                <p>Code is kwalitatief hoog, gestructureerd, veilig, foutafhandeling is goed, conventies zijn gevolgd en versiebeheer is volledig toegepast.</p>
                <p>Code conventions zijn consequent toegepast.</p>
                <p>Code is verzorgd, leesbaar en voorzien van zinvol commentaar.</p>
                <p>Versiebeheer is gestructureerd toegepast met een geschikte tool en alle versies zijn juist vastgelegd en terug te halen.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Images 1 */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k1w3Images1.map((img, idx) => (
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

                    {/* Images 2 */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k1w3Images2.map((img, idx) => (
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

                    {/* Images 3 */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Afbeeldingen</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {b1k1w3Images3.map((img, idx) => (
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

            {/* B1-K1-W4 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W4</h2>
                <p>Testplan is duidelijk, sluit aan op de user stories, bevat alle scenario’s en alternatieve paden.</p>
                <p>Testscenario’s bevatten testdata en gewenste resultaten voor hoofd- en alternatieve scenario’s.</p>
                <p>Testrapport bevat alle resultaten en conclusies, met inzicht in de samenhang van de applicatie.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">TestPlan</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W4/TestPlan The KEMBIT Times.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W4/TestPlan The KEMBIT Times.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>

                    {/* Audio */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h3 className="font-semibold mb-2">Audio</h3>
                        <audio
                            controls
                            className="w-full"
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W4/The KEMBIT Times T-14.m4a`}
                        />
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K1-W5 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K1-W5</h2>
                <p>Verbeterpunten zijn duidelijk terug te voeren op testresultaten en verbeteren de technische of functionele onderdelen.</p>
                <p>Verbeterpunten verbeteren de functionaliteit en het gebruik van de software en zijn gekoppeld aan de opdracht en user stories.</p>
                <p>Verbeterpunten komen voort uit reflectie op het proces en de individuele bijdrage en zijn duidelijk gerelateerd aan de doorlopen rol en het proces.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Verbetervoorstellen</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W5/Verbetervoorstel The KEMBIT Times 1.0.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K1-W5/Verbetervoorstel The KEMBIT Times 1.0.pdf`}
                            target="_blank"
                            className="text-blue-600 underline block mt-2"
                        >
                            Open volledige PDF
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K2-W1 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W1</h2>
                <p>Kandidaat is actief aanwezig, brengt relevante onderwerpen in en stelt relevante vragen.</p>
                <p>Kandidaat stemt voortgang regelmatig en tijdig af met team en opdrachtgever en benoemt knelpunten.</p>
                <p>Alle gemaakte afspraken zijn eenduidig vastgelegd, inclusief actiepunten, tijd, verantwoordelijke en opvolging.</p>
                <p>Kandidaat houdt zich volledig aan gemaakte afspraken en raadpleegt actief planning en gemaakte afspraken.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        {/* Video */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Interview</h3>
                            <video
                                controls
                                className="w-full rounded-xl"
                                src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K2-W1/Interview.mp4`}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>

            {/* B1-K2-W2 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W2</h2>
                <p>Kandidaat presenteert een overtuigend en duidelijk verhaal over zijn/haar bijdrage, toont de samenhang met het product, reageert actief op de doelgroep, stelt gerichte vragen om te controleren of betrokkenen goed geïnformeerd zijn, en legt helder uit hoe zijn/haar werk heeft bijgedragen aan het eindresultaat.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        {/* Video */}
                        <div className="bg-white rounded-2xl shadow p-6">
                            <h3 className="font-semibold mb-2">Deeloplevering</h3>
                            <video
                                controls
                                className="w-full rounded-xl"
                                src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K2-W2/Deeloplevering.mp4`}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-b border-gray-300"></div>
            </section>


            {/* B1-K2-W3 */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold mb-6">B1-K2-W3</h2>
                <p>Kandidaat benoemt positieve en verbeterpunten van eigen en teamproces en maakt duidelijk onderscheid tussen beide.</p>
                <p>Kandidaat reageert actief op feedback, stelt vragen indien nodig en plaatst feedback correct in context.</p>
                <p>Kandidaat is actief aanwezig tijdens reflectiemeetings, brengt relevante onderwerpen in en ziet de bredere context van het project.</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-4">
                        <h3 className="font-semibold mb-2">Reflectieverslag</h3>
                        <iframe
                            src={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K2-W3/Reflectieverslag The_Kembit_Times.pdf`}
                            width="100%"
                            className="rounded-xl border h-64 md:h-96"
                            title="PDF Preview B1-K1-W1"
                        />
                        <a
                            href={`${process.env.PUBLIC_URL}/Proof/TheKEMBITTimes/K2-W3/Reflectieverslag The_Kembit_Times.pdf`}
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
