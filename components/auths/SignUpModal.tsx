import styled from "styled-components";
import CloseXIcon from "../../public/static/svg/modal/CloseXIcon.svg";
import MailIcon from "../../public/static/svg/auth/MailIcon.svg";
import PersonIcon from "../../public/static/svg/auth/PersonIcon.svg";
import OpenedEyeIcon from "../../public/static/svg/auth/OpenedEyeIcon.svg";
import ClosedEyeIcon from "../../public/static/svg/auth/ClosedEyeIcon.svg";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 568px;
  height: 614px;
  padding: 32px;
  background-color: white;
  z-index: 11;
  .modal-close-x-icon {
    cursor: pointer;
    display: block;
    margin: 0 0 40px auto;
  }
  .input-wrapper {
    position: relative;
    margin-bottom: 16px;
    input {
      position: relative;
      width: 100%;
      height: 46px;
      padding: 0 44px 0 11px;
      border: 1px solid ${palette.gray_eb};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      ::placeholder {
        color: ${palette.gray_76};
      }
    }
  }
`;

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon className="modal-close-x-icon" />
      <div className="input-wrapper">
        <input placeholder="이메일 주소" type="email" name="email" />
        <MailIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="성(예: 홍)" />
        <PersonIcon />
      </div>
      <div className="input-wrapper">
        <input placeholder="비밀번호 설정하기" type="password" />
        <OpenedEyeIcon />
      </div>
    </Container>
  );
};

export default SignUpModal;
