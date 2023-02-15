import {Stack} from '@chakra-ui/react'

import TodoItem, {type TodoItemProps} from '#/components/TodoItem'

interface TodoListProps {
  todos: TodoItemProps['todo'][]
}

export default function TodoList({todos}: TodoListProps) {
  return (
    <Stack>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  )
}
