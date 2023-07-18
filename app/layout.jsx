import '@/styles/globals.css'
import Navbar from '@/components/navbar';

const RootLayout = ({children}) => (
    <html lang='en'>
        <body>
            <Navbar/>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
);

export default RootLayout;