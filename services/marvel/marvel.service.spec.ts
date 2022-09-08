import {getCharacter, getComic, getComics} from "dh-marvel/services/marvel/marvel.service";
import comics from "dh-marvel/test/mocks/comics";
import character from "dh-marvel/test/mocks/character";
import comic from "dh-marvel/test/mocks/comic";
import comicsWithOffsetAndLimit from "dh-marvel/test/mocks/comicsWithOffsetAndLimit";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";

describe('MarvelService', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    describe('when fetching comics', () => {
        describe('when fetching without offset and limit', () => {
            it('should return a valid default page of comics', async () => {
                const data = await getComics();
                expect(data).toStrictEqual(comics)
            })
        })
        describe('when fetching with offset and limit ', () => {
            it('should return a valid limited page of comics', async () => {
                const data = await getComics(10, 5);
                expect(data).toStrictEqual(comicsWithOffsetAndLimit)
            })
        })
    })
    describe('when fetching comic', () => {
        describe('when comic is found', () => {
            it('should return a valid comic', async () => {
                const data = await getComic(1);
                expect(data).toStrictEqual({
                    ...comic,
                    price: 72,
                    oldPrice: 87,
                    stock: 2
                })
            })
        })
        describe('when comic is found with id that ends with 0', () => {
            it('should return a valid comic without stock', async () => {
                const data = await getComic(10);
                expect(data).toStrictEqual({
                    ...comicWithoutStock,
                    price: 48,
                    oldPrice: 48,
                    stock: 0
                })
            })
        })
        describe('when comic not found', () => {
            it('should return a null response', async () => {
                const data = await getComic(99);
                expect(data).toBeNull()
            })
        })
    })
    describe('when fetching character', () => {
        describe('when character is found', () => {
            it('should return a valid character', async () => {
                const data = await getCharacter(1);
                expect(data).toStrictEqual(character)
            })
        })
        describe('when character not found', () => {
            it('should return a null response', async () => {
                const data = await getCharacter(99);
                expect(data).toBeNull()
            })
        })
    })
})