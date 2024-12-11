import "./App.css";

function App() {
    return (
        <>
            {/* HEADER */}
            <header className="bg-red-300">
                <h1>Task Manager</h1>
            </header>
            {/* CURRENT TASKS */}
            <section className="bg-green-300">
                <h2>Current Tasks</h2>
            </section>
            {/* COMPLETED TASKS */}
            <section className="bg-blue-300">
                <h2>Completed Tasks Tasks</h2>
            </section>
        </>
    );
}

export default App;
