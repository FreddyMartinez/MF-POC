import styled from "styled-components";
import { TextCardProps } from "./types";

export function TextCard({ items, title, footer }: TextCardProps) {
  return (
    <StyledDiv>
      {title && <h4>{title}</h4>}
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      {footer && <h3>{footer}</h3>}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: "100%";
  height: "100%";
  background: "rgba(19, 126, 132, 0.10)";
  borderradius: 26;
`;
