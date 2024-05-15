import css from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.list}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>

      <p className={css.item}>
        {isOnline ? (
          <span className={css.statusOnline}>Online</span>
        ) : (
          <span className={css.statusOffline}>Offline</span>
        )}
      </p>
    </li>
  );
};
export default FriendListItem;
