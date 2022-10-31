import styled from "@emotion/styled";
import colors from "../../../theme/colors";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  & > :first-of-type {
    border-radius: 8px 8px 0 0;
  }
  & > :last-child {
    border-radius: 0px 0px 8px 8px;
    border-bottom: 1px solid ${colors.gray};
  }
`;
