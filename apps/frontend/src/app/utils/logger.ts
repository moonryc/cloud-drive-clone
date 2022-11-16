import { environment } from '../../environments/environment';
import { noOpFn } from './noOpfunction';

type LogObj = Pick<
  typeof console,
  | 'log'
  | 'trace'
  | 'debug'
  | 'info'
  | 'warn'
  | 'error'
  | 'table'
  | 'group'
  | 'groupEnd'
>;

const blackHoleLogger: LogObj = {
  log: () => noOpFn,
  trace: () => noOpFn,
  debug: () => noOpFn,
  info: () => noOpFn,
  warn: () => noOpFn,
  error: () => noOpFn,
  table: () => noOpFn,
  group: () => noOpFn,
  groupEnd: () => noOpFn,
};

const loggerInstance: LogObj = environment.production
  ? blackHoleLogger
  : console;

export const logger = (): LogObj => loggerInstance;
