import React from 'react';
import ClientOnly from '../components/client-only';
import EmptyState from '../components/empty-state';
import getFavoriteListings from '../actions/getFavoriteListings';
import getCurrentUser from '../actions/getCurrentUser';
import FavoritesClient from './favorites-client';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No Favorites found'
          subtitle='Looks like you have no favorite listing'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
