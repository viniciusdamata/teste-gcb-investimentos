import React, { useEffect, useState } from "react";

import { Row, Col, ApplicationInput } from "../../../globalStyle";
import { DoctorList } from "./styles";
import Card from "../../../components/Card";
import FormDoctor from "../../../components/FormDoctor";

import { doctorService } from "../../../services/doctorService";



const DoctorIndex = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await doctorService.index();
      setMedicos(response);
    })();
  }, []);



  return (
    <DoctorList>
      <h3>Medicos:</h3>
      <FormDoctor/>      

      <Row>
        <ApplicationInput type="text" name="" placeholder="Pesquisar" id="" />
      </Row>
      {medicos.map(medico => (
        <Card {...medico} key={medico.id} />
      ))}
    </DoctorList>
  );
};

export default DoctorIndex;
