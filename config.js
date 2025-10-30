// ========================================
// BEAR OPTIMIZER PRO - CONFIGURAÇÕES
// ========================================

const BEAR_CONFIG = {
    // Informações do App
    appName: 'Bear Optimizer Pro',
    version: '1.0.0',
    
    // Pagamento PIX
    pix: {
        chave: '54c2671d-d9da-422b-8ba8-cdd35a8af6e0',
        nomeRecebedor: 'Bear Optimizer Pro',
        cidade: 'Brasilia'
    },
    
    // Mercado Pago (Configure suas credenciais)
    mercadoPago: {
        publicKey: 'APP_USR-XXXXXXXX-XXXXXXXX',
        accessToken: 'APP_USR-XXXXXXXX-XXXXXXXX'
    },
    
    // Discord
    discord: {
        invite: 'https://discord.gg/7xhDCvrm',
        serverName: 'Bear Optimizer Community'
    },
    
    // Admin
    admin: {
        senhaAcesso: 'bear2025' // Mude para sua senha
    },
    
    // Thresholds de Performance
    thresholds: {
        cpu: { good: 50, medium: 80 },
        memory: { good: 60, medium: 85 },
        fps: { good: 60, medium: 30 },
        latency: { good: 50, medium: 100 },
        disk: { good: 40, medium: 70 },
        gpu: { good: 60, medium: 90 }
    }
};

// Função para gerar código PIX
function gerarPixCopiaECola(valor, descricao) {
    const valorFormatado = valor.toFixed(2);
    
    const payload = [
        '000201',
        '26580014BR.GOV.BCB.PIX',
        `0136${BEAR_CONFIG.pix.chave}`,
        '52040000',
        '5303986',
        `5406${valorFormatado}`,
        '5802BR',
        `5913${BEAR_CONFIG.pix.nomeRecebedor}`,
        `6008${BEAR_CONFIG.pix.cidade}`,
        `62070503***`,
        '6304'
    ].join('');

    const crc = calcularCRC16(payload);
    return payload + crc;
}

function calcularCRC16(str) {
    let crc = 0xFFFF;
    for (let i = 0; i < str.length; i++) {
        crc ^= str.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc = crc << 1;
            }
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}
