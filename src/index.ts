import 'reflect-metadata'
import { SpreadsheetService } from "./service/SpreadsheetService";
import { AppDataSource } from './database/typeorm/postgresqlDataSource';
import routes from './routes';
const express = require('express');

AppDataSource.initialize().then(()=>{

    const app = express();
    const port = 8000;

    app.use(express.json());

    app.use(routes);
    
    const spreadsheetService = new SpreadsheetService();
    
    app.get('/id/:id', async (req: any, res: any) => {
        const { id } = req.params;
        res.send(await spreadsheetService.findById(id));
    });

    app.get('/teste',(req,res)=>{
        return res.json('deu certo');
    })
    
    return app.listen(port, async () => {
        console.log('server running...');
    });
})
