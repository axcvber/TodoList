import React from 'react'
import { MdDelete, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

type PropTypes = {
  text: string
  index: number
  completed: boolean
  onToggleCompleted: (index: number) => void
  onRemoveTask: (index: number) => void
}

const ListItem: React.FC<PropTypes> = ({ text, index, completed, onToggleCompleted, onRemoveTask }) => {
  const toggleCompleted = () => {
    onToggleCompleted(index)
  }

  const removeTask = () => {
    if (global.confirm('Вы действительно хотите удалить задачу?')) {
      onRemoveTask(index)
    }
  }

  return (
    <div className={`todo__list-item ${completed ? 'todo__list-item--completed' : ''}`}>
      <div onClick={toggleCompleted} className='todo__list-item-check'>
        {completed ? (
          <MdCheckBox className={'todo__list-item-check-done-icon'} />
        ) : (
          <MdCheckBoxOutlineBlank className={'todo__list-item-check-empty-icon'} />
        )}
      </div>
      <p className='todo__list-item-text'>{text}</p>
      <MdDelete onClick={removeTask} className='todo__list-item-remove' />
    </div>
  )
}

export default ListItem
