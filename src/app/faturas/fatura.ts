export interface Fatura {
    id: number;
    numeroFatura: number;
    dataVencimento: Date;
    dataEmissao: Date;
    valor: number;
    status: string;
}