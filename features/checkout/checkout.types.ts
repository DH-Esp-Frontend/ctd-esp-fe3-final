export type CheckoutInput = {
    customer: {
        name: string,
        lastname: string,
        email: string
        address: {
            address1: string,
            address2: string | null,
            city: string,
            state: string,
            zipCode: string
        }
    },
    card: {
        number: string,
        cvc: string,
        expDate: string,
        nameOnCard: string
    },
    order: {
        name: string;
        image: string;
        price: number;
    }
}