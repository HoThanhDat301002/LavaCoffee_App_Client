export interface Product {
    _id: string 
    name: string
    price: number
    description: string 
    category_id: string 
    image: image[]
    released: Date,
    }


export interface image {
    id: number 
    thumbnail: string
}

        