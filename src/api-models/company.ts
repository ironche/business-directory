export interface Company {
  id: string;
  name: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  address : {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
  };
}
