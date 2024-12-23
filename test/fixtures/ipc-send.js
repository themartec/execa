#!/usr/bin/env node
import {argv} from 'node:process';
import {sendMessage} from '../../index.js';
import {foobarString} from '../helpers/input.js';

const message = argv[2] || foobarString;
await sendMessage(message);
