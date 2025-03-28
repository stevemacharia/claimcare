import React, { ReactNode } from 'react';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import ClientSideBar from '@/components/ClientSideBar';

type SecondaryLayoutProps = {
    children: ReactNode;
};

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children }) => {
    return (
        <div className="secondary-layout">
            <SecondaryNavbar/>

                <main>{children}</main>


        </div>
    );
};

export default SecondaryLayout;
