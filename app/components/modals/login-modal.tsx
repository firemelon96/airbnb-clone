'use client';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import Modal from './modal';
import Heading from '../heading';
import Input from '../inputs/input';
import Button from '../button';

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(false);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome back' subtitle='Login to your account' />
      <Input
        id='email'
        label='Email'
        errors={errors}
        register={register}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        errors={errors}
        register={register}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outlined
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outlined
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className='text-neutral-500 text-center mt-4 font-light'>
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>First time using Airbnb?</div>
          <div
            onClick={toggle}
            className='text-neutral-800 cursor-pointer hover:underline'
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
