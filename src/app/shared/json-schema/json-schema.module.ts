import { NgModule } from '@angular/core';
import { YelonFormModule, WidgetRegistry } from '@yelon/form';

import { SharedModule } from '../shared.module';

// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UeditorWidget } from './widgets/ueditor/ueditor.widget';

export const SCHEMA_THIRDS_COMPONENTS = [
  // TinymceWidget,
  // UeditorWidget
];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, YelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS]
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    // widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
  }
}
