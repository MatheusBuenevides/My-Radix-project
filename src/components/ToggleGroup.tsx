import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function RadixToggleGroup() {
  return (
    <ToggleGroup.Root type="single" defaultValue="option1" className="flex gap-2">
      <ToggleGroup.Item
        value="option1"
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 data-[state='on']:bg-blue-500 data-[state='on']:text-white"
      >
        Option 1
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="option2"
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 data-[state='on']:bg-blue-500 data-[state='on']:text-white"
      >
        Option 2
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="option3"
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 data-[state='on']:bg-blue-500 data-[state='on']:text-white"
      >
        Option 3
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
