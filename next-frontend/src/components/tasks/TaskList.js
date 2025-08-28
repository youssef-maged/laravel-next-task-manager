export default function TaskList({ tasks = [] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100 dark:divide-white/5 w-2/3">
      {tasks.map((task) => (
        <li key={task.id} className="relative flex items-center space-x-4 py-4">
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3">
              <h2 className="min-w-0 text-sm/6 font-semibold text-gray-900 dark:text-white">
                <span className="truncate">{task.title}</span>
				<span className="absolute inset-0" />
              </h2>
            </div>
            <div className="mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-500 dark:text-gray-400">
              <p className="truncate">{task.description}</p>
            </div>
          </div>
          {task.status === 'pending' ? (
            <div className="flex-none rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 inset-ring inset-ring-yellow-700/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:inset-ring-yellow-400/20">
              Pending
            </div>
          ) : null}
          {task.status === 'in progress' ? (
            <div className="flex-none rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 inset-ring inset-ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:inset-ring-blue-400/30">
              In Progress
            </div>
          ) : null}
          {task.status === 'done' ? (
            <div className="flex-none rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-700/10 dark:bg-green-400/10 dark:text-green-400 dark:inset-ring-green-400/30">
              Done
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
