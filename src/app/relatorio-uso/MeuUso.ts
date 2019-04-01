export interface MeuUso {
    id: number;
    dataHora: Date;
    veiculo: Array<Veiculo>;
    descricaoItemFatura: string;
    nomePontouso: string;
    valor: number;
}

export interface Veiculo {
    placaVeiculo: string;
    marca: string;
    modelo: string;
}