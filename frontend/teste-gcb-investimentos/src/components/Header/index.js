import React from "react";
import { Link } from "react-router-dom";

import { MainHeader, HeaderContent, HeaderTitle } from "./styles";

export default function Header() {
  return (
    <MainHeader>
      <HeaderContent>
        <Link to="/medicos" style={{ textDecoration: 'none' }}>
          <HeaderTitle>Clínica medica</HeaderTitle>
        </Link>
      </HeaderContent>
    </MainHeader>
  );
}
