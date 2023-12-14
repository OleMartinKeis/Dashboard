import "./App.css";
import LeftColumn from "./components/leftColumn";
import Navbar from "./components/navbar";
import RightColumn from "./components/rightColumn";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <div className="flex bg-background text-white">
            <Sidebar />
            <div className="flex flex-col flex-1 relative">
                <Navbar />

                <div className="grid md:grid-cols-3 grid-cols-1 w-full">
                    <div className="col-span-2">
                        <LeftColumn />
                    </div>
                    <div className="w-full">
                        <RightColumn />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
