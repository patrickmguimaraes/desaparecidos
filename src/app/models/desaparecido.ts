import { Ocorrencia } from "./ocorrencia";

export class Desaparecido {
    id?: number;
    nome?: string;
    idade?: number;
    sexo?: "MASCULINO" | "FEMININO";
    vivo?: boolean;
    urlFoto?: string;
    ultimaOcorrencia?: Ocorrencia;
}