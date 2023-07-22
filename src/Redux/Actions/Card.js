export const addBasketToCard = (id, quantity) => async (dispatch, getState) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json());
  dispatch({
    type: "ADD_CARD",
    payload: {
      id: data.id,
      image: data.image,
      title: data.title,
      description: data.description,
      price: data.price,
      qty: quantity
    }
  });

  const cardItems = getState().card.cardItems; // Buradaki düzeltme, cardItems'a doğrudan erişmek için getState().card.cardItems şeklinde yapılır.
  localStorage.setItem('cardItems', JSON.stringify(cardItems));
};

export const removeCard = (productId) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CARD",
    payload: productId
  });

  const cardItems = getState().card.cardItems; // Buradaki düzeltme, cardItems'a doğrudan erişmek için getState().card.cardItems şeklinde yapılır.
  localStorage.setItem('cardItems', JSON.stringify(cardItems));
};
