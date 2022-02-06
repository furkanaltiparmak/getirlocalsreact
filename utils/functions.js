export const getTags = (products) => {
  const allTags = [];

  products.map((product) => {
    product.tags.map((tag) => allTags.push(tag));
  });
  const tags = {};
  allTags.forEach(function (tag) {
    tags[tag] = (tags[tag] || 0) + 1;
  });

  return tags;
};

export const getTypes = (products) => {
  const typesList = [];
  products.map((product) => typesList.push(product.itemType));

  const types = [...new Set(typesList)];

  return types;
};

export const getBrands = (products, companies) => {
  const brands = {};

  companies.map((company) => {
    products.forEach((product) => {
      if (product.manufacturer === company.slug) {
        brands[company.name] = (brands[company.name] || 0) + 1;
      }
    });
  });

  return brands;
};
