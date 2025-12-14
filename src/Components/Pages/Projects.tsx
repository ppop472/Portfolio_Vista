import "./Styling/Projects.css"
import { Link, useLocation } from 'react-router-dom';

function Projectpage() {
    return (
        <div className="App">
            <div className="main">
                <div className="main mx-auto p-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="flex-1 bg-[rgb(199,44,65)] text-white p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-2">NewsSite stage project</h2>
                            <p>Some content goes here. It will stack on mobile and sit side by side on larger screens.</p>
                        </button>
                        <button className="flex-1 bg-[rgb(199,44,65)] text-white p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-2">The KEMBIT Times stage project</h2>
                            <p>Some other content goes here. Fully responsive with the first div.</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projectpage;
