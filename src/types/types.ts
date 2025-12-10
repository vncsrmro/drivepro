// =============================================
// DIREÇÃO PRO - TYPE DEFINITIONS
// =============================================

// ===== ENUMS =====
export type CNHCategory = 'A' | 'B' | 'C' | 'D' | 'E';
export type TransmissionType = 'manual' | 'automatico';
export type PlanType = 'gratis' | 'prata' | 'ouro';
export type InstructorStatus = 'pendente' | 'ativo' | 'rejeitado' | 'suspenso';
export type LessonStatus = 'agendada' | 'confirmada' | 'em_andamento' | 'concluida' | 'cancelada';
export type TransactionStatus = 'pendente' | 'liberado' | 'pago' | 'cancelado';
export type DocumentType = 'cnh' | 'certificado_instrutor' | 'comprovante_residencia';
export type DocumentStatus = 'pendente' | 'aprovado' | 'rejeitado';

// ===== CORE ENTITIES =====

export interface Vehicle {
    id: string;
    marca: string;
    modelo: string;
    ano: number;
    placa: string;
    transmissao: TransmissionType;
    categoria: CNHCategory;
    foto?: string;
}

export interface Instructor {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    foto: string;
    bio: string;
    cidade: string;
    estado: string;
    nota: number;
    totalAvaliacoes: number;
    aulasRealizadas: number;
    categoriasHabilitadas: CNHCategory[];
    veiculo: Vehicle;
    plano: PlanType;
    status: InstructorStatus;
    precoAula: number;
    criadoEm: string;
    documentosVerificados: boolean;
}

export interface Student {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    foto?: string;
    cidade: string;
    estado: string;
    categoriaDesejada: CNHCategory;
    aulasCompletadas: number;
    pacoteAulas: number; // Total lessons in current package
    criadoEm: string;
}

export interface Lesson {
    id: string;
    instrutorId: string;
    alunoId: string;
    data: string;
    horario: string;
    duracao: number; // in minutes
    valor: number;
    status: LessonStatus;
    endereco?: string;
    observacoes?: string;
    avaliacaoAluno?: number;
    comentarioAluno?: string;
}

export interface Transaction {
    id: string;
    instrutorId: string;
    aulaId: string;
    valorBruto: number;
    taxaComissao: number; // percentage
    valorComissao: number;
    valorLiquido: number;
    status: TransactionStatus;
    criadoEm: string;
    liberadoEm?: string;
    pagoEm?: string;
}

export interface Document {
    id: string;
    instrutorId: string;
    tipo: DocumentType;
    nomeArquivo: string;
    urlArquivo: string;
    status: DocumentStatus;
    enviadoEm: string;
    analisadoEm?: string;
    motivoRejeicao?: string;
}

export interface Plan {
    id: PlanType;
    nome: string;
    preco: number;
    taxaComissao: number;
    recursos: string[];
    destaque?: boolean;
    seloElite?: boolean;
}

export interface BankAccount {
    banco: string;
    agencia: string;
    conta: string;
    tipoConta: 'corrente' | 'poupanca';
    titular: string;
    cpf: string;
    chavePix?: string;
}

export interface ChatMessage {
    id: string;
    remetenteId: string;
    remetenteTipo: 'aluno' | 'instrutor';
    conteudo: string;
    enviadoEm: string;
    lido: boolean;
}

export interface Conversation {
    id: string;
    aulaId: string;
    alunoId: string;
    instrutorId: string;
    mensagens: ChatMessage[];
    criadoEm: string;
}

// ===== ADMIN KPIs =====
export interface AdminKPIs {
    faturamentoMensal: {
        assinaturas: number;
        comissoes: number;
        total: number;
    };
    gmv: number; // Gross Merchandise Value
    totalInstrutores: number;
    instrutoresAtivos: number;
    instrutoresPendentes: number;
    totalAlunos: number;
    aulasRealizadasMes: number;
    repassesPendentes: number;
    valorRepassesPendentes: number;
}

export interface SystemConfig {
    taxaComissaoGratis: number;
    taxaComissaoPrata: number;
    taxaComissaoOuro: number;
    precoPlanoPrata: number;
    precoPlanoOuro: number;
}

// ===== HELPER TYPES =====
export interface FilterOptions {
    cidade?: string;
    categorias?: CNHCategory[];
    transmissao?: TransmissionType;
    precoMin?: number;
    precoMax?: number;
    notaMinima?: number;
}

export interface TimeSlot {
    horario: string;
    disponivel: boolean;
}

export interface DaySchedule {
    data: string;
    diaSemana: string;
    slots: TimeSlot[];
}
