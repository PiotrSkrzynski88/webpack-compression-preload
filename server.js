const express = require('express');

const app = express();

app
    .use('*', (req, res, next) => {
        if (req.baseUrl.endsWith('gz')) {
            res.set('Content-encoding', 'gzip');
        }

        next();
    })
    .use(express.static('dist'))
    .listen(3001, () => {
        console.log('Listening on http://localhost:3001');
    });
