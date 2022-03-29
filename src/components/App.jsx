import Profile from "./Profile/Profile";
import user from "../user.json"
import Statistics from "./Statistics/Statistics";
import data from "../data.json"


// const title = "Upload stats";

export default function App() {
        // console.log(data[0]);

  return (

    <div>
     <Profile
  username = {user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />

    <Statistics stats={data} title="Upload stats" />
     
    </div>
  );
};
