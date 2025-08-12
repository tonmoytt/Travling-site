import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthConnect } from "../../../Authinction/Signup/Authinction/Authinction";
import Swal from "sweetalert2";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthConnect);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch wishlist
  const fetchWishlist = () => {
    if (!user?.email) {
      setWishlist([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    axios
      .get(`https://travling-server-site.vercel.app/wishlist?email=${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setWishlist(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching wishlist:", err);
        setWishlist([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  // add to wishlist (UI instant update)
  

const addToWishlist = (item) => {
  setLoading(true);
  axios.post("https://travling-server-site.vercel.app/wishlist", item, { withCredentials: true })
    .then((res) => {
      if (res.data.insertedId) {
        setWishlist((prev) => [...prev, { ...item, _id: res.data.insertedId }]);
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: 'Item added to your wishlist.',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    })
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        Swal.fire({
          icon: 'warning',
          title: 'Already Added',
          text: 'This item is already in your wishlist.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
        });
      }
      console.error("Error adding to wishlist:", err);
    })
    .finally(() => {
      setLoading(false);
    });
};

  // remove from wishlist (UI instant update)
  const removeFromWishlist = (id) => {
    setLoading(true);
    axios
      .delete(`https://travling-server-site.vercel.app/wishlist/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.deletedCount > 0) {
          setWishlist((prev) => prev.filter((item) => item._id !== id));
        }
      })
      .catch((err) => {
        console.error("Error removing wishlist item:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, loading }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
