import Profile from "./Profile/Profile";
import user from "../user.json"
import Statistics from "./Statistics/Statistics";
import data from "../data.json"
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";



export default function App() {

  return (

    <div>
     <Profile
  username = {user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />

      <Statistics stats={data} title="Upload stats" />




      <FriendList friends={friends} />
      
     
    </div>
  );
};
