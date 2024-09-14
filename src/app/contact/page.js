"use client"

import SectionHeader from "@/components/SectionHeader"
import StyledWrapper from "@/components/common/MainContentWrapper"
import FeatureUnavailable from "@/components/FeatureUnavailable";
import { withAdminAuth } from "@/hooks/withAdminAuth";

const ContactPage = () => {
    return (
        <StyledWrapper height="100%">
            <SectionHeader header="Contact" />
            <FeatureUnavailable />
        </StyledWrapper>
    );
};

export default withAdminAuth(ContactPage);