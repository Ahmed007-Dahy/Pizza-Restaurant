import { getMenu } from '../../Services/apiRestaurant.js';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem.jsx';

function Menu() {
    const menu = useLoaderData();
    return (
        <ul className={'divide-y divide-stone-200'}>
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    );
}

export async function Loader() {
    return await getMenu();
}

export default Menu;
