import React, { useState, useRef, useEffect } from "react";

export const MultiSelectDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLabel = () => {
  if (selected.length === 0) return "Select options";
  if (selected.length <= 2)
    return selected.map((o) => o.label).join(", ");
  return `${selected.length} options selected`;
};

  return (
    <div ref={dropdownRef} style={{ width: 240, position: "relative" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
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
                checked={selected.find((item) => item.id === option.id)}
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
