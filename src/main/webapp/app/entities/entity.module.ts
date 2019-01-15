import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AutomationwebClientModule } from './client/client.module';
import { AutomationwebSuiteModule } from './suite/suite.module';
import { AutomationwebSuiteTestModule } from './suite-test/suite-test.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AutomationwebClientModule,
        AutomationwebSuiteModule,
        AutomationwebSuiteTestModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AutomationwebEntityModule {}
