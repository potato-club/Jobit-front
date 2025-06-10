import React from 'react';
import { Label, Input, CareerItem, RemoveButton } from './MoreInfo.styles';

const InfoInput = ({ label, value, onChange, name, onRemove }) => (
  <CareerItem>
    <div style={{ flex: 1 }}>
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange(name, e.target.value)} />
    </div>
    {onRemove && <RemoveButton type="button" onClick={onRemove}>−</RemoveButton>}
  </CareerItem>
);

export default InfoInput;
