import React from "react";

function DadosInfo({ form, handleInputChange, errors }) {
    return (
        <div>
            <div>
                <label>Nome:</label>
                <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleInputChange}
                />
                {errors.nome && <p>{errors.nome}</p>}
            </div>

            <div>
                <label>CPF:</label>
                <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleInputChange}
                maxLength={11}
                />
                {errors.cpf && <p>{errors.cpf}</p>}
            </div>

            <div>
                <label>Data de Nascimento:</label>
                <input
                type="date"
                name="dataNascimento"
                value={form.dataNascimento}
                onChange={handleInputChange}
                />
                {errors.dataNascimento && <p>{errors.dataNascimento}</p>}
            </div>
        </div>
    );
}

export default DadosInfo;
