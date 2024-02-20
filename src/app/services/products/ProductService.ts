import Product from "../../models/Product/Product";

interface RequestDataCreateProduct {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

class ProductService {
  public async executeCreate(data: RequestDataCreateProduct) {
    await Product.create({
      CategoryId: data.category,
      Name: data.name,
      Description: data.description,
      Photo: data.image,
      Price: data.price,
    });
  }

  public async executeRender() {
    const product = await Product.findAll();

    if (product instanceof Error || product == null) {
      return {
        Id: "",
        Name: "",
        CategoryId: "",
        Description: "",
        Photo: "",
        Price: 0.0,
        Category: {
          Name: "",
        },
      };
    }

    return product;
  }
}

export default new ProductService();
