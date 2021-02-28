import styled from "styled-components";
import {TextProps} from "./props";



export const Text = styled.p<TextProps>`
  border: 1px solid gray;
  height: ${({ isFull }) => isFull ? 5 : 1}em;
  font-size: 2em;
`
