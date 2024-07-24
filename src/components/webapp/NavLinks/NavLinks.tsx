"use client";
import NavLink from "@/components/webapp/NavLinks/NavLink/NavLink";
import { IconCalendar, IconCheck, IconStack } from "@tabler/icons-react";
import { useAppSelector } from "@/lib/hooks";

const links = [
  { linkName: "All", linkIcon: <IconStack /> },
  { linkName: "Today", linkIcon: <IconCalendar /> },
  { linkName: "Upcoming", linkIcon: <IconCalendar /> },
  { linkName: "Completed", linkIcon: <IconCheck /> },
];
export default function NavLinks() {
  const linksList = links.map((link) => (
    <NavLink
      key={link.linkName}
      linkName={link.linkName}
      linkIcon={link.linkIcon}
      href={`/webapp/list/${link.linkName}`}
    />
  ));

  const lists = useAppSelector((state) => state.todos.lists);
  const listsLinks = lists.map((list) => (
    <NavLink
      key={list.id}
      linkName={list.name}
      linkIcon={<IconStack />}
      href={`/webapp/list/${list.id}`}
    />
  ));
  return (
    <>
      <div className="flex flex-col items-start gap-1">
        {linksList}
        <h5>Lists</h5>
        {listsLinks}
      </div>
    </>
  );
}
