export default function handler(req, res) {
    const { key } = req.query;
    
    // Aqui você insere as chaves que gerar para seus clientes
    const chavesAutorizadas = [
        'G10-9928-X1', 
        'G10-4452-B2', 
        'PRO-ACC-001'
    ];

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (chavesAutorizadas.includes(key)) {
        return res.status(200).json({ authorized: true });
    } else {
        return res.status(401).json({ authorized: false });
    }
}
