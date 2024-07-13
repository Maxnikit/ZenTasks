import NavLink from '@/components/webapp/NavLinks/NavLink/NavLink';
import { IconCalendar, IconCheck, IconStack } from '@tabler/icons-react';
import Link from 'next/link';

const links = [
  { linkName: 'All', linkIcon: <IconStack /> },
  { linkName: 'Today', linkIcon: <IconCalendar /> },
  { linkName: 'Upcoming', linkIcon: <IconCalendar /> },
  { linkName: 'Completed', linkIcon: <IconCheck /> },
];
export default function NavLinks() {
  const linksList = links.map((link) => (
    <NavLink key={link.linkName} linkName={link.linkName} linkIcon={link.linkIcon} />
  ));
  return (
    <>
      <div className="flex flex-col items-start gap-1">{linksList}</div>
      <div>
        <h5>Lists</h5>
      </div>
    </>
  );
}
