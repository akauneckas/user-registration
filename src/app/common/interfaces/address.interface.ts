import { Coordinates } from './coordinates.interface';

export interface Address {
    town: string;
    houseNumber: string;
    street: string;
    zipcode: string;
    coordinates: Coordinates;
}