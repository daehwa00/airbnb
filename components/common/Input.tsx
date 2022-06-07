import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

//다음과 같이 사용하면 iconExist를 코드 안에서 사용할 수 있다.
const Container = styled.div<{ iconExist: boolean }>`
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${palette.gray_76};
    }
    &:focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }
  .input-icon-wrapper {
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;

//<input>태그가 가지는 속성들에 대한 타입
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element; //icon값을 사용하지 않아도 됨
}

const Input: React.FC<IProps> = ({ icon, ...props }) => {
  return (
    <Container iconExist={!!icon}>
      <input {...props} />
      <div className="input-icon-wrapper">{icon}</div>
    </Container>
  );
};

export default Input;
