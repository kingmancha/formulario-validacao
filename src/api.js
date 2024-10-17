export const fetchAddress = async (cep) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        return null;
        }
    };
    