import SecondaryLayout from '@/components/SecondaryLayout';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    return    ( 
    <html lang="en">
        <body>
            <main className=''>
                <SecondaryLayout>
                    {children}
                </SecondaryLayout>;
            </main>
      </body>
    </html>
    );
}