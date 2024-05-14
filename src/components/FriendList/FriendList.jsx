import { FriendListItem } from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={FriendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;
