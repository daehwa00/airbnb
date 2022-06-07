import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";
import palette from "../styles/palette";
import useModal from "../hooks/useModal";
import SignUpModal from "./auths/SignUpModal";

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10px;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }
  /* 헤더 로그인 회원가입 버튼*/
  .header-auth-buttons {
    /* 회원가입 버튼*/
    .header-sign-up-button {
      height: 42px;
      border-radius: 21px;
      margin-right: 8px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      padding: 0 16px;
      border: 0;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
    /* 로그인 버튼*/
    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  }
`;

const Header: React.FC = () => {
  const { openModalPortal, ModalPortal } = useModal();
  //* 모달을 열고 닫을 boolean 값
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Container>
      <Link href="/">
        <a className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </a>
      </Link>
      <div className="header-auth-buttons">
        <button
          type="button"
          className="header-sign-up-button"
          onClick={openModalPortal}
        >
          회원가입
        </button>
        <button type="button" className="header-login-button">
          로그인
        </button>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

export default Header;
