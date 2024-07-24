import Link from "next/link";
import React from "react";

type Props = { linkName: string; linkIcon: React.ReactNode; href: string };

export default function NavLink({ linkName, linkIcon, href }: Props) {
  return (
    <Link
      href={href}
      className="flex w-full flex-row items-center gap-1 border p-2 text-left hover:bg-teal-900"
    >
      <i className="text-gray-500">{linkIcon}</i>
      <p>{linkName}</p>
    </Link>
  );
}
