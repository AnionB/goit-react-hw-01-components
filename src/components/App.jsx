import Profile from "./Profile/Profile";
import user from "../user.json"




export default function App() {
        console.log(user);

  return (

    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   // textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
     <Profile
  username = {user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
        
    </div>
  );
};
