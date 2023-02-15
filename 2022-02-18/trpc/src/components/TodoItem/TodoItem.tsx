import {Box, Checkbox, Flex} from '@chakra-ui/react'

type Todo = {
  completed: boolean
  id: number
  title: string
}

export interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({todo}: TodoItemProps) {
  return (
    <Flex backgroundColor="whiteAlpha.200" borderRadius="md" padding="4">
      <Flex alignItems="center" columnGap="4">
        <Checkbox isChecked={todo.completed} />
        <Box fontWeight="medium">{todo.title}</Box>
      </Flex>
    </Flex>
  )
}
