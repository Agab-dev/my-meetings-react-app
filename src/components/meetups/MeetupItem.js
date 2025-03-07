import styles from "./MeetupList.module.css";

function MeetupItem({ meetup }) {
  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={meetup.image} alt={meetup.title} />
      </div>
      <div className={styles.content}>
        <h3>{meetup.title}</h3>
        <address>{meetup.address}</address>
        <p>{meetup.description}</p>
      </div>
      <div className={styles.actions}>
        <button>Add to Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
