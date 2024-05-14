export interface Menu{
    id: number;
    nombre:string;
    precio: number
}

export const menues = [
    {
        id: 1,
        nombre: 'Hamburguesa sencilla, papás y gaseosa',
        precio: 25000
    },
    {
        id: 2,
        nombre: '2 Hamburguesa doble y Gaseosa',
        precio: 35000
    },
    {
        id: 3,
        nombre: '3 Hamburguesa doble, 2 perros y gaseosa con papitas',
        precio: 50000
    }
];
