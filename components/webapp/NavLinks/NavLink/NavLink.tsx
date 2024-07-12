import React from 'react';

type Props = { linkName: string; linkIcon: React.ReactNode };

export default function NavLink({ linkName, linkIcon }: Props) {
  return (
    <button
      type="button"
      className=" flex flex-row p-2 gap-1 items-center border w-full text-left hover:bg-teal-900"
    >
      <i className="text-gray-500">{linkIcon}</i>
      <p>{linkName}</p>
    </button>
  );
}
