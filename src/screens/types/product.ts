export interface Product {
    id: number 
    name: string
    price: number
    describe: string
    thumbnail: string
    productGalleries: BookGallery[]
    size: Size[]
    }


export interface BookGallery {
    id: number 
    thumbnail: string
}

export interface Size {
    id: number 
    title: string
    price: number
}
        