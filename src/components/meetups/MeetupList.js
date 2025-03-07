import MeetupItem from "./MeetupItem";
import styles from "./MeetupList.module.css";

function MeetupList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem meetup={meetup} key={meetup.id} />
      ))}
    </ul>
  );
}

export default MeetupList;
