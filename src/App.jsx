import "./App.css";
import { tasks } from "./data/tasks";

function App() {
    
    const currentTasks = tasks.filter(task => task.state.toLowerCase() != "completed")

    const completedTasks = tasks.filter(task => task.state.toLowerCase() == "completed")

    return (
        <>
            {/* HEADER */}
            <header className="bg-red-300 p-4">
                <h1>Task Manager</h1>
            </header>
            {/* CURRENT TASKS */}
            <section className="bg-green-300 p-4">
                <h2>Current Tasks</h2>
                <ul>
                    {currentTasks.map((task) => (
                        <li className="flex flex-col">
                            <div className="flex gap-3">
                                <h3>{task.title}</h3>
                                <span>{task.state}</span>
                            </div>
                            <span> Priority: {task.priority}</span>
                            <span>Est. time {task.estimatedTime}</span>
                        </li>
                    ))}
                </ul>
            </section>
            {/* COMPLETED TASKS */}
            <section className="bg-blue-300 p-4">
                <h2>Completed Tasks</h2>
                {completedTasks.map((task) => (
                    <li className="flex flex-col">
                        <div className="flex gap-3">
                            <h3>{task.title}</h3>
                            <span>{task.state}</span>
                        </div>
                        <span> Priority: {task.priority}</span>
                        <span>Est. time {task.estimatedTime}</span>
                    </li>
                ))}
            </section>
        </>
    );
}

export default App;
