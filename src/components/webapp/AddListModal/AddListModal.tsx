import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string) => void;
}

export default function AddListModal({
  isOpen,
  onClose,
  onConfirm,
}: ModalProps) {
  const [listName, setListName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm(listName);
    setListName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-white p-4 shadow-lg">
        <h2 className="mb-4 text-xl">Add New List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={listName}
            onChange={handleChange}
            className="mb-4 w-full border p-2"
            placeholder="List Name"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-300 px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-green-600 px-4 py-2 text-white"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
