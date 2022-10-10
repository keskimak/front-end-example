const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;

const fetchCategories = async () => {
    const resp = await fetch(`${baseUrl}/category/all`);
    const data = await resp.json();
    return data;
};
const fetchOneCategoryById = async (categoryId) => {

    const request = new Request(`${baseUrl}/category/${categoryId}`, {
        method: 'GET',
    });
    const resp = await fetch(request);
    //method here also (get) for to do the post easier later
    const data = await resp.json();
    const category = data && data.length > 0 && data[0] != null;
    return category;
};


const dao = {
    fetchCategories,  fetchOneCategoryById }

export default dao;
