import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import FormDoctor from "../../../components/FormDoctor";

import { Row, Col, ApplicationButton } from "../../../globalStyle";

import { ApplicationDiv } from "./styles";
import { medicalSpecialtyService } from "../../../services/MedicalSpecialtyService";
import { doctorMedicalSpecialtyService } from "../../../services/DoctorMedicalSpecialtyService";

const DoctorShow = props => {
  const { id } = useParams();
  const history = useHistory();
  const [medicalSpecialty, setMedicalSpecialty] = useState([]);
  const [selectedMedicalSpecialty, setSelectedMedicalSpecialty] = useState({});

  useEffect(() => {
    (async () => {
      const response = await medicalSpecialtyService.index();
      setMedicalSpecialty(response);
    })();
  }, []);

  const handleChange = async e => {
    setSelectedMedicalSpecialty(JSON.parse(e.target.value));
  };

  const submitPost = async () => {
    await doctorMedicalSpecialtyService.store({
      medical_specialty: selectedMedicalSpecialty,
      doctor: props.location.state ,
    });
  };

  return (
    <ApplicationDiv>
      <Row>
        <Col>
          <strong>medicos/{id}</strong>
          <FormDoctor {...props.location.state} />
          <ApplicationButton onClick={e => history.push("/medicos")}>
            voltar
          </ApplicationButton>
        </Col>

        <Col>
          <ApplicationDiv>
            <strong>Especialidades:</strong>
            {props.location.state.doctor_medical_specialty.map(item => (
              <p key={item.id}>{item.medical_specialty.nome}</p>
            ))}
            <select onChange={handleChange}>
              {medicalSpecialty.map(item => (
                <option value={JSON.stringify(item)} key={item.id}>
                  {item.nome}
                </option>
              ))}
            </select>
            <ApplicationButton onClick={submitPost}>
              nova especialidade
            </ApplicationButton>
          </ApplicationDiv>
        </Col>
      </Row>
    </ApplicationDiv>
  );
};

export default DoctorShow;
