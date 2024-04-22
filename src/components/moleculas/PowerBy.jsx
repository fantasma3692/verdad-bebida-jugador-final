import styled from "styled-components";
export function PowerBy() {
  return (
    <Container>
      <a target="_blank" href="https://codigo369.com/">
        <span>
          power by <strong>codigo369.com</strong>
        </span>
      </a>
    </Container>
  );
}
const Container = styled.div`
  font-size: 0.8rem;
  position: absolute;
  bottom: 10px;
  display: flex;
  opacity: 0.5;
  z-index: 100;
  
  a {
    color: #fff;
    text-decoration: none;
  }
`;
