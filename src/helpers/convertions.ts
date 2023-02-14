
export const convertToCurrency = (price: number) => {
    return new Intl.NumberFormat('es-AR').format(price)
}