import Heading from "@/components/Heading";
import Page from "@/components/Page";
import SignUpForm from "./_components/SignUpForm";

function SignUpPage() {
  return (
    <Page>
      <Heading>회원가입</Heading>
      <SignUpForm />
    </Page>
  );
}

export default SignUpPage;
