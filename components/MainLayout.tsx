import React, { ReactNode } from 'react';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="main-layout">
            <Navbar/>
                <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
