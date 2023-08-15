'use client';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  // const { data: session } = useSession();
  return (
    <Image
      className='rounded-full'
      alt='avatar'
      src={`${src ? src : '/images/placeholder.png'}`}
      width='30'
      height='30'
    />
  );
};

export default Avatar;
