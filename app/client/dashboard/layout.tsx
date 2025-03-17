import SecondaryLayout from '@/components/SecondaryLayout';
import ClientSideBar from '@/components/ClientSideBar';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    return    ( 
                
        <div className="main-layout">
                <SecondaryLayout>
                    
                    {children}
                </SecondaryLayout>;

        </div>
    );
}