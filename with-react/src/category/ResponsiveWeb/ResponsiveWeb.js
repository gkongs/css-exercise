/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function ResponsiveWeb() {
  return (
    <>
      <Nav />
    </>
  );
}

const CardContainer = css`
  display: grid;
  padding: 100px;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 10px;
`;

const Card = css`
  text-align: center;
  color: white;
  background-color: tomato;
`;
