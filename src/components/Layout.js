"use client"

import { useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/services/auth";
import CommonTabArea from "./CommonTabArea";
import CommonInfoArea from "./CommonInfoArea";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "@/lib/features/user/userSlice";

const Container = styled.div`
    height: 100vh;
    background-color: #f2f5f9;
`;

const LeftSidebar = styled.div`

    @media (min-width: 1024px) {
        width: 40%;
    }
`

const RightSidebar = styled.div`
   display: flex;
   flex-direction: column;
   flex-grow: 1;
`;

const StyledMain = styled.main`
    flex-grow: 1;
    padding: 1.25rem 0 1.25rem 1.2rem;
    margin-top: 4px;
`

const PageBody = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding-top: 0.75rem;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
}
`
export default function Layout({ children }) {
    const dispatch = useDispatch()
    const router = useRouter();
    const { user } = useSelector(state => state.user);

    const handleClearUser = () => {
        dispatch(clearUser());
        router.push("/login");
    }

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/login");
        } else {
            const userRole = Cookies.get("userRole");
            const userName = Cookies.get("userName");

            dispatch(setUser({ userName: userName, userRole: userRole }));
        }
    }, []);

    if (!user || user.userName === "") {
        return (<html lang="en">
            <body>
                {children}
            </body>
        </html>)
    }

    return (
        <Container>
            <Header user={user || {}} clearUser={handleClearUser} />
            <div className="container mx-auto">
                <PageBody>
                    <LeftSidebar>
                        <CommonInfoArea />
                    </LeftSidebar>
                    <RightSidebar>
                        <CommonTabArea />
                        <StyledMain>
                            {children}
                        </StyledMain>
                    </RightSidebar>
                </PageBody>
            </div>
        </Container>
    )
}