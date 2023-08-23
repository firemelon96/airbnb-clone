import { Listing, User } from '@prisma/client';
import Container from '../components/container';
import Heading from '../components/heading';
import ListingCard from '../components/listings/listing-card';

interface FavoritesClientProps {
  listings: Listing[];
  currentUser: User | null;
}

const FavoritesClient = ({ listings, currentUser }: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title='Favorites' subtitle='List of places you have favorited' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8'>
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
