import { styled } from "@linaria/react";

export const SearchBar = styled.form`
  background-color: #F5F5F5;
  border: #F5F5F5 solid 1px;
  border-radius: 2em;
  padding: 0 0.5rem;
  width: 23rem;
  &:hover,
  &:focus-within {
    border: #000 solid 1px;
  }
  & input {
    border: none;
    width: 80%;
    background: none;
    padding: 1em;
    font-size: 1rem;
  }
  & input:focus {
    outline: none;
  }
  & button {
    width: 20%;
    background-color: #059669;
    color: #FFF;
    border: none;
    font-size: 1rem;
    margin: 0;
    padding: 0.5rem;
    border-radius: 2em;
    cursor: pointer;
  }
`