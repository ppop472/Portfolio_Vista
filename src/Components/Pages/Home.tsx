import profile from "../images/profile.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-gray-100">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi! I’m Christian 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Software Development student gespecialiseerd in C#, React & API’s
          </p>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Christian"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* TEKST */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Ik ben een gemotiveerde software development student met een passie
              voor het bouwen van moderne webapplicaties. Ik werk graag met
              <span className="font-semibold text-gray-900">
                {" "}C#, ASP.NET Core en React
              </span>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Mijn focus ligt op schone code, goede structuur en het bouwen van
              oplossingen die zowel technisch sterk als gebruiksvriendelijk zijn.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20">
          Mijn Projecten
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* PROJECT 1 */}
          <Link to="/projects/NewsSite" className="block">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition cursor-pointer">
              <h3 className="text-3xl font-semibold mb-4">
                NewsSite
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Een nieuwsplatform gebouwd met ASP.NET Core, Dapper en React.
                Inclusief CRUD, API-koppelingen en database opslag.
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800">
                Bekijk project
              </button>
            </div>
          </Link>


          {/* PROJECT 2 */}
          <Link to="/projects/TheKEMBBITTimes" className="block">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition cursor-pointer">
              <h3 className="text-3xl font-semibold mb-4">
                The KEMBIT Times
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Een moderne nieuwswebsite met categorieën, API-architectuur en
                meertaligheid, gericht op performance en UX.
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800">
                Bekijk project
              </button>
            </div>
          </Link>

          {/* EXTRA */}
          <Link to="/projects/ExtraBewijsstukken" className="block">
            <div className="bg-white rounded-3xl shadow-xl p-10 hover:-translate-y-2 transition cursor-pointer">
              <h3 className="text-3xl font-semibold mb-4">
                Extra bewijsstukken
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Hier zijn een paar extra bewijsstukken!
              </p>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800">
                Bekijk bewijsstukken
              </button>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Homepage;
