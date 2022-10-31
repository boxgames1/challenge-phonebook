import styled from "@emotion/styled";
import colors from "../../../theme/colors";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid ${colors.gray};
  border-bottom: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.lightGray};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ActionsContainer = styled.div``;
