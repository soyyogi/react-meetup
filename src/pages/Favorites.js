import { MeetupItem } from "@components/meetups";
import { useMeetups } from "@services/store/MeetupsContext";
import classes from "@components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const { meetups, favorites } = useMeetups();
  const favoriteMeetups = meetups.filter((meetup) =>
    favorites.includes(meetup.id)
  );

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        {favoriteMeetups.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favoriteMeetups.map((meetup) => (
            <MeetupItem key={meetup.id} item={meetup} />
          ))
        )}
      </ul>
    </section>
  );
}
