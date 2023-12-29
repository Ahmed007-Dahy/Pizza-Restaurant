import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    logo: 'Pizza Restaurant Co.',
                    placeholder: 'Enter Order...',
                    headerHome: 'The best pizza.',
                    descriptionOfHeader:
                        'Straight out of the oven, straight to you.',
                    headingOfCreateUser:
                        '👋 Welcome! Please start by telling us your name:',
                    placeholderOfCreateUser: 'Your full name',
                    buttonOfCreateUser: 'Start Ordering',
                    buttonOfCart: 'Add to Cart',
                    deleteItemFromCart: 'Delete',
                    continueOrderingButton: 'Continue ordering',
                    openCartButton: 'Open cart',
                    backToMenuButton: 'Back to Menu',
                    yourCart: 'Your cart',
                    orderPizza: 'Order pizzas',
                    clearCart: 'Clear Cart',
                    createOrderHeading: "Ready to order? Let's go!",
                    firstname: 'First Name',
                    PhoneNumber: 'Phone number',
                    phoneNumberError: 'You must Enter valid phone number',
                    address: 'Address',
                    getPosition: 'Get position',
                    priority: 'Want to yo give your order priority?',
                    placingOrder: 'Placing Order...',
                    orderNow: 'Order Now for',
                    emptyCartText:
                        'Your cart is still empty. Start adding some pizzas :)',
                },
            },
            ar: {
                translation: {
                    logo: 'مطعم البيتزا',
                    placeholder: 'ادخل الطلب الخاص بك...',
                    headerHome: 'افضل بيتزا',
                    descriptionOfHeader: 'مباشرة من الفرن,أليك',
                    headingOfCreateUser: '👋مرحبا بك,اخبرنا بأسمك',
                    placeholderOfCreateUser: 'الاسم بالكامل',
                    buttonOfCreateUser: 'ابدأ في الطلب الان',
                    buttonOfCart: 'أضف إلى السلة',
                    deleteItemFromCart: 'ازاله من السلة',
                    continueOrderingButton: 'واصل طلبك',
                    openCartButton: 'اذهب الي السلة',
                    backToMenuButton: 'ارجع الي السلة',
                    yourCart: 'السلة الخاصه بك',
                    orderPizza: 'اطلب البيتزا الان',
                    clearCart: 'ازالة كل العناصر من السلة الخاصه بك',
                    createOrderHeading: 'هل جاهز للطلب,هيا بنا لنبدأ الان',
                    firstname: 'الاسم الاول',
                    phoneNumber: 'رقم الهاتف',
                    phoneNumberError: 'من فضلك,ادخل رقم هاتف صحيح',
                    address: 'العنوان',
                    getPosition: 'الحصول علي العنوان',
                    priority: 'هل تريد أن تعطي الأولوية لطلبك؟',
                    placingOrder: 'يتم ارسال طلبك',
                    orderNow: 'اطلب الان',
                    emptyCartText:
                        ':)سلتك لا تزال فارغه, ابدأ الان بأضافه بعض البيتزا',
                },
            },
        },
    });
