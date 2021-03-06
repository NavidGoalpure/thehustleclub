import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { device } from "consts/theme";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import ToasterContainer from "components/ToasterContainer";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
  password: yup.string().min(8).label("Password").required(),
});

export default function LoginForm() {
  const router = useRouter();
  return (
    <FormContainer>
      <ToasterContainer />
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            try {
              await axios.post("/api/users/login", values);
              router.push("/playbooks");
            } catch {
              toast.error("Wrong email or password");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              <SignInButtonWrapper>
                <SignInButton
                  value={isSubmitting ? "WAIT..." : "LOGIN"}
                  type="submit"
                  disabled={isSubmitting}
                />
                <Link href="/forgot-password">
                  <ForgotPassword>Forgot password</ForgotPassword>
                </Link>
              </SignInButtonWrapper>
              <SignupContainer>
                <SignUDesc>
                  {`If you don't have an existing account, please `}
                  <Link href="/">
                    <SignUpClickable>sign up</SignUpClickable>
                  </Link>
                  {` here.`}
                </SignUDesc>
              </SignupContainer>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FormContainer>
  );
}
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${device.laptopXS} {
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const SignInButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.laptopXS} {
    justify-content: flex-start;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
  @media (max-width: 1400px) {
    flex-direction: column;
    padding-top: 2rem;
    align-items: flex-start;
  }
`;
const FormWrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  @media ${device.laptopXS} {
    padding-top: 0rem;
  }
  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
    margin-right: 0;
    padding: 0;
  }
  form {
    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin-right: 0.5rem;
  color: var(--gray-color-normal);
  margin-top: 2rem;
  @media ${device.laptopXS} {
    font-size: 16px;
    letter-spacing: 0.03em;
    padding-bottom: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 3.3vw;
  }
  @media ${device.mobileL} {
    font-size: 3.8vw;
  }
`;
const SignUDesc = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #4f4f4f;
  margin-right: 0.5rem;
  @media (max-width: 1250px) {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;
const SignUpClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
  cursor: pointer;
`;
const ForgotPassword = styled.div`
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: #4f4f4f;
  &:hover {
    color: var(--accent-color-normal);
  }
  @media (max-width: 1200px) {
    font-size: 17px;
  }

  @media ${device.mobileL} {
    margin-top: 1rem;
  }
  @media (max-width: 1400px) {
    margin-top: 2rem;
  }
`;
const SignInButton = styled.input<{ disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "wait" : "pointer")};
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background: ${({ disabled }) =>
    disabled ? "var(--gray-color-xlight)" : "var(--accent-color-normal)"};
  }
  
  
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
  @media (max-width: 1200px) {
    font-size: 17px;
    width: 224px;
    height: 58px;
  }
  &.-outline {
    color: var(--primary-color-dark);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    background: #fff;
    &:hover {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
      background: #f2f2f2;
    }
  }
  & + .button {
    margin-left: 20px;
  }
  .icon {
    display: inline-flex;
    &.-right {
      margin-left: var(--margin);
    }
    &.-left {
      margin-right: var(--margin);
    }
  }
  @media ${device.mobileL} {
    margin-bottom: 0.5rem;
  }
`;
