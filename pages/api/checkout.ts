import type { NextApiRequest, NextApiResponse } from 'next';
import {CheckoutInput} from "../../features/checkout/checkout.types";

const validCard = '4242 4242 4242 4242'.replace(" ", "");

type Data = {
    data: any;
} | {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method !== "POST"){
        res.status(405).json({ error: "Method not allowed" });
        return;
    }
    const body:CheckoutInput = JSON.parse(req.body);
    if (body.card.number === validCard){
        res.status(200).json( {data: {}});
        return
    }
    res.status(400).json( {error: "Invalid card"});

}