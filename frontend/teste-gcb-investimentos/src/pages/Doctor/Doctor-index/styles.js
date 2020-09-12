import React from "react";
import styled from "styled-components";

export const DoctorList = styled.section`
  width: 100%;

  @media (min-width: 599px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const LoadingPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;