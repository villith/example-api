import express from 'express';
import { ListingController } from './controllers';

const app = express();

app.get(ListingController.listings.route, ListingController.listings.handler);
app.get(
  ListingController.mappedListings.route,
  ListingController.mappedListings.handler,
);
