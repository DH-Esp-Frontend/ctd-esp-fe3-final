import md5 from "md5";

export const generateAuthenticationString = () => {
    const ts = new Date().getTime();
    const hash = md5(`${ts}${process.env.MARVEL_API_PRIVATE_KEY}${process.env.MARVEL_API_PUBLIC_KEY}`)
    return `ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}`
}
