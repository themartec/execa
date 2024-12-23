#!/usr/bin/env node
import {setTimeout} from 'node:timers/promises';
import {sendMessage, getOneMessage} from '../../index.js';

await setTimeout(1e3);
await sendMessage(await getOneMessage());
