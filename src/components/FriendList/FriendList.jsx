import { FriendListItem } from "./FriendListItem";
import PropTypes from 'prop-types';
import { UnmarkedList } from "./FrendList.styled";


export const FriendList = ({ friends }) => (
  <UnmarkedList>
    {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          id={friend.id}
        />
      ))}
  </UnmarkedList>
);

FriendList.propTypes = { friends: PropTypes.array };