import { styled } from "@linaria/react";

export const SelectorWrapper = styled.div`
  & input, & button {
    width: 2.5rem;
    height: 2rem;
    text-align: center;
    border: 1.5px solid #a1a1a1;
    background-color: #f5f5f5;
  }
  & input:hover, & button:hover {
    border-color: #059669;
  }
  & button:hover {
    filter: brightness(0.9);
  }
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input {
    -moz-appearance: textfield;
    border-left: none;
    border-right: none;
  }
  & button {
    cursor: pointer;
  }
  & button:nth-child(1) {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  & button:nth-child(3) {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;