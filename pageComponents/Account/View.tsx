import Button from "components/Button";
import SimplePageHeader from "components/simplePageHeader";
import styled from "styled-components";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  handleLogout: () => void;
}

export function AccountView({
  firstName,
  lastName,
  email,
  handleLogout,
}: Props) {
  return (
    <div className="account-page">
      <SimplePageHeader />
      <Container>
        <Wrapper>
          <H1>Profile</H1>
          <Section>
            <Label>Name</Label>
            <Field>{`${lastName} - ${firstName}`}</Field>
            <Label>Email</Label>
            <Field>{email}</Field>
            <StyledButton
              to="/logout"
              clickHandler={() => handleLogout()}
              title={`Logout`}
            />
          </Section>
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 16rem);
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: inherit;
  height: inherit;
  padding: 0 2rem;
  padding-top: 13rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;
const H1 = styled.h1`
  position: absolute;
  top: 80px;
  left: 2rem;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
`;
const Section = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 558px;
`;
const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  margin-right: auto;
`;

const Field = styled.div`
    width: 100%;
    
    margin: 8px 0 3.125rem;
    
    padding: 16px;
    border: 1px solid;
    border-radius: 1px;
    appearance: none;
    font-size: 18px;
    font-weight: 600;
    border-color: var(--primary-color-normal)};
    overflow-wrap: anywhere;
    text-align: start;
    margin-bottom: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
`;
const StyledButton = styled(Button)`
  width: 264px;
  height: 64px;
  margin-top: 1rem;
`;
