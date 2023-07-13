import '../styles/globals.css';
import Provider from '@/components/Provider';
import { Header } from '@/components';

export const metadata = {
    title: 'Автобуска Станица',
    description: 'Онлине страна за купување автобуски карти'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <Provider>
                    <Header />
                    <div className="w-[1440px] mx-auto p-4">{children}</div>
                </Provider>
            </body>
        </html>
    );
}
