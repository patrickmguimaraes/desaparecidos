import { Cartaz } from "./cartaz";
import { OcorrenciaEntrevista } from "./ocorrencia-entrevista";

export class Ocorrencia {
    ocoId?: number;
    dtDesaparecimento?: Date;
    dataLocalizacao?: Date;
    encontradoVivo?: boolean;
    localDesaparecimentoConcat?: string;
    ocorrenciaEntrevDesapDTO?: OcorrenciaEntrevista;
    listaCartaz?: Array<Cartaz>;
}