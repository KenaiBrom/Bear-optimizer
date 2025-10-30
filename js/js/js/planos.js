// ========================================
// BEAR OPTIMIZER PRO - PLANOS DE VENDA
// ========================================

const PLANOS = {
    start: {
        id: 'start',
        nome: 'Start',
        preco: 59.90,
        descricao: 'Ideal para iniciantes',
        duracao: 30, // dias
        recursos: [
            '✅ Diagnóstico Completo (CPU, RAM, FPS, GPU, Disco, Latência)',
            '✅ 40% dos Scripts e Comandos',
            '✅ Monitoramento em Tempo Real',
            '✅ Gráfico de Histórico 60s',
            '✅ Detecção Automática de Problemas',
            '✅ Relatório de Performance',
            '✅ Suporte por Email',
            '⏰ Válido por 30 dias'
        ],
        cor: 'blue',
        features: {
            diagnostico: true,
            scripts: 40,
            dpiConfig: false,
            gpuPanel: false,
            scriptsAvancados: false
        }
    },
    
    gamer: {
        id: 'gamer',
        nome: 'Gamer',
        preco: 79.90,
        descricao: 'Para quem joga sério',
        duracao: 30,
        recursos: [
            '✅ Diagnóstico Completo',
            '✅ 60% dos Scripts e Comandos',
            '✅ Configuração DPI Mouse',
            '✅ Configuração DPI Teclado',
            '✅ Painel NVIDIA Completo',
            '✅ Painel AMD Completo',
            '✅ Otimização para Jogos',
            '✅ Redução de Input Lag',
            '✅ Suporte Prioritário',
            '⏰ Válido por 30 dias'
        ],
        cor: 'purple',
        popular: true,
        features: {
            diagnostico: true,
            scripts: 60,
            dpiConfig: true,
            gpuPanel: true,
            scriptsAvancados: false
        }
    },
    
    progamer: {
        id: 'progamer',
        nome: 'Pro Gamer',
        preco: 99.90,
        descricao: 'Performance máxima competitiva',
        duracao: 30,
        recursos: [
            '✅ Diagnóstico Completo',
            '✅ 100% dos Scripts e Comandos',
            '✅ Configuração DPI Mouse Avançada',
            '✅ Configuração DPI Teclado Avançada',
            '✅ Painel NVIDIA PRO',
            '✅ Painel AMD PRO',
            '✅ Scripts Personalizados Ilimitados',
            '✅ Otimização Competitiva',
            '✅ Benchmark Avançado',
            '✅ Análise de Bottleneck',
            '✅ Suporte VIP 24/7',
            '⏰ Válido por 30 dias'
        ],
        cor: 'gold',
        features: {
            diagnostico: true,
            scripts: 100,
            dpiConfig: true,
            gpuPanel: true,
            scriptsAvancados: true
        }
    }
};

// Função para verificar se usuário tem acesso a um recurso
function verificarAcesso(planoAtual, nivelNecessario) {
    if (!planoAtual) return false;
    const plano = PLANOS[planoAtual];
    return plano && plano.features.scripts >= nivelNecessario;
}

// Função para calcular data de expiração
function calcularExpiracao(dataCompra, plano) {
    const data = new Date(dataCompra);
    const duracao = PLANOS[plano].duracao;
    data.setDate(data.getDate() + duracao);
    return data.toISOString();
}

// Função para verificar se plano expirou
function planoExpirado(dataExpiracao) {
    return new Date() > new Date(dataExpiracao);
}

// Função para dias restantes
function diasRestantes(dataExpiracao) {
    const diff = new Date(dataExpiracao) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
