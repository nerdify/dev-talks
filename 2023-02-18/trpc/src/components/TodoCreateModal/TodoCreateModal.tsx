import {useForm} from 'react-hook-form'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

import trpc from '#/lib/trpc'

interface TodoCreateModalProps {
  isOpen: boolean
  onClose(): void
}

interface FormData {
  title: string
}

export default function TodoCreateModal({
  isOpen,
  onClose,
}: TodoCreateModalProps) {
  const context = trpc.useContext()
  const mutation = trpc.todos.create.useMutation()
  const {handleSubmit, register} = useForm<FormData>()

  function onSubmit(data: FormData) {
    mutation.mutate(data, {
      onSuccess() {
        context.todos.invalidate()
        onClose()
      },
    })
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="todo-create-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                {...register('title', {
                  required: true,
                })}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Flex columnGap="4">
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" form="todo-create-form" type="submit">
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
