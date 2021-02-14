import React, { useState } from 'react'
import ListItem from './components/ListItem'
import TaskField from './components/TaskField'

type StateType = {
  text: string
  completed: boolean
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<StateType>>([
    {
      text: 'Изучить ReactJS',
      completed: false,
    },
  ])

  const onAddTask = (text: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ])
  }

  const onToggleCompleted = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    )
  }

  const onRemoveTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx))
  }

  const onClearTodo = () => {
    if (tasks.length) {
      if (global.confirm('Вы действительно хотите все очистить?')) {
        setTasks([])
      }
    }
  }

  return (
    <div className='app-wrapper'>
      <div className='todo'>
        <div className='todo__header'>
          <h3>Список задач</h3>
        </div>

        <TaskField onAddTask={onAddTask} />

        <div className='todo__list'>
          <div className='todo__list-all-task'>
            <p>Выполнено: {tasks.filter((item) => item.completed).length}</p>
            <p>Всего задач: {tasks.length}</p>
          </div>

          {tasks.map((task, index) => (
            <ListItem
              key={index}
              index={index}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
          <div className='todo__list-clear-all'>
            <p>Todo List v1.0</p>
            <button onClick={onClearTodo}>Очистить все</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
