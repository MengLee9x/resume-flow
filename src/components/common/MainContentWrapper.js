import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: ${props =>
    `${props.topLeft || '16px'} ${props.topRight || '16px'} ${props.bottomRight || '16px'} ${props.bottomLeft || '16px'}`
  };
  padding: 1.5rem 4rem;
  background: white;
  height: ${props => props.height || null};
`;

export default StyledWrapper;