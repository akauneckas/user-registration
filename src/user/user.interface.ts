export interface User {
    id: string;
    name: string; // required with minimum 5 chracters
    surname: string;
    email: string;
    address: {
        town: string;
        houseNumber: string;
        street: string;
        zipcode: string;
    }
}