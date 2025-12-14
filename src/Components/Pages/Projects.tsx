import "./Styling/Projects.css";
import { Link } from "react-router-dom";

function Projectpage() {
  return (
    <div className="App">
      <div className="main">
        <div className="main mx-auto p-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* NewsSite card */}
            <Link
              to="/projects/NewsSite"
              className="flex-1 block bg-[rgb(199,44,65)] text-white p-6 rounded-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-bold mb-2">NewsSite stage project</h2>
              <p>
                Some content goes here. It will stack on mobile and sit side by side on larger screens.
              </p>
            </Link>

            {/* KEMBIT Times card */}
            <Link
              to="/projects/TheKEMBITTimes"
              className="flex-1 block bg-[rgb(199,44,65)] text-white p-6 rounded-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-xl font-bold mb-2">The KEMBIT Times stage project</h2>
              <p>Some other content goes here. Fully responsive with the first div.</p>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
