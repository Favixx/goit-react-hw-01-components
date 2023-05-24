import Profile from "./Profile";
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'
import { Statistics } from "./Statistics";
import { FriendList } from "./Friends";
import TransactionHistory from "./TransactionHistory";
export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
