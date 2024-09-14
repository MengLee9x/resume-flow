import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import UnauthorizedContent from "@/components/UnauthorizedContent";

export function withAdminAuth(WrappedComponent) {
    return function WithAdminAuth(props) {
        const { user, isLoading } = useSelector((state) => state.user);
        const router = useRouter();

        useEffect(() => {
            if (!user) {
                router.push('/login');
            }
        }, [user, isLoading, router]);

        if (isLoading) {
            return (<div><h4 className="text-black font-bold">Loading...</h4></div>)
        }

        if (user && user.userRole !== 'admin') {
            return <UnauthorizedContent />;
        }

        return user && user.userRole === 'admin' ? <WrappedComponent {...props} /> : null;
    };
}
