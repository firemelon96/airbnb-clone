import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import ClientOnly from './components/client-only';
import Modal from './components/modals/modal';
import RegisterModal from './components/modals/register-modal';
import ToastProvider from './providers/toast-provider';
import LoginModal from './components/modals/login-modal';
import RentModal from './components/modals/rent-modal';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/search-modal';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb clone',
  description: 'Clone of airbnb',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
