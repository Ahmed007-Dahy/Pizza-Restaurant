import { useSelector } from 'react-redux';
import { getUsername } from './userSlice.js';

function UserName() {
    const username = useSelector(getUsername);

    if (!username) return null;

    return <p className={'text-xl font-bold'}>{username}</p>;
}

export default UserName;
