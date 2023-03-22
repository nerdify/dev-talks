import {Box, Checkbox, Flex} from '@chakra-ui/react'
import type {Todo} from '@prisma/client'

export interface TodoItemProps {
  todo: Pick<Todo, 'completed' | 'id' | 'title'>
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
