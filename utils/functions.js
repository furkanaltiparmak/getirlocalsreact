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
        brands[company.name] = {
          slug: company.slug,
          count: (brands[company.name]?.count || 0) + 1,
        };
      }
    });
  });

  return brands;
};

export const getRequestString = (filters) => {
  var string = "?_limit=16&";
  Object.keys(filters).map((filter) => {
    if (filters[filter] != "") {
      switch (filter) {
        case "sort":
          string += `${
            filters.sort.key != "" ? `_sort=${filters.sort.key}` : ""
          }${
            filters.sort.sortBy != "" ? `&_order=${filters.sort.sortBy}` : ""
          }&`;
          break;
        case "brand":
          string += `manufacturer=${filters[filter]}&`;
          break;
        case "tags":
          string += `tags_like=${filters[filter]}&`;
          break;
        case "page":
          string += `_page=${filters[filter]}&`;
          break;
        case "type":
          string += `itemType=${filters[filter]}&`;
          break;

        default:
          break;
      }
    }
  });
  return string;
};

export const filterBySearch = (data, key) => {
  if (key == null) {
    return data;
  }
  const filtered = Object.keys(data).filter((el) =>
    el.toLowerCase().includes(key.toLowerCase())
  );

  const obj = {};

  Object.keys(data).map((filter) => {
    filtered.map((x) => {
      if (x === filter) {
        obj[filter] = data[filter];
      }
    });
  });

  return obj;
};
