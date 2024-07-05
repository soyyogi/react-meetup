import { useState, createContext, useContext, useEffect } from "react";

const MeetupsContext = createContext();

export function useMeetups() {
  return useContext(MeetupsContext);
}

export function MeetupsProvider({ children }) {
  const [meetups, setMeetups] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedMeetups = localStorage.getItem('meetups');
    if (storedMeetups) {
      setMeetups(JSON.parse(storedMeetups));
    }

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('meetups', JSON.stringify(meetups));
  }, [meetups]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addMeetup = (meetup) => {
    setMeetups((prevMeetups) => [...prevMeetups, meetup]);
  };

  const toggleFavorite = (meetupId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(meetupId)) {
        return prevFavorites.filter((id) => id !== meetupId);
      } else {
        return [...prevFavorites, meetupId];
      }
    });
  };

  return (
    <MeetupsContext.Provider
      value={{ meetups, favorites, addMeetup, toggleFavorite }}
    >
      {children}
    </MeetupsContext.Provider>
  );
}
