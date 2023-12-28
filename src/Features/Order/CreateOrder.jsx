import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button.jsx';
import { fetchAddress } from '../User/userSlice.js';
import { getCart, getTotalCartPrice } from '../Cart/cartSlice.js';
import EmptyCart from '../Cart/EmptyCart.jsx';
import { formatCurrency } from '../../Utils/helpers.js';
import { Trans, useTranslation } from 'react-i18next';

function CreateOrder() {
    const [withPriority, setWithPriority] = useState(false);
    // useSelector vars
    const {
        username,
        status: statusOfAddress,
        address,
        position,
        error: errorAddress,
    } = useSelector((state) => state.user);
    const cartOrder = useSelector(getCart);
    const totalCartPrice = useSelector(getTotalCartPrice);

    // Some custom hook from React-router-dom & Redux toolkit
    const navigation = useNavigation();
    const formDataError = useActionData();
    const dispatch = useDispatch();

    // Some math operations and boolean vars
    const priority = withPriority ? totalCartPrice * 0.2 : 0;
    const totalPrice = totalCartPrice + priority;
    const isSubmit = navigation.state === 'submitting';
    const isLoadingAddressData = statusOfAddress === 'loading';
    const { t } = useTranslation();
    const lang = localStorage.getItem('LANG');

    function transHandler(keyName) {
        return <Trans>{t(`${keyName}`)}</Trans>;
    }

    if (!cartOrder.length) return <EmptyCart />;

    return (
        <div className={'mx-auto max-w-6xl'}>
            <h2 className={'mb-5 text-2xl font-semibold text-teal-700'}>
                {transHandler('createOrderHeading')}
            </h2>

            <Form method={'POST'}>
                <div>
                    <label
                        className={
                            'ml-2.5 text-base font-semibold text-teal-600'
                        }
                        htmlFor={'firstName'}
                    >
                        {transHandler('firstname')}
                    </label>
                    <input
                        className={`input mx-0 my-2`}
                        type="text"
                        name="customer"
                        defaultValue={username}
                        id={'firstName'}
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor={'phone'}
                        className={
                            'ml-2.5 text-base font-semibold text-teal-600'
                        }
                    >
                        {transHandler('phoneNumber')}
                    </label>
                    <div>
                        <input
                            className={`${
                                formDataError?.phone
                                    ? 'bg-red-600 text-white opacity-75'
                                    : ''
                            }  input mx-0 my-2`}
                            type="tel"
                            name="phone"
                            id={'phone'}
                            required
                        />
                    </div>
                    {formDataError?.phone && (
                        <span className={'text-xl font-bold text-red-600'}>
                            {lang === 'en'
                                ? formDataError.phone
                                : 'من فضلك,ادخل رقم هاتف صحيح'}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor={'address'}
                        className={
                            'ml-2.5 text-base font-semibold text-teal-600'
                        }
                    >
                        {transHandler('address')}
                    </label>
                    <div className={'relative'}>
                        <input
                            className={`input mx-0 my-2 ${
                                isLoadingAddressData
                                    ? 'cursor-not-allowed bg-teal-400 bg-opacity-75'
                                    : ''
                            }`}
                            type="text"
                            name="address"
                            id={'address'}
                            defaultValue={address}
                            disabled={isLoadingAddressData}
                            required
                        />
                        {statusOfAddress === 'error' && (
                            <span className="mt-3 block w-full rounded-md bg-red-100 p-2 text-xs text-red-700 md:w-1/3">
                                {errorAddress}
                            </span>
                        )}
                        {!position.latitude && !position.longitude && (
                            <button
                                className={`locationButton ${
                                    isLoadingAddressData
                                        ? 'cursor-not-allowed bg-teal-600 bg-opacity-75'
                                        : ''
                                }`}
                                disabled={isLoadingAddressData}
                                type={'button'}
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(fetchAddress());
                                }}
                            >
                                {transHandler('getPosition')}
                            </button>
                        )}
                    </div>
                </div>

                <div className={'my-3 flex items-center gap-x-2.5'}>
                    <input
                        className={
                            'h-4 w-4 accent-teal-600 focus:outline-none focus:ring focus:ring-teal-700 focus:ring-offset-1'
                        }
                        type="checkbox"
                        name="priority"
                        id="priority"
                        value={withPriority}
                        onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label
                        className={'text-base font-semibold text-teal-600'}
                        htmlFor="priority"
                    >
                        {transHandler('priority')}
                    </label>
                </div>
                <input
                    type="hidden"
                    name={'cart'}
                    value={JSON.stringify(cartOrder)}
                />
                <input
                    type="hidden"
                    name={'position'}
                    value={
                        position.latitude && position.longitude
                            ? `${position.latitude}, ${position.longitude}`
                            : ''
                    }
                />
                <div>
                    <Button
                        type={'primary'}
                        disabled={isSubmit || isLoadingAddressData}
                    >
                        {isSubmit
                            ? `${
                                  lang === 'en'
                                      ? 'Placing Order...'
                                      : 'يتم ارسال طلبك'
                              }`
                            : `${
                                  lang === 'en'
                                      ? `Order Now for ${formatCurrency(
                                            totalPrice,
                                        )}`
                                      : `${formatCurrency(
                                            totalPrice,
                                        )} اطلب الان `
                              }`}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateOrder;
