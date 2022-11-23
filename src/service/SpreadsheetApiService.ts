import * as fs from 'fs';
import { google } from 'googleapis';
import { CREDENTIALS_PATH, SCOPES, TOKEN_PATH } from './constants';
import { authenticate } from '@google-cloud/local-auth';
import { buildRow, SpreadsheetRow } from './spreadsheet.types';

// authorize().then(listMajors).catch(console.error);

async function loadSavedCredentialsIfExist() {
    try {
        const content = fs.readFileSync(TOKEN_PATH).toString();
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}

async function saveCredentials(client: any) {
    const content = fs.readFileSync(CREDENTIALS_PATH).toString();
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });

    fs.writeFileSync(TOKEN_PATH, payload);
}

async function authorize() {
    let client: any = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }

    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });

    if (client.credentials) {
        await saveCredentials(client);
    }

    return client;
}

export class SpreadsheetApiService {

    auth: any = null;
    sheets: any = null;
    spreadsheetId = '10OK2Byi381DbTLJzhfCPw4A2OQoPdIZafKBvejd0t0o';

    constructor() {
    }

    async init() {
        if (!this.auth)
            this.auth = await authorize();

        if (!this.sheets)
            this.sheets = await google.sheets({ version: 'v4', auth: this.auth });
    }

    async getSheet(): Promise<SpreadsheetRow[]> {
        const res = await this.sheets.spreadsheets.values.get({
            spreadsheetId: this.spreadsheetId,
            range: 'A:H'
        });

        const rows: any[] = res.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }

        console.log(rows.slice(1));
        return rows.slice(1).map(buildRow);
    }

}