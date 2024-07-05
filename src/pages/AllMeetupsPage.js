import { useEffect } from "react";
import { MeetupItem } from "@components/meetups";
import { useMeetups } from "@services/store/MeetupsContext";
import { useFetch } from "../util-hooks/useFetch";
import classes from "@components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { meetups, addMeetup } = useMeetups();
  const { data } = useFetch({ url: "/data.json" });

  useEffect(() => {
    if (data && meetups.length === 0) {
      data.forEach((meetup) => addMeetup(meetup));
    }
  }, [data, meetups, addMeetup]);

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups &&
          meetups.map((meetup) => <MeetupItem key={meetup.id} item={meetup} />)}
      </ul>
    </section>
  );
}
