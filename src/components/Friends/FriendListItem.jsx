import css from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.list}>
      <li>
        <img className={css.avatatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
      <li className={css.item}>
        {isOnline ? (
          <span className={css.statusOnline}>online</span>
        ) : (
          <span className={css.statusOffline}>offline</span>
        )}
      </li>
    </div>
  );
};
export default FriendListItem;
