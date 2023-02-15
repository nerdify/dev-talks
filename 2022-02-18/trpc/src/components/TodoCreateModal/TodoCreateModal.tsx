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

interface TodoCreateModalProps {
  isOpen: boolean
  onClose(): void
}

export default function TodoCreateModal({
  isOpen,
  onClose,
}: TodoCreateModalProps) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="todo-create-form">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input />
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
