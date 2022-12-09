import { useState, createContext, useEffect } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => {
      return [...prev, item];
    });
  }

  console.log(cartItems);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPhotos(data);
      });
  }, []);

  function toggleFavorite(id) {
    setAllPhotos((prev) =>
      prev.map((photo) => {
        return photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo;
      })
    );
  }

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
