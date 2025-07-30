import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthConnect } from '../../../Authinction/Signup/Authinction/Authinction';
 

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthConnect); // email ব্যবহার করার জন্য
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch wishlist from backend
  const fetchWishlist = () => {
    if (user?.email) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/wishlist?email=${user.email}`)
        .then((res) => {
          setWishlist(res.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching wishlist:', err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  // ✅ Add to wishlist (backend & context)
  const addToWishlist = (item) => {
    axios.post('http://localhost:5000/wishlist', item)
      .then((res) => {
        if (res.data.insertedId) {
          fetchWishlist(); // ✅ Re-fetch
        }
      })
      .catch((err) => console.error('Error adding to wishlist:', err));
  };

  // ✅ Remove from wishlist (backend & context)
  const removeFromWishlist = (id) => {
  axios.delete(`http://localhost:5000/wishlist/${id}`)
    .then((res) => {
      if (res.data.deletedCount > 0) {
        // Locally remove item from wishlist state immediately
        setWishlist(prevWishlist => prevWishlist.filter(item => item._id !== id));

        // Optional: re-fetch if you want to be sure with backend state
        // fetchWishlist();
      }
    })
    .catch((err) => console.error('Error removing wishlist item:', err));
};


  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, loading }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
