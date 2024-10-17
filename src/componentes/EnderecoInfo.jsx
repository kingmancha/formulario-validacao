import React from 'react';

function EnderecoInfo({ form, handleInputChange, handleCepChange, errors }) {
    return (
        <div>
            <div>
                <label>CEP:</label>
                <input
                    type="text"
                    name="cep"
                    value={form.cep}
                    onChange={handleCepChange}
                    maxLength={9}
                />
                {errors.cep && <p>{errors.cep}</p>}
            </div>

            <div className="input-group"> 
                <div>
                    <label>Rua:</label>
                    <input
                        type="text"
                        name="rua"
                        value={form.rua}
                        onChange={handleInputChange}
                        readOnly
                    />
                    {errors.rua && <p>{errors.rua}</p>}
                </div>

                <div>
                    <label>Número:</label>
                    <input
                        type="text"
                        name="numero"
                        value={form.numero}
                        onChange={handleInputChange}
                    />
                    {errors.numero && <p>{errors.numero}</p>}
                </div>
            </div>

            <div className="input-group"> 
                <div>
                    <label>Cidade:</label>
                    <input
                        type="text"
                        name="cidade"
                        value={form.cidade}
                        onChange={handleInputChange}
                        readOnly
                    />
                </div>

                <div>
                    <label>Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        value={form.estado}
                        onChange={handleInputChange}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}

export default EnderecoInfo;
