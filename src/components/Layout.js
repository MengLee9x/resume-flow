"use client"

import { useState, useEffect } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import Header from "./Header";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/services/auth";
import CommonTabArea from "./CommonTabArea";
import CommonInfoArea from "./CommonInfoArea";

const Container = styled.div`
    height: 100vh;
    background-color: #f2f5f9;
`;

const LeftSidebar = styled.div`
    padding-top: 14px;

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
    border-radius: 16px;
    padding: 1.25rem 4rem 1.25rem 4rem;
    margin-top: 8px;
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
    const [user, setUser] = useState({ userName: "", userRole: "" });
    const router = useRouter();

    const clearUser = () => {
        setUser({});
    }

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/login");
        } else {
            const userRole = Cookies.get("userRole");
            const userName = Cookies.get("userName");

            setUser({ userName: userName, userRole: userRole });
        }
    }, [Cookies.get("userRole"), Cookies.get("userName")]);

    console.log("user: ", user);
    if (user.userName === "") {
        return (<html lang="en">
            <body>
                {children}
            </body>
        </html>)
    }

    return (
        <Container>
            <Header user={user} clearUser={clearUser} />
            <div className="container mx-auto">
                <PageBody>
                    <LeftSidebar>
                        <CommonInfoArea />
                    </LeftSidebar>
                    <RightSidebar>
                        <CommonTabArea />
                    </RightSidebar>
                    <StyledMain>
                        {children}
                    </StyledMain>
                </PageBody>
            </div>
        </Container>
    )
}