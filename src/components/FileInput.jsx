import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  width: 25%;
  &::-webkit-file-upload-button {
    background-color: var(--color-primary-blue);
    border: none;
    height: 45px;
    color: white;
    cursor: pointer;
  }
`;

export default FileInput;
