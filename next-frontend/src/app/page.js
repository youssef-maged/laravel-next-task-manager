import TaskList from "@/components/tasks/TaskList";

const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
const tasks = await response.json();

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <TaskList tasks={tasks} />
    </div>
  );
}
