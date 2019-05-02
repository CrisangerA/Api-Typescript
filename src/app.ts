import express, { Application } from 'express';
import morgan from 'morgan';
import { connect } from './database';
// Routes
import IndexRoutes from './routes/index.routes';

export class App {

    private app: Application ;

    constructor() {
        this.app = express();
        this.settings();
        connect();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', process.env.PORT || 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes () {
        this.app.use('/api/books',IndexRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port: ${this.app.get('port')}`)
    }

}