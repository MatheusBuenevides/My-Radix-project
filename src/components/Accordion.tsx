import * as Accordion from '@radix-ui/react-accordion';

export function RadixAccordion() {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full">
      <Accordion.Item value="item-1" className="border-b">
        <Accordion.Header>
          <Accordion.Trigger className="w-full text-left px-4 py-2 text-lg bg-gray-100 hover:bg-gray-200">
            Item 1
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 bg-gray-50">
          <p>Content for item 1</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" className="border-b">
        <Accordion.Header>
          <Accordion.Trigger className="w-full text-left px-4 py-2 text-lg bg-gray-100 hover:bg-gray-200">
            Item 2
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="p-4 bg-gray-50">
          <p>Content for item 2</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
