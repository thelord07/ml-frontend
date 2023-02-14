import { getAllProducts, getSearchProduct, getProductById } from '../../src/api/productsApi';


describe('debe devolver los productos segun el caso ', () => {

    it('Carga de productos iniciales',async () => {
        const { items } = await getAllProducts();
        expect(items.length).toBeGreaterThan(0)
        expect(items[0]).toEqual({
            id:            expect.any(String),
            title:         expect.any(String),
            price:         expect.any(Object),
            picture:       expect.any(String),
            condition:     expect.any(String),
            free_shipping: expect.any(Boolean)
        })
    })

    it('Carga de productos por query',async () => {
        const { items, author } = await getSearchProduct('iphone');
        expect(items.length).toBeGreaterThan(0)
        expect(items[0]).toEqual({
            id:            expect.any(String),
            title:         expect.any(String),
            price:         expect.any(Object),
            picture:       expect.any(String),
            condition:     expect.any(String),
            free_shipping: expect.any(Boolean)
        })
        expect(author).toEqual({
            name:     "Joys",
            lastname: "Florez"
        })
    })

    it('Carga detalle de producto por ID',async () => {
        const  {item, author}  = await getProductById('MLA916213875');
        expect(item).toEqual({
            id:            expect.any(String),
            title:         expect.any(String),
            price:         expect.any(Object),
            picture:       expect.any(String),
            condition:     expect.any(String),
            free_shipping: expect.any(Boolean),
            sold_quantity: expect.any(Number),
            description:   expect.any(String),
        })
        expect(author).toEqual({
            name:     "Joys",
            lastname: "Florez"
        })
    })

  
})
