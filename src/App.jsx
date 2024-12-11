import "./App.css";
import { tasks } from "./data/tasks";

function App() {
    // filtro tasks in corso
    const currentTasks = tasks.filter(
        (task) => task.state.toLowerCase() != "completed"
    );
    // numero tasks in corso
    const currTasksLen = currentTasks.length;

    // filtro tasks completate
    const completedTasks = tasks.filter(
        (task) => task.state.toLowerCase() == "completed"
    );
    // numero tasks completate
    const completedTasksLen = completedTasks.length;

    return (
        <>
            {/* HEADER */}
            <header className="p-6 bg-green-300">
                <h1 className="text-4xl font-semibold">Task Manager</h1>
            </header>

            {/* CURRENT TASKS */}
            <section className="p-6">
                <h2 className="text-xl font-semibold">
                    Current Tasks ({currTasksLen})
                </h2>
                <ul className="my-4">
                    {currentTasks.map((task) => (
                        <li key={task.id} className="flex flex-col my-3">
                            <div className="flex gap-3 font-semibold">
                                <h3>{task.title}</h3>
                                <span>{task.state}</span>
                            </div>
                            <span> Priority: {task.priority}</span>
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
                    Completed Tasks ({completedTasksLen})
                </h2>
                <ul className="my-4">
                    {completedTasks.map((task) => (
                        <li key={task.id} className="flex flex-col my-3">
                            <div className="flex gap-3 font-semibold">
                                <h3>{task.title}</h3>
                                <span>{task.state}</span>
                            </div>
                            <span> Priority: {task.priority}</span>
                            <span>Est. time {task.estimatedTime}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default App;
