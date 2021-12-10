import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LoginButton = () => {
  const ButtonBox = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    color: transparent;
    &:hover {
      color: ${(props) => props.theme.darkestSpace};
      cursor: pointer;
    }
  `;

  return (
    <ButtonBox>
      <a href="/login">
        <i className="ri-ghost-line" />
      </a>
    </ButtonBox>
  );
};

export default LoginButton;
