import friends from './data/friends.json';
import data from './data/data.json'
import user from './data/user.json'
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import {Profile} from './Profile/Profile'

export const App = () => {
  return (
    <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />  
    <FriendList friends={friends} /> 
</>
  );
};
