import AuthenticationLayout from "components/AuthenticationLayout";
import LoginForm from "pageComponents/login/formView";
export default function Login() {
  return (
    <AuthenticationLayout title="Sign In For Instant Access To Your Hustle Playbooks">
      <LoginForm />
    </AuthenticationLayout>
  );
}
