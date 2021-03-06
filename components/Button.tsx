import styled, { CSSObject } from "styled-components";
import Link from "next/link";

interface Props {
  title: string;
  className?: string;
  // وقتی از «تو» استفاده میکنیم که بخوایم ظاهر باتن و موتور لینک رو داشته باشیم
  to?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickHandler?: Function;
  childStyle?: CSSObject;
  //برای تعیین ظاهر باتن به کار میره
  viewType?: "glow" | "normal";
  //
  border?: boolean;
}
const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer {...props}>
      <Container
        viewType={props.viewType}
        border={!!props?.border}
        style={props.childStyle}
      >
        {props.title}
      </Container>
    </ButtonContainer>
  );
};
export default Button;

const ButtonContainer: React.FC<Props> = ({
  children,
  to,
  clickHandler,
  className,
}) => {
  return to ? (
    <Link href={to}>
      <a
        className={className}
        onClick={() => {
          clickHandler && clickHandler();
        }}
      >
        {children}
      </a>
    </Link>
  ) : (
    <div
      className={className}
      onClick={() => {
        clickHandler && clickHandler();
      }}
    >
      {children}
    </div>
  );
};

const Container = styled.div<{
  viewType?: "glow" | "normal";
  border?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background: ${(props) =>
    props.viewType === "glow"
      ? " radial-gradient(    100% 1655.01% at 0% 6.25%,    #d49844 0%,    #fee7b1 35.61%,    #fee6af 67.08%,    #f6c757 100%  );"
      : "var(--accent-color-normal)"};
  // background-color: ${({ border }) => (border ? "white" : "unset")};
  ${({ border }) =>
    border && "background-color: white; border: 1px solid #1D3330;"}
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  font-weight: 600;
  font-size: inherit;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
  width: inherit;
  height: inherit;
  &:hover {
    ${(props) =>
      props.viewType === "glow"
        ? "box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);"
        : "filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2));"}
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
`;
