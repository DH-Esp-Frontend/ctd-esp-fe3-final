import {generateAuthenticationString} from "dh-marvel/services/marvel/marvel-auth.service";

const MARVEL_API_URL = process.env.MARVEL_API_URL;

const fetchApi = async (endpoint: string, urlParams?: string) => {
    const authString = generateAuthenticationString();
    const url = `${MARVEL_API_URL}/${endpoint}?${authString}&${urlParams || ''}`
    const response = await fetch(url);
    return await response.json();
}

export const getComics = async (offset?: number, limit?: number) => {
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);
    return fetchApi("comics", params.toString());
}

export const getComic = async (comicId: number) => {
    const data = await fetchApi(`comics/${comicId}`);
    const results = data.data.results;
    if (results.length > 0) {
        const comic = results[0];
        if (`${comic.id}`.endsWith('0')) {
            comic.price = 48;
            comic.oldPrice = 48;
            comic.stock = 0;
        } else {
            comic.price = 72;
            comic.oldPrice = 87;
            comic.stock = 2;
        }
        return comic;
    } else return null;
}

export const getCharacter = async (characterId: number) => {
    const data = await fetchApi(`characters/${characterId}`);
    const results = data.data.results;
    if (results.length > 0) return results[0];
    else return null;
}