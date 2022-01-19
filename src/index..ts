import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import routes from './src/routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(logger);

app.use(json({ limit: '50mb' }));
app.use(
    urlencoded({
        extended: false,
    })
);

app.use(routes);

app.use(errorHandler);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

export default app;
