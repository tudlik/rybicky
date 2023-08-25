import { styled } from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #06d6a0;
`;

export const FishList = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: transparent;
  border-radius: 10px;
  overflow: hidden;
`;

export const FishItem = styled.div`
  height: 45px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #118ab2;
  &:nth-child(even) {
    background-color: #ffd166;
  }
`;

export const InputForm = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 10px 15px;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
  color: #ef476f;
  background-color: transparent;

  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  padding: 5px 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

export const NumberInput = styled.input.attrs({ type: "number" })`
  padding: 5px 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 7px 15px;
  border-radius: 5px;
  margin: 5px auto;
  background-color: #073b4c;

  color: white;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const Buttons = styled(InputForm)`
  margin: 20px;
  height: 40px;
`;

export const TabButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  height: 100%;
  width: 48%;
  margin: 0 5px;
  border: 1px solid #073b4c;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;

  outline: none;
  ${(props) => {
    if (props.name === props["data-active"])
      return `
      background-color: #073b4c;
      color:white;
    `;
  }}
`;

export const AquariumForm = styled(InputForm)`
  flex-direction: column;
`;

export const AquariumInput = styled(NumberInput)`
  width: 200px;
  margin: 10px auto;
`;

export const AquariumSubmit = styled.button`
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  outline: none;
  padding: 7px 15px;
  border-radius: 5px;
  margin: 5px auto;
  color: white;
  background-color: green;
  cursor: pointer;
  &:disabled {
    background-color: red;
    cursor: not-allowed;
  }
`;
