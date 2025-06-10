import React, { useState } from 'react';
import {
  Container,
  Title,
  InputGroup,
  Input,
  Label,
  CareerWrapper,
  AddButton,
  SubmitButton
} from './MoreInfo.styles';
import InfoInput from './InfoInput';

const MoreInfo = () => {
  const [formData, setFormData] = useState({
    job: '',
    major: '',
    education: '',
    field: '',
    careers: [''],
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCareerChange = (index, value) => {
    const newCareers = [...formData.careers];
    newCareers[index] = value;
    setFormData({ ...formData, careers: newCareers });
  };

  const addCareer = () => {
    setFormData({ ...formData, careers: [...formData.careers, ''] });
  };

  const removeCareer = (index) => {
    const newCareers = formData.careers.filter((_, i) => i !== index);
    setFormData({ ...formData, careers: newCareers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출 데이터:', formData);
  };

  return (
    <Container>
      <Title>추가 정보 입력</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>직업</Label>
          <Input value={formData.job} onChange={(e) => handleChange('job', e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>전공</Label>
          <Input value={formData.major} onChange={(e) => handleChange('major', e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>학력</Label>
          <Input value={formData.education} onChange={(e) => handleChange('education', e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>분야</Label>
          <Input value={formData.field} onChange={(e) => handleChange('field', e.target.value)} />
        </InputGroup>
        <CareerWrapper>
          <Label>경력(선택)</Label>
          {formData.careers.map((career, index) => (
            <InfoInput
              key={index}
              label={`경력 ${index + 1}`}
              name={`career-${index}`}
              value={career}
              onChange={(_, value) => handleCareerChange(index, value)}
              onRemove={formData.careers.length > 1 ? () => removeCareer(index) : null}
            />
          ))}
          <AddButton type="button" onClick={addCareer}>＋</AddButton>
        </CareerWrapper>
        <SubmitButton type="submit">가입하기</SubmitButton>
      </form>
    </Container>
  );
};

export default MoreInfo;
