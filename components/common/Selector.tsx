import styled from "styled-components";
import React from "react";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("static/svg/common/selector/selector_down_arrow.svg");
    background-position: right 11px center;
    background-repeat: no-repeat;
    font-size: 16px;
    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

//select의 속성을 확장하고 선택할 수 있는 옵션 값들인 options와 선택된 값 value를 props로 받도록 하였습니다.
interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  disabledOptions?: string[];
  value?: string;
}

const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  return (
    <Container>
      <select {...props}>
        {options.map((option, index) => (
          <option key={index} value={option} disabled>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selector;
