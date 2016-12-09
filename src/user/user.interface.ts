import { Address } from '../common/interfaces/address.interface'

export interface User {
    id: string;
    name: string; // required with minimum 5 chracters
    surname: string;
    email: string;
    address: Address;
}
