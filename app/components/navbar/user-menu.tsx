'use client';
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../avatar';
import MenuItem from './menu-item';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut, useSession } from 'next-auth/react';
import { User } from '@prisma/client';
import useRentModal from '@/app/hooks/useRentModal';

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    //open rent model
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={onRent}
          className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <>
              {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label='My Trips' />
                  <MenuItem onClick={() => {}} label='My Favorites' />
                  <MenuItem onClick={() => {}} label='My Reservations' />
                  <MenuItem onClick={() => {}} label='My Properties' />
                  <MenuItem onClick={rentModal.onOpen} label='Airbnb my home' />
                  <hr />
                  <MenuItem onClick={() => signOut()} label='log out' />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label='Login' />
                  <MenuItem onClick={registerModal.onOpen} label='Sign up' />
                </>
              )}
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;