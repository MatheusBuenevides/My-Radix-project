import { RadixAccordion } from "./components/Accordion";
import { RadixDialog } from "./components/Dialog";
import { RadixToggleGroup } from "./components/ToggleGroup";

export default function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-center">Radix UI + Tailwind CSS</h1>
      <div className="space-y-4">
        <RadixAccordion />
        <RadixDialog />
        <RadixToggleGroup />
      </div>
    </div>
  );
}
