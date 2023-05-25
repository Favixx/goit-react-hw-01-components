import styles from '../css/Friends.module.css'
import PropTypes from "prop-types";
const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClass = isOnline ? `${styles.status} ${styles.online}` : `${styles.status} ${styles.offline}`;
    return (<li className={styles.item}>
        <span className={statusClass}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>)
}
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map((friend) => {
                return <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            })}
        </ul>
    )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
}