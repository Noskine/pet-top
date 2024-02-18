import Category from "../models/Category/Category";

export async function CategoryRender() {
    return await Category.findAll()
}