import React from 'react';
import Image from 'next/image';
import Logo from './Logo.png';

export default function ZenTasksLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image src={Logo} width={44} height={44} alt="ZenTasks" />

      <p className="text-[44px] text-teal-500">ZenTasks</p>
    </div>
  );
}
