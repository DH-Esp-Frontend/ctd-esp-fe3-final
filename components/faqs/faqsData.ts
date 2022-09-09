export type FaqsType = {
    id: number,
    question: string,
    answer: string,
}

export const faqsData: FaqsType[] = [
    {
        "id": 1,
        "question": "¿Cuántos comics tienen?",
        "answer": "Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com"
    },
    {
        "id": 2,
        "question": "¿Se puede reservar nuevos lanzamientos?",
        "answer": "Lamentablemente nuestro sitio todavía no acepta reservas anticipadas. Pero nos encontramos trabajando en esa funcionalidad. Seguí nuestro twitter para estar al tanto de las ultimas novedades."
    },
    {
        "id": 3,
        "question": "¿Cuanto demoran las entregas?",
        "answer": "Todas nuestras entregas son enviadas a través de DH-Express, que alcanza a todo el país en 24hs."
    },
    {
        "id": 4,
        "question": "¿Qué métodos de pago están disponibles?",
        "answer": "Solo se aceptan tarjetas de crédito Visa y Mastercard. De momento no aceptamos pagos en efectivo u otros medios."
    },
    {
        "id": 5,
        "question": "¿Se aceptan devoluciones?",
        "answer": "Nuestras compras aceptan devoluciones siempre y cuando el comic se encuentre en su envoltorio original, ya que de otra forma pierden el valor de reventa. Si desea devolverlo y se encuentra en las mismas condiciones en las que fue enviado, comuníquese con el 11-5555-0001 para resolver la devolución."
    }
]