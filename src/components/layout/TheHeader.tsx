'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useMenu } from '../context/MenuContext';


const TheHeader = () => {
  const router = useRouter();
  const { toggleMenu } = useMenu();

  const openMenu = (event: React.MouseEvent) => {
    event.stopPropagation(); // prevent bubbling
    toggleMenu();
  };

  return (
    <div className="bg-[#1447e6] text-white">
      <div
        onClick={() => router.push('/')}
        className="flex justify-between items-center h-[60px] px-[3%] cursor-pointer"
      >
        <div
          onClick={openMenu}
          className="w-[30px] h-[30px] bg-[url('/images/home/icon-L.webp')] bg-cover"
        />
        <Image
          src="/images/common/logo.webp"
          alt="logo"
          width={120}
          height={36}
          className="h-[36px] w-auto"
        />
        <div className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
};

export default TheHeader;
