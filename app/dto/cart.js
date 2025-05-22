export class CartDTO {
    id;
    title;
    price;
    quantity;
    image;

    constructor(model) {
        this.id = model.id
        this.quantity = model.quantity
        this.price = model.product?.price
        this.title = model.product?.title
        this.image = model.product?.image
    }
}