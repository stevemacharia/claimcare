import MainLayout from '@/components/MainLayout';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}