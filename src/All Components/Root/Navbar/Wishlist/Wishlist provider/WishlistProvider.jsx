import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthConnect } from '../../../Authinction/Signup/Authinction/Authinction';

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthConnect);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = () => {
    if (!user?.email) {
      setWishlist([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    axios.get(`http://localhost:5000/wishlist?email=${user.email}`)
      .then(res => {
        setWishlist(res.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching wishlist:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const addToWishlist = (item) => {
    setLoading(true);
    axios.post('http://localhost:5000/wishlist', item)
      .then(res => {
        if (res.data.insertedId) {
          fetchWishlist();
        } else {
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Error adding to wishlist:', err);
        setLoading(false);
      });
  };

  const removeFromWishlist = (id) => {
    setLoading(true);
    axios.delete(`http://localhost:5000/wishlist/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          setWishlist(prev => prev.filter(item => item._id !== id));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error removing wishlist item:', err);
        setLoading(false);
      });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, loading }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
