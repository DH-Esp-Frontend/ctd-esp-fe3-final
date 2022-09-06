import type { NextApiRequest, NextApiResponse } from 'next';
import {CheckoutInput} from "dh-marvel/features/checkout/checkout.types";
import {
    ERROR_CARD_DATA_INCORRECT,
    ERROR_CARD_WITHOUT_AUTHORIZATION,
    ERROR_CARD_WITHOUT_FUNDS,
    ERROR_INCORRECT_ADDRESS,
    ERROR_METHOD_NOT_ALLOWED,
    ERROR_SERVER
} from "dh-marvel/services/checkout/checkout.errors";

const serverError = 'error'
const invalidAddress = 'invalid'
const validCard = '4242 4242 4242 4242'.replace(" ", "");
const withoutFundsCard = '4111 4111 4111 4111'.replace(" ", "");
const withoutAuthorizationCard = '4000 4000 4000 4000'.replace(" ", "");

type Data = {
    data: any;
} | {
    error: string;
    message: string;
}



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method !== "POST"){
        res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
        return;
    }
    const body:CheckoutInput = JSON.parse(req.body);
    if (body.customer.address.address2 === invalidAddress){
        res.status(400).json( ERROR_INCORRECT_ADDRESS);
        return
    }
    if (body.customer.address.address2 === serverError){
        res.status(500).json( ERROR_SERVER);
        return
    }
    if (body.card.number === withoutFundsCard){
        res.status(400).json( ERROR_CARD_WITHOUT_FUNDS);
        return
    }
    if (body.card.number === withoutAuthorizationCard){
        res.status(400).json( ERROR_CARD_WITHOUT_AUTHORIZATION);
        return
    }
    if (body.card.number === validCard){
        res.status(200).json( {data: body.order});
        return
    }
    res.status(400).json( ERROR_CARD_DATA_INCORRECT);

}