import { SpreadsheetRow } from "./spreadsheet.types";
import { SpreadsheetApiService } from "./SpreadsheetApiService";

export class SpreadsheetService {

    spreadsheetApiService = new SpreadsheetApiService();

    async findById(id: string): Promise<SpreadsheetRow | null> {
        await this.spreadsheetApiService.init();

        const sheet = await this.spreadsheetApiService.getSheet();

        return sheet.find(row => row.id === id) || null;
    }

}