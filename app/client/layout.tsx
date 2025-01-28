import SecondaryLayout from '@/components/SecondaryLayout';

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
    return <SecondaryLayout>{children}</SecondaryLayout>;
}