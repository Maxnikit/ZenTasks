"use client";
import NavLink from "@/components/webapp/NavLinks/NavLink/NavLink";
import { IconCalendar, IconCheck, IconStack } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addList } from "@/lib/features/todos/todosSlice";
import { useState } from "react";
import AddListModal from "@/components/webapp/AddListModal/AddListModal";

const links = [
  { linkName: "All", linkIcon: <IconStack /> },
  { linkName: "Today", linkIcon: <IconCalendar /> },
  { linkName: "Upcoming", linkIcon: <IconCalendar /> },
  { linkName: "Completed", linkIcon: <IconCheck /> },
];
export default function NavLinks() {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
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

  const handleAddList = (name: string) => {
    dispatch(addList(name));
  };
  console.log(isModalOpen);
  return (
    <>
      <div className="flex flex-col items-start gap-1">
        {linksList}
        <h5>
          Lists{" "}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="rounded bg-green-600 px-6"
          >
            Add list
          </button>
        </h5>
        {listsLinks}
      </div>
      <AddListModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleAddList}
      />
    </>
  );
}
