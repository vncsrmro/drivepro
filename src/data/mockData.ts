import {
    Instructor,
    Student,
    Lesson,
    Transaction,
    Document,
    Plan,
    AdminKPIs,
    SystemConfig,
    Conversation,
    ChatMessage,
    DaySchedule,
} from '@/types/types';

// ===== PLANS =====
export const planos: Plan[] = [
    {
        id: 'gratis',
        nome: 'Grátis',
        preco: 0,
        taxaComissao: 20,
        recursos: [
            'Perfil básico no Hub',
            'Até 10 aulas/mês',
            'Suporte por email',
        ],
    },
    {
        id: 'prata',
        nome: 'Prata',
        preco: 99,
        taxaComissao: 15,
        recursos: [
            'Perfil destacado',
            'Aulas ilimitadas',
            'Estatísticas básicas',
            'Suporte prioritário',
            'Selo verificado',
        ],
    },
    {
        id: 'ouro',
        nome: 'Ouro',
        preco: 199,
        taxaComissao: 10,
        destaque: true,
        seloElite: true,
        recursos: [
            'Selo Elite dourado',
            'Destaque na busca',
            'Aulas ilimitadas',
            'Estatísticas avançadas',
            'Suporte VIP 24/7',
            'Marketing promocional',
            'Menor comissão',
        ],
    },
];

// ===== INSTRUCTORS =====
export const instrutores: Instructor[] = [
    {
        id: '1',
        nome: 'Carlos Silva',
        email: 'carlos.silva@email.com',
        telefone: '(19) 99999-1111',
        foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        bio: 'Instrutor certificado há 15 anos. Especialista em nervosismo e medo de direção. Método calmo e paciente.',
        cidade: 'Americana',
        estado: 'SP',
        nota: 4.9,
        totalAvaliacoes: 127,
        aulasRealizadas: 1250,
        categoriasHabilitadas: ['A', 'B'],
        veiculo: {
            id: 'v1',
            marca: 'Toyota',
            modelo: 'Corolla',
            ano: 2023,
            placa: 'ABC-1234',
            transmissao: 'automatico',
            categoria: 'B',
        },
        plano: 'ouro',
        status: 'ativo',
        precoAula: 120,
        criadoEm: '2020-03-15',
        documentosVerificados: true,
    },
    {
        id: '2',
        nome: 'Ana Beatriz Costa',
        email: 'ana.costa@email.com',
        telefone: '(19) 99999-2222',
        foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
        bio: 'Instrutora especializada em condução defensiva e aulas para categoria A (motos). Paciência é meu diferencial!',
        cidade: 'Americana',
        estado: 'SP',
        nota: 4.8,
        totalAvaliacoes: 89,
        aulasRealizadas: 890,
        categoriasHabilitadas: ['A', 'B'],
        veiculo: {
            id: 'v2',
            marca: 'Honda',
            modelo: 'Civic',
            ano: 2022,
            placa: 'DEF-5678',
            transmissao: 'automatico',
            categoria: 'B',
        },
        plano: 'ouro',
        status: 'ativo',
        precoAula: 110,
        criadoEm: '2021-06-20',
        documentosVerificados: true,
    },
    {
        id: '3',
        nome: 'Roberto Mendes',
        email: 'roberto.mendes@email.com',
        telefone: '(19) 99999-3333',
        foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
        bio: 'Especialista em veículos pesados. Habilitado para categorias C, D e E. Experiência com caminhões e ônibus.',
        cidade: 'Americana',
        estado: 'SP',
        nota: 4.7,
        totalAvaliacoes: 64,
        aulasRealizadas: 520,
        categoriasHabilitadas: ['B', 'C', 'D', 'E'],
        veiculo: {
            id: 'v3',
            marca: 'Volkswagen',
            modelo: 'Polo',
            ano: 2023,
            placa: 'GHI-9012',
            transmissao: 'manual',
            categoria: 'B',
        },
        plano: 'prata',
        status: 'ativo',
        precoAula: 100,
        criadoEm: '2022-01-10',
        documentosVerificados: true,
    },
    {
        id: '4',
        nome: 'Fernanda Lima',
        email: 'fernanda.lima@email.com',
        telefone: '(19) 99999-4444',
        foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
        bio: 'Instrutora há 8 anos. Foco em iniciantes e pessoas com medo de dirigir. Aulas tranquilas e sem pressão.',
        cidade: 'Americana',
        estado: 'SP',
        nota: 4.6,
        totalAvaliacoes: 45,
        aulasRealizadas: 380,
        categoriasHabilitadas: ['B'],
        veiculo: {
            id: 'v4',
            marca: 'Fiat',
            modelo: 'Argo',
            ano: 2022,
            placa: 'JKL-3456',
            transmissao: 'manual',
            categoria: 'B',
        },
        plano: 'prata',
        status: 'ativo',
        precoAula: 90,
        criadoEm: '2022-08-05',
        documentosVerificados: true,
    },
    {
        id: '5',
        nome: 'Marcelo Santos',
        email: 'marcelo.santos@email.com',
        telefone: '(19) 99999-5555',
        foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
        bio: 'Instrutor credenciado. Aulas para todas as categorias. Preço acessível e horários flexíveis.',
        cidade: 'Americana',
        estado: 'SP',
        nota: 4.4,
        totalAvaliacoes: 32,
        aulasRealizadas: 210,
        categoriasHabilitadas: ['A', 'B', 'C'],
        veiculo: {
            id: 'v5',
            marca: 'Chevrolet',
            modelo: 'Onix',
            ano: 2021,
            placa: 'MNO-7890',
            transmissao: 'manual',
            categoria: 'B',
        },
        plano: 'gratis',
        status: 'ativo',
        precoAula: 80,
        criadoEm: '2023-02-18',
        documentosVerificados: true,
    },
    {
        id: '6',
        nome: 'Juliana Pereira',
        email: 'juliana.pereira@email.com',
        telefone: '(19) 99999-6666',
        foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
        bio: 'Nova no app! Instrutora formada recentemente, mas muito dedicada. Aguardando verificação de documentos.',
        cidade: 'Americana',
        estado: 'SP',
        nota: 0,
        totalAvaliacoes: 0,
        aulasRealizadas: 0,
        categoriasHabilitadas: ['B'],
        veiculo: {
            id: 'v6',
            marca: 'Hyundai',
            modelo: 'HB20',
            ano: 2023,
            placa: 'PQR-1234',
            transmissao: 'automatico',
            categoria: 'B',
        },
        plano: 'gratis',
        status: 'pendente',
        precoAula: 85,
        criadoEm: '2024-11-28',
        documentosVerificados: false,
    },
];

// ===== STUDENT =====
export const alunoLogado: Student = {
    id: 'a1',
    nome: 'João Pedro',
    email: 'joao.pedro@email.com',
    telefone: '(19) 98888-1234',
    foto: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=200&h=200&fit=crop&crop=face',
    cidade: 'Americana',
    estado: 'SP',
    categoriaDesejada: 'B',
    aulasCompletadas: 3,
    pacoteAulas: 20,
    criadoEm: '2024-10-15',
};

// ===== LESSONS =====
export const aulas: Lesson[] = [
    {
        id: 'l1',
        instrutorId: '1',
        alunoId: 'a1',
        data: '2024-12-05',
        horario: '09:00',
        duracao: 60,
        valor: 120,
        status: 'concluida',
        endereco: 'Av. Brasil, 1234 - Americana',
        avaliacaoAluno: 5,
        comentarioAluno: 'Excelente aula! Carlos é muito paciente.',
    },
    {
        id: 'l2',
        instrutorId: '1',
        alunoId: 'a1',
        data: '2024-12-08',
        horario: '10:00',
        duracao: 60,
        valor: 120,
        status: 'concluida',
        endereco: 'Av. Brasil, 1234 - Americana',
        avaliacaoAluno: 5,
        comentarioAluno: 'Segunda aula foi ainda melhor!',
    },
    {
        id: 'l3',
        instrutorId: '1',
        alunoId: 'a1',
        data: '2024-12-10',
        horario: '14:00',
        duracao: 60,
        valor: 120,
        status: 'concluida',
        endereco: 'Av. Brasil, 1234 - Americana',
        avaliacaoAluno: 5,
        comentarioAluno: 'Estou evoluindo muito!',
    },
    {
        id: 'l4',
        instrutorId: '1',
        alunoId: 'a1',
        data: '2024-12-12',
        horario: '09:00',
        duracao: 60,
        valor: 120,
        status: 'confirmada',
        endereco: 'Av. Brasil, 1234 - Americana',
    },
    {
        id: 'l5',
        instrutorId: '2',
        alunoId: 'a2',
        data: '2024-12-11',
        horario: '15:00',
        duracao: 60,
        valor: 110,
        status: 'confirmada',
        endereco: 'Rua das Flores, 567 - Americana',
    },
    {
        id: 'l6',
        instrutorId: '3',
        alunoId: 'a3',
        data: '2024-12-11',
        horario: '08:00',
        duracao: 60,
        valor: 100,
        status: 'agendada',
        endereco: 'Av. Principal, 890 - Americana',
    },
];

// ===== TRANSACTIONS =====
export const transacoes: Transaction[] = [
    {
        id: 't1',
        instrutorId: '1',
        aulaId: 'l1',
        valorBruto: 120,
        taxaComissao: 10,
        valorComissao: 12,
        valorLiquido: 108,
        status: 'liberado',
        criadoEm: '2024-12-05',
        liberadoEm: '2024-12-06',
    },
    {
        id: 't2',
        instrutorId: '1',
        aulaId: 'l2',
        valorBruto: 120,
        taxaComissao: 10,
        valorComissao: 12,
        valorLiquido: 108,
        status: 'liberado',
        criadoEm: '2024-12-08',
        liberadoEm: '2024-12-09',
    },
    {
        id: 't3',
        instrutorId: '1',
        aulaId: 'l3',
        valorBruto: 120,
        taxaComissao: 10,
        valorComissao: 12,
        valorLiquido: 108,
        status: 'pendente',
        criadoEm: '2024-12-10',
    },
    {
        id: 't4',
        instrutorId: '2',
        aulaId: 'l5',
        valorBruto: 110,
        taxaComissao: 10,
        valorComissao: 11,
        valorLiquido: 99,
        status: 'pendente',
        criadoEm: '2024-12-11',
    },
    {
        id: 't5',
        instrutorId: '3',
        aulaId: 'l6',
        valorBruto: 100,
        taxaComissao: 15,
        valorComissao: 15,
        valorLiquido: 85,
        status: 'pendente',
        criadoEm: '2024-12-11',
    },
];

// ===== DOCUMENTS (KYC) =====
export const documentos: Document[] = [
    {
        id: 'd1',
        instrutorId: '6',
        tipo: 'cnh',
        nomeArquivo: 'cnh_juliana_pereira.pdf',
        urlArquivo: '/documents/cnh_juliana.pdf',
        status: 'pendente',
        enviadoEm: '2024-11-28',
    },
    {
        id: 'd2',
        instrutorId: '6',
        tipo: 'certificado_instrutor',
        nomeArquivo: 'certificado_juliana.pdf',
        urlArquivo: '/documents/cert_juliana.pdf',
        status: 'pendente',
        enviadoEm: '2024-11-28',
    },
    {
        id: 'd3',
        instrutorId: '1',
        tipo: 'cnh',
        nomeArquivo: 'cnh_carlos_silva.pdf',
        urlArquivo: '/documents/cnh_carlos.pdf',
        status: 'aprovado',
        enviadoEm: '2020-03-15',
        analisadoEm: '2020-03-16',
    },
    {
        id: 'd4',
        instrutorId: '1',
        tipo: 'certificado_instrutor',
        nomeArquivo: 'certificado_carlos.pdf',
        urlArquivo: '/documents/cert_carlos.pdf',
        status: 'aprovado',
        enviadoEm: '2020-03-15',
        analisadoEm: '2020-03-16',
    },
];

// ===== CHAT =====
export const conversas: Conversation[] = [
    {
        id: 'c1',
        aulaId: 'l4',
        alunoId: 'a1',
        instrutorId: '1',
        criadoEm: '2024-12-10',
        mensagens: [
            {
                id: 'm1',
                remetenteId: 'a1',
                remetenteTipo: 'aluno',
                conteudo: 'Olá, Carlos! Confirmado para amanhã às 9h?',
                enviadoEm: '2024-12-11T08:30:00',
                lido: true,
            },
            {
                id: 'm2',
                remetenteId: '1',
                remetenteTipo: 'instrutor',
                conteudo: 'Bom dia, João! Confirmado sim! Te busco no endereço combinado.',
                enviadoEm: '2024-12-11T08:45:00',
                lido: true,
            },
            {
                id: 'm3',
                remetenteId: 'a1',
                remetenteTipo: 'aluno',
                conteudo: 'Perfeito! Até amanhã então 😊',
                enviadoEm: '2024-12-11T08:50:00',
                lido: false,
            },
        ],
    },
];

// ===== ADMIN KPIs =====
export const adminKPIs: AdminKPIs = {
    faturamentoMensal: {
        assinaturas: 2485, // (R$99 * 5) + (R$199 * 10)
        comissoes: 4320, // Média de comissões
        total: 6805,
    },
    gmv: 45800, // Gross Merchandise Value
    totalInstrutores: 156,
    instrutoresAtivos: 142,
    instrutoresPendentes: 8,
    totalAlunos: 1250,
    aulasRealizadasMes: 3840,
    repassesPendentes: 23,
    valorRepassesPendentes: 8540,
};

// ===== SYSTEM CONFIG =====
export const systemConfig: SystemConfig = {
    taxaComissaoGratis: 20,
    taxaComissaoPrata: 15,
    taxaComissaoOuro: 10,
    precoPlanoPrata: 99,
    precoPlanoOuro: 199,
};

// ===== SCHEDULE =====
export const getHorariosDisponiveis = (instrutorId: string): DaySchedule[] => {
    const hoje = new Date();
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const horarios = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

    return Array.from({ length: 7 }, (_, i) => {
        const data = new Date(hoje);
        data.setDate(data.getDate() + i + 1);

        return {
            data: data.toISOString().split('T')[0],
            diaSemana: diasSemana[data.getDay()],
            slots: horarios.map((h) => ({
                horario: h,
                disponivel: Math.random() > 0.3, // 70% chance of available
            })),
        };
    });
};

// ===== HELPER FUNCTIONS =====
export const getInstrutorById = (id: string): Instructor | undefined => {
    return instrutores.find((i) => i.id === id);
};

export const getInstrutoresAtivos = (): Instructor[] => {
    return instrutores.filter((i) => i.status === 'ativo');
};

export const getInstrutoresPendentes = (): Instructor[] => {
    return instrutores.filter((i) => i.status === 'pendente');
};

export const getDocumentosPendentes = (): Document[] => {
    return documentos.filter((d) => d.status === 'pendente');
};

export const getTransacoesInstrutor = (instrutorId: string): Transaction[] => {
    return transacoes.filter((t) => t.instrutorId === instrutorId);
};

export const getSaldoDisponivel = (instrutorId: string): number => {
    return transacoes
        .filter((t) => t.instrutorId === instrutorId && t.status === 'liberado')
        .reduce((acc, t) => acc + t.valorLiquido, 0);
};

export const getGanhosBrutosMes = (instrutorId: string): number => {
    const mesAtual = new Date().getMonth();
    return transacoes
        .filter((t) => {
            const txMes = new Date(t.criadoEm).getMonth();
            return t.instrutorId === instrutorId && txMes === mesAtual;
        })
        .reduce((acc, t) => acc + t.valorBruto, 0);
};

export const getProximasAulas = (instrutorId: string): Lesson[] => {
    const hoje = new Date().toISOString().split('T')[0];
    return aulas.filter(
        (a) =>
            a.instrutorId === instrutorId &&
            a.data >= hoje &&
            ['agendada', 'confirmada'].includes(a.status)
    );
};
