import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Category {
  id: string;
  name: string;
  imageUrl: string; // The imageUrl is optional since it might not always be present
}

interface Iprops {
  selected: Category; // The currently selected category
  setSelected: (category: Category) => void; // The function to update the selected category
  options: Category[]; // The array of category options to choose from
}

const Select = ({ selected, setSelected, options }: Iprops) => {
  console.log(selected);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-md sm:text-sm">
          <span className="flex items-center">
            {selected.imageUrl && (
              <img
                alt=""
                src={selected.imageUrl}
                className="h-5 w-5 flex-shrink-0 rounded-full"
              />
            )}
            <span className="ml-3 block truncate">{selected.name}</span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white shadow-lg sm:text-sm">
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-3 pr-4 ${
                  active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                }`
              }
            >
              <div className="flex items-center">
                {option.imageUrl && (
                  <img
                    alt=""
                    src={option.imageUrl}
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                )}
                <span className="ml-3 block truncate">{option.name}</span>
              </div>
              {selected.id === option.id ? (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-amber-600">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              ) : null}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Select;
