import { useState, useRef, useEffect } from "react";

/* =======================
   Types
======================= */

export interface DropdownOption {
  label: string;
  value: string;
  id: string;
}

interface MultiSelectDropdownProps {
  options: DropdownOption[];
  selected: DropdownOption[];
  setSelected: React.Dispatch<React.SetStateAction<DropdownOption[]>>;
}

/* =======================
   Component
======================= */

export const MultiSelectDropdown = ({
  options,
  selected,
  setSelected,
}: MultiSelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleOption = (option: DropdownOption) => {
    setSelected((prev) =>
      prev.some((item) => item.id === option.id)
        ? prev.filter((item) => item.id !== option.id)
        : [...prev, option],
    );
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLabel = (): string => {
    if (selected.length === 0) return "Select options";
    if (selected.length <= 2)
      return selected.map((o) => o.label).join(", ");
    return `${selected.length} options selected`;
  };

  return (
    <div ref={dropdownRef} style={{ width: 240, position: "relative" }}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          border: "1px solid black",
          padding: "8px 10px",
          borderRadius: 4,
          cursor: "pointer",
          background: "white",
        }}
      >
        {renderLabel()}
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            border: "1px solid black",
            borderRadius: 4,
            background: "white",
            marginTop: 4,
            maxHeight: 160,
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {options.map((option) => (
            <label
              key={option.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "6px 10px",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.id === option.id,
                )}
                onChange={() => toggleOption(option)}
                style={{ marginRight: 8 }}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
