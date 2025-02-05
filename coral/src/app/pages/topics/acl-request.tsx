import { PageHeader } from "@aivenio/aquarium";
import { useParams } from "react-router-dom";
import AuthenticationRequiredBoundary from "src/app/components/AuthenticationRequiredBoundary";
import PreviewBanner from "src/app/components/PreviewBanner";
import TopicAclRequest from "src/app/features/topics/acl-request/TopicAclRequest";
import Layout from "src/app/layout/Layout";

const AclRequest = () => {
  const { topicName } = useParams();

  return (
    <AuthenticationRequiredBoundary>
      <Layout>
        <PreviewBanner
          linkTarget={`/requestAcls${
            topicName !== undefined ? `?topicName=${topicName}` : ""
          }`}
        />
        <PageHeader title={"ACL (Access Control) Request"} />
        <TopicAclRequest />
      </Layout>
    </AuthenticationRequiredBoundary>
  );
};

export default AclRequest;
