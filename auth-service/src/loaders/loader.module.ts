import { DynamicModule, Module } from '@nestjs/common';
import { sync as globSync } from 'fast-glob';
import { join } from 'path';

@Module({})
export class LoaderModule {
  static forRoot(): DynamicModule {
    const modules = [];
    const moduleNames = globSync(join(__dirname, '../modules/**/*.module.js'));
    console.log(moduleNames)
    for (const moduleName of moduleNames) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      modules.push(require(moduleName)?.default);
    }
    return {
      module: LoaderModule,
      imports: modules,
    };
  }
}
