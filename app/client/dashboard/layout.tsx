import SecondaryLayout from '@/components/SecondaryLayout';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    return    ( 

        <div className="main-layout">
                <SecondaryLayout>
                    {children}
                </SecondaryLayout>;

        </div>
    );
}