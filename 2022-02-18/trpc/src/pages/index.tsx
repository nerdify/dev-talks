import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Switch,
  useDisclosure,
} from '@chakra-ui/react'
import {faPlus as fasPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import TodoCreateModal from '#/components/TodoCreateModal'
import TodoList from '#/components/TodoList'

const todos = [
  {
    completed: false,
    id: 1,
    title: 'Live Coding',
  },
]

export default function Index() {
  const {isOpen, onClose, onOpen} = useDisclosure()

  return (
    <>
      <Stack paddingBlock="4" spacing="4">
        <Flex alignItems="center" justifyContent="space-between">
          <Button
            leftIcon={<FontAwesomeIcon icon={fasPlus} />}
            onClick={onOpen}
            variant="ghost"
          >
            Add an item
          </Button>
          <Heading as="h1" size="lg">
            Todos
          </Heading>
          <Flex alignItems="center" as="label" columnGap="2">
            <Switch /> Completed
          </Flex>
        </Flex>
        <Divider />
        <TodoList todos={todos} />
      </Stack>
      <TodoCreateModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
