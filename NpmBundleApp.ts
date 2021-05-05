import { IAppAccessors, ILogger } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

// NOTE: `import` syntax is not supported,
// use `require` instead.
// import deps from './deps';
export class NpmBundleApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);

        const { _ } = require('./deps');
        console.log(_.VERSION, _.range(1, 100));
    }
}
