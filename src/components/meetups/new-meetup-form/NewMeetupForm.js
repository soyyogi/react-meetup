import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useMeetups } from "@services/store/MeetupsContext";
import { Card } from "@components/ui";
import classes from "./NewMeetupForm.module.css";
import { ROUTES } from "@services/routing";

export default function NewMeetupForm() {
  const { addMeetup } = useMeetups();
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    const form = event.target;

    const newMeetup = {
      id: Math.random().toString(),
      title: form.title.value,
      image: form.image.value,
      address: form.address.value,
      description: form.description.value,
    };

    addMeetup(newMeetup);
    form.reset();
    toast.success("New meetup added successfully!", {
      position: "top-right",
    });
    history.push(ROUTES.HOME);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
