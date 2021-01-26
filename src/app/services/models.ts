export interface Booking{
    booking_id: number;
    client_name: string;
    bus_name: string;
}

export interface Bus{
    bus_id: number;
    bus_name: string;
    status: boolean;
    price: number;
    payment: string;
    img_url: string;
}
 export interface Driver{
     firstname: string;
     lastname: string;
     address: string;
     contact_number: number;
     license: string;
 }

 export interface UserProfile{
     firstname: string;
     lastname: string;
     contact_number: number;
    email_address: string;
 }