import styled from 'styled-components';

const Block = styled.div`
`;

Block.Title = styled.h1`
  font-size: 42px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 113px;

  &::first-letter {
    text-transform: capitalize;
  }
`;

Block.List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 108px;
  margin: 0 auto;
  list-style: none;
`;

export default Block;