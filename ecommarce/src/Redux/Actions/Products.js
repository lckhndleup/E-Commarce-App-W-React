




export const productsAction = () => async (dispatch) => {
  const data = await fetch("https://dummyjson.com/products?&limit=100").then((res) =>
    res.json()
  );

  dispatch({ type: "GET_PRODUCTS", payload: data });
};


export const productsActionDetail = (id) => async (dispatch) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`)
  .then(res=>res.json())

  dispatch({type : "GET_DETAILS", payload : data});
};

