import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

const Button = styled.button`
  border: 1px solid #dee2e6;
  padding: 8px;
  font-size: 0.8rem;
  background: transparent;
  color: rgb(26, 115, 232);

  &:hover {
    background: rgb(240, 242, 245);
    cursor: pointer;
  }

  &[disabled] {
    background: rgb(240, 242, 245);
    color: #626262;
    cursor: revert;
  }

  &[aria-current] {
    background: rgb(26, 115, 232);
    border: 1px solid rgb(26, 115, 232) !important;
    border: none;
    font-weight: bold;
    cursor: revert;
    color: white;
  }
`;

export default Pagination;
