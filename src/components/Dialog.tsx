import * as Dialog from '@radix-ui/react-dialog';

export function RadixDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0" />
        <Dialog.Content className="bg-white rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 w-96">
          <Dialog.Title className="text-lg font-bold">Dialog Title</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            This is a description of the dialog.
          </Dialog.Description>
          <Dialog.Close className="mt-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
