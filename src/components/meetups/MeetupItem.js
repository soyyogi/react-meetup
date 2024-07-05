import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useMeetups } from "../../services/store/MeetupsContext";

export default function MeetupItem({ item }) {
  const { favorites, toggleFavorite } = useMeetups();
  const isFavorite = favorites.includes(item.id);

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => toggleFavorite(item.id)}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
