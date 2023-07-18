import '@/styles/globals.css'

const RootLayout = ({children}) => (
    <html lang='en'>
        <body>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
);

export default RootLayout;