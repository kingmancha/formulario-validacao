import { useState } from 'react';
import './App.css'
import DadosInfo from './componentes/DadosInfo';
import ContactInfo from './componentes/ContactInfo';
import EnderecoInfo from './componentes/EnderecoInfo';
import { isValidCPF, isValidPhone } from './validacao';
import { fetchAddress } from './api';

function App() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    cidade: "",
    estado: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value;
    handleInputChange(e);
    if (cep.length === 8) {
      const address = await fetchAddress(cep);
      if (address) {
        setForm({
          ...form,
          rua: address.logradouro,
          cidade: address.localidade,
          estado: address.uf,
        });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!form.nome) {
      newErrors.nome = 'Campo Obrigatório';
      valid = false;
    }

    if (!form.cpf) {
      newErrors.cpf = 'Campo Obrigatório';
      valid = false;
    } else if (!isValidCPF(form.cpf)) {
      newErrors.cpf = 'CPF inválido';
      valid = false;
    }

    if (!form.telefone) {
      newErrors.telefone = 'Campo Obrigatório';
      valid = false;
    } else if (!isValidPhone(form.telefone)) {
      newErrors.telefone = 'Telefone inválido';
      valid = false;
    }

    if (!form.cep) {
      newErrors.cep = 'Campo obrigatório';
      valid = false;
    }

    if (!form.rua) {
      newErrors.rua = 'Campo obrigatório';
      valid = false;
    }

    if (!form.numero) {
      newErrors.numero = 'Campo obrigatório';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <form>
        <DadosInfo
          form={form}
          handleInputChange={handleInputChange}
          errors={errors}
        />
        <ContactInfo
          form={form}
          handleInputChange={handleInputChange}
          errors={errors}
        />
        <EnderecoInfo
          form={form}
          handleInputChange={handleInputChange}
          handleCepChange={handleCepChange}
          errors={errors}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
