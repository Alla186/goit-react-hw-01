import Profile from "./Profile/Profile";
import userData from "./Profile/userData.json";

import FriendList from "./Friends/FriendsList";
import friends from "./Friends/friends.json";

import transactions from "./Transactions/transactions.json";
import TransactionHistory from "./Transactions/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
