import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'

type PropsType = {
  onAddTask: (text: string) => void
}

const TaskField: React.FC<PropsType> = ({ onAddTask }) => {
  const [text, setText] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  const addTask = () => {
    if (text.length > 0) {
      onAddTask(text)
      setText('')
    } else {
      global.alert('Введите задачу')
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }
  return (
    <div className='todo__add-field'>
      <input
        type='text'
        value={text}
        onChange={handleInputChange}
        placeholder='Введите текст задачи...'
        onKeyPress={handleKeyUp}
      />
      <MdAdd className='todo__add-field-button' onClick={addTask} />
    </div>
  )
}

export default TaskField
