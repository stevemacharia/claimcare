import React, { ReactNode } from 'react';

type SecondaryLayoutProps = {
    children: ReactNode;
};

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({ children }) => {
    return (
        <div className="secondary-layout">
            <header>Secondary Header</header>
            <main>{children}</main>
            <footer>Secondary Footer</footer>
        </div>
    );
};

export default SecondaryLayout;
