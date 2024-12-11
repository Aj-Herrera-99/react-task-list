import "./App.css";
import { tasks } from "./data/tasks";
import Header from "./components/Header";

function App() {
    const currentTasks = [];
    const completedTasks = [];
    tasks.forEach((task) => {
        if (task.state.toLocaleLowerCase() != "completed") {
            currentTasks.push(task);
        } else {
            completedTasks.push(task);
        }
    });

    // classes
    const bgColorBadge = (state) => {
        switch (state) {
            case "completed":
                return "bg-green-500";
            case "in_progress":
                return "bg-blue-500";
            case "backlog":
                return "bg-red-500";
            default:
                return "";
        }
    };

    return (
        <>
            {/* HEADER COMPONENT */}
            <Header />

            {/* CURRENT TASKS */}
            <section className="p-6">
                <h2 className="text-xl font-semibold">
                    Current Tasks ({currentTasks.length})
                </h2>
                <ul className="my-4">
                    {currentTasks.map((task) => (
                        <li key={task.id} className="flex flex-col my-4">
                            <div className="flex flex-wrap items-center gap-3 font-semibold">
                                <h3>{task.title}</h3>
                                <span
                                    className={`text-white px-4 py-1 rounded-md ${bgColorBadge(
                                        task.state
                                    )}`}
                                >
                                    {task.state}
                                </span>
                            </div>
                            <span>Priority: {task.priority}</span>
                            <span>Est. time {task.estimatedTime}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* SEPARATOR (ONLY GRAPHICS) */}
            <div className="px-6 ">
                <div className="border-solid border-b-2 border-stone-300"></div>
            </div>

            {/* COMPLETED TASKS */}
            <section className="p-6">
                <h2 className="text-xl font-semibold">
                    Completed Tasks ({completedTasks.length})
                </h2>
                <ul className="my-4">
                    {completedTasks.map((task) => (
                        <li key={task.id} className="flex flex-col my-4">
                            <div className="flex flex-wrap items-center gap-3 font-semibold">
                                <h3>{task.title}</h3>
                                <span
                                    className={`text-white px-4 py-1 rounded-md ${bgColorBadge(
                                        task.state
                                    )}`}
                                >
                                    {task.state}
                                </span>
                            </div>
                            <span>Priority: {task.priority}</span>
                            <span>Est. time {task.estimatedTime}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default App;
