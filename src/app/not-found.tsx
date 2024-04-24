import ErrorComponent from "@/components/ErrorComponent";
import Page from "@/components/Page";

function NotFound() {
  return (
    <Page>
      <ErrorComponent message="찾을 수 없는 라우트 경로입니다" />
    </Page>
  );
}

export default NotFound;
