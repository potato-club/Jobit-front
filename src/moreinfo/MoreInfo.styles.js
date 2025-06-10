import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CareerWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const CareerItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const AddButton = styled.button`
  background: #f0f0f0;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const RemoveButton = styled.button`
  background: #f0f0f0;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #b8b6f4;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
