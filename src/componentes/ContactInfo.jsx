import React from 'react';

function ContactInfo({ form, handleInputChange, errors }) {
    return (
        <div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label>Telefone:</label>
                <input
                type="text"
                name="telefone"
                value={form.telefone}
                onChange={handleInputChange}
                />
                {errors.telefone && <p>{errors.telefone}</p>}
            </div>
        </div>
    );
}

export default ContactInfo;
