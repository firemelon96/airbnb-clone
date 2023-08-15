'use client';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  outlined,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outlined ? 'bg-white' : 'bg-rose-500'
      } ${outlined ? 'border-black' : 'border-rose-500'} ${
        outlined ? 'text-black' : 'text-white'
      } ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${
        small ? 'font-light' : 'font-semibold'
      } ${small ? 'border-[1px]' : 'border-2'}`}
    >
      {Icon && <Icon size={24} className='absolute left-4 top-3' />}
      {label}
    </button>
  );
};

export default Button;
