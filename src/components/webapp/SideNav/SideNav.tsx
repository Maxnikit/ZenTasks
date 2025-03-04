import Link from 'next/link';
import ZenTasksLogo from '@/components/ZenTasksLogo/ZenTasksLogo';
import NavLinks from '@/components/webapp/NavLinks/NavLinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col  px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-20 items-start justify-start rounded-md  p-4 " href="/">
        <div className="w-32 text-white md:w-40">
          <ZenTasksLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
