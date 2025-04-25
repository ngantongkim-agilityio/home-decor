export const formatProducts = (products: any) =>
  products.map((product: any) => ({
    id: product.id,
    images: product.images,
    title: product.title,
    description: product.description,
    price: {
      amount: product.list_price.amount,
      formatted: product.list_price.formatted,
    },
    categoryId: product.category_id[0],
  }));

export const getProductList = (pages?: any[]) => {
  let products: any = [];
  pages?.map(({ data }) => {
    const { listings } = data || {};
    products = products.concat(listings);
  });
  return products;
};
