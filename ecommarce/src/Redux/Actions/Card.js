

export const addBasketToCard = (id, quantity) => async (dispatch,getState) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`).then(
    res => res.json()
  );
  dispatch({
    type: "ADD_CARD",
    payload: {
      id: data.id,
      images: data.images,
      title: data.title,
      description: data.description,
      price: data.price,
      stock : data.stock,
      category : data.category,
      qty: quantity,
    },
  });

  const {card : {cardItems}} = getState();
  localStorage.setItem('cardItems',JSON.stringify(cardItems))
};

export const removeCard = (productId) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CARD",
    payload: productId,
  });

  const {card : {cardItems}} = getState();
  localStorage.setItem('cardItems',JSON.stringify(cardItems));
}
