import React from "react";
import { useHistory } from "react-router-dom";

import { doctorService } from "../../services/doctorService";
import { Row, Col, ApplicationButton } from "../../globalStyle";
import { CardComponent  } from "./styles";

const Card = ({ id, nome, CRM, estado, cidade, doctor_medical_specialty }) => {
  const history = useHistory();

  const deleteDoctor = async id => {
    await doctorService.delete(id);
  };

  return (
    <CardComponent>
      <Col>
        <strong>{nome}</strong>
        <p>CRM: {CRM}</p>
        <p>Estado: {estado}</p>
        <p>Cidade: {cidade}</p>

        <div>
          <strong>Especialidades:</strong>
          <ul>
            {doctor_medical_specialty.map(item => (
              <li key={item.id}>{item.medical_specialty.nome}</li>
            ))}
          </ul>
        </div>
      </Col>
      <Row>
        <ApplicationButton
          onClick={e =>
            history.push(`/medicos/${id}`, {
              id,
              nome,
              CRM,
              estado,
              cidade,
              doctor_medical_specialty,
            })
          }
        >
          Visualizar
        </ApplicationButton>
        <ApplicationButton
          backgroundColor="#DB455D"
          onClick={e => deleteDoctor(id)}
        >
          Deletar
        </ApplicationButton>
      </Row>
    </CardComponent>
  );
};

export default Card;
