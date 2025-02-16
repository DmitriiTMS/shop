export interface IProduct {
    id: number,
    brand: string,
    category: string,
    title: string,
    price: number,
    imgUrl: string,
    rating: number
}

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        brand: "Домочай",
        category: "хлеб",
        title: "Хлеб 'Боровой' с семечками",
        price: 20,
        imgUrl: "https://domochay.by/wp-content/uploads/2022/09/borovoj-s-semechkami-min.jpg",
        rating: 4
    },

    {
        id: 2,
        brand: "Домочай",
        category: "хлеб",
        title: "Хлеб 'Бересневский' с тмином",
        price: 30,
        imgUrl: "https://domochay.by/wp-content/uploads/2022/09/hleb-berestnevskij-s-tminom-min.jpg",
        rating: 5
    },
    {
        id: 3,
        brand: "Домочай",
        category: "хлеб",
        title: "Хлеб 'Дивный'",
        price: 50,
        imgUrl: "https://domochay.by/wp-content/uploads/2022/09/hleb-divnyj-min.jpg",
        rating: 4
    },
    {
        id: 4,
        brand: "Домочай",
        category: "пирожное",
        title: "Пирожное 'Картошка' обсыпное",
        price: 20,
        imgUrl: "https://domochay.by/wp-content/uploads/2022/10/kartoshka-obsypnoe-min.jpg",
        rating: 5
    },
    {
        id: 5,
        brand: "Домочай",
        category: "пирожное",
        title: "Пирожное 'Корзиночка белковая'",
        price: 20,
        imgUrl: "https://domochay.by/wp-content/uploads/2022/10/korzinochka-belkovaya-min.jpg",
        rating: 3
    },

    {
        id: 6,
        brand: "Знатны пачастунак",
        category: "хлеб",
        title: "Хлеб 'Майский' светлый",
        price: 20,
        imgUrl: "https://www.minskhleb.by/upload/resize_cache/iblock/47f/500_340_140cd750bba9870f18aada2478b24840a/pm1ot0bu5jp5p44y34byrvj0rlinw618.png",
        rating: 4
    },

    {
        id: 7,
        brand: "Знатны пачастунак",
        category: "хлеб",
        title: "Хлеб 'Легенда'",
        price: 20,
        imgUrl: "https://www.minskhleb.by/upload/resize_cache/iblock/596/500_340_140cd750bba9870f18aada2478b24840a/o0n8w5o8lvtutypihhg7x3fk1wrocgcl.png",
        rating: 5
    },

    {
        id: 8,
        brand: "Знатны пачастунак",
        category: "пирожное",
        title: "ПИРОЖНОЕ ТВОРОЖНОЕ НЕЖНОСТЬ",
        price: 50,
        imgUrl: "https://www.minskhleb.by/upload/resize_cache/iblock/b80/500_340_140cd750bba9870f18aada2478b24840a/b801f88d833bfdf6e2766d4ab7782475.jpg",
        rating: 3
    },


    {
        id: 9,
        brand: "Знатны пачастунак",
        category: "пирожное",
        title: "Набор пирожных 'Mini'",
        price: 40,
        imgUrl: "https://www.minskhleb.by/upload/resize_cache/iblock/8f3/500_340_140cd750bba9870f18aada2478b24840a/8f3d72d021ae2933b35f29aabfc652e6.png",
        rating: 5
    },
]