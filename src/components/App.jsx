import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import data from '../data/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from '../data/transactions.json';

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics stats={data} title="Upload stats" />

      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />
    </div>
  );
}
