import { VenueModel } from './venue-model';
import { PerformerModel } from './performer-model';
import { PriceModel } from './price-model';

export class EventModel {
  Id: number;
  Title: string;
  Date: string;
  EventUrl: string;
  Venue: VenueModel;
  Performers: PerformerModel[];
  Prices: PriceModel[];
}
