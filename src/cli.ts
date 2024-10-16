#!/usr/bin/env node
import yargs from 'yargs/yargs';

import * as init from './cli/init.js';
import * as sync from './cli/sync.js';

yargs(process.argv.slice(2)).command(init).command(sync).demandCommand().help().argv;
