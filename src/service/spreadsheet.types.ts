export interface SpreadsheetRow {
    id: string,
    nome: string,
    cpf: string,
    data_nascimento: string,
    curso: string,
    data_associacao: string,
    url_foto: string,
    status: string
}

export function buildRow(row: any[]): SpreadsheetRow {
    return {
        id: row[0],
        nome: row[1],
        cpf: row[2],
        data_nascimento: row[3],
        curso: row[4],
        data_associacao: row[5],
        url_foto: row[6],
        status: row[7]
    };
}
