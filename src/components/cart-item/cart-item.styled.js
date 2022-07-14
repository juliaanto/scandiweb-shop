import styled from 'styled-components';

const Block = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.specialGrey};
  padding-top: 20px;
  padding-bottom: 19px;
  display: flex;
  justify-content: space-between;
`;

Block.Wrapper = styled.div`
  width: 200px;
  height: 288px;
  position: relative;
`;

Block.Image = styled.img`
  object-fit: cover;
`;

export default Block;