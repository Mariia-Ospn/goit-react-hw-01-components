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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
