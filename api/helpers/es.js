    'use strict';

import Elasticsearch from 'elasticsearch'
// var Elasticsearch = require('elasticsearch')
var cilent = new Elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
})