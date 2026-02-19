// api/validar.js
export default function handler(req, res) {
    const { key } = req.query;
    
    // Lista de chaves autorizadas (vendas que você fez)
    const chavesAutorizadas = [
        'PRO-123456', 
        'USER-ADMIN-99',
        'CLIENTE-VIP-01'
    ];

    if (chavesAutorizadas.includes(key)) {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Permite que a extensão consulte
        return res.status(200).json({ 
            authorized: true, 
            token: "SESSAO_ATIVA_" + Date.now() 
        });
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(401).json({ authorized: false, message: "Chave inválida" });
    }
}
