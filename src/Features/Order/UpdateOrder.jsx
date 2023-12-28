import { useFetcher } from 'react-router-dom';
import Button from '../../UI/Button.jsx';

function UpdateOrder() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method={'PATCH'} className={'space-y-4 text-center'}>
            <Button type={'primary'}>Make edit for your data</Button>
        </fetcher.Form>
    );
}

export default UpdateOrder;
