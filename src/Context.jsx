import { useState, createContext, useEffect } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function changeCart(item) {
    if (cartItems.some((img) => item.id === img.id)) {
      setCartItems((prev) => {
        return prev.filter((img) => img.id !== item.id);
      });
    } else {
      setCartItems((prev) => {
        return [...prev, item];
      });
    }
  }

  // function removeFromCart(id) {
  //   setCartItems((prev) => {
  //     return prev.filter((item) => item.id !== id);
  //   });
  // }

  // console.log(cartItems);

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
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        changeCart,
        cartItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
