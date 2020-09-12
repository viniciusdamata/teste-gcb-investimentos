import React, { useState, useEffect } from "react";

import {
  Row,
  Col,
  ApplicationButton,
  ApplicationInput,
} from "../../globalStyle";

import { doctorService } from "../../services/doctorService";
import { ApplicationForm } from "./styles";

const FormDoctor = props => {
  console.log("props", props);
  const [newMedico, setNewMedico] = useState({
    nome: "",
    CRM: "",
    estado: "",
    cidade: "",
  });

  const [modo, setModo] = useState("CREATE");

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      const { id, nome, CRM, estado, cidade } = props;
      setNewMedico({ id, nome, CRM, estado, cidade });
      setModo("UPDATE");
    }
  }, []);

  const submitPost = async function (e) {
    e.preventDefault();
    await doctorService.store(newMedico);
    window.location.reload();
  };

  const submitPut = async function (e) {
    e.preventDefault();
    await doctorService.update(newMedico.id, newMedico);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewMedico({ ...newMedico, [name]: value });
  };

  return (
    <div>
      <h3>Cadastrar novo:</h3>
      {/* TODO novo */}
      <ApplicationForm action="">
        <Col>
          <Col>
            <label htmlFor="">Nome:</label>
            <ApplicationInput
              type="text"
              placeholder="nome"
              name="nome"
              onChange={handleInputChange}
              value={newMedico.nome}
            />
          </Col>
          <Col>
            <label htmlFor="">CRM:</label>
            <ApplicationInput
              type="text"
              placeholder="CRM"
              name="CRM"
              onChange={handleInputChange}
              value={newMedico.CRM}
            />
          </Col>
          <Col>
            <label htmlFor="">Estado:</label>
            <ApplicationInput
              type="text"
              placeholder="estado"
              name="estado"
              onChange={handleInputChange}
              value={newMedico.estado}
            />
          </Col>
          <Col>
            <label htmlFor="">Cidade:</label>
            <ApplicationInput
              type="text"
              placeholder="cidade"
              name="cidade"
              onChange={handleInputChange}
              value={newMedico.cidade}
            />
          </Col>

          {modo == "CREATE" ? (
            <ApplicationButton onClick={submitPost}>Salvar </ApplicationButton>
          ) : (
            <ApplicationButton onClick={submitPut}>Update </ApplicationButton>
          )}
        </Col>
      </ApplicationForm>
    </div>
  );
};

export default FormDoctor;
