import { Request, Response } from 'express';

import * as FakeListingService from '../data';
import { Listing } from '../types';

const listings = {
  route: '/listings/:pageNumber',
  handler: (req: Request<{ pageNumber: string }>, res: Response<Listing[]>) => {
    try {
      const listings = FakeListingService.getListings(
        Number(req.params.pageNumber),
      );
      return res.status(200).send(listings);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};

const mappedListings = {
  route: '/mappedListings/:pageNumber',
  handler: (
    req: Request<{ pageNumber: string }>,
    res: Response<{ [index: string]: Listing }>,
  ) => {
    try {
      const listings = FakeListingService.getListings(20);
      const mappedListings: Record<string, Listing> = {};
      listings.forEach((listing) => (mappedListings[listing.id] = listing));
      return res.status(200).send(mappedListings);
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};

export { listings, mappedListings };
