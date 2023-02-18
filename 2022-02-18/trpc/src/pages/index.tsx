import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Switch,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react'
import {faPlus as fasPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import TodoCreateModal from '#/components/TodoCreateModal'
import TodoList from '#/components/TodoList'
import trpc from '#/lib/trpc'

export default function Index() {
  const [onlyCompleted, {toggle: toggleOnlyCompleted}] = useBoolean(false)
  const {isOpen, onClose, onOpen} = useDisclosure()
  const todos = trpc.todos.all.useQuery({
    completed: onlyCompleted || undefined,
  })

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
            <Switch isChecked={onlyCompleted} onChange={toggleOnlyCompleted} />{' '}
            Completed
          </Flex>
        </Flex>
        <Divider />
        <TodoList todos={todos.data ?? []} />
      </Stack>
      <TodoCreateModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
