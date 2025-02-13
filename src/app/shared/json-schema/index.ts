import type { SFWidgetProvideConfig } from '@yelon/form';
// import { withCascaderWidget } from '@yelon/form/widgets/cascader';

import { TestWidget } from './test/test.widget';

export const SF_WIDGETS: SFWidgetProvideConfig[] = [
  { KEY: TestWidget.KEY, type: TestWidget }
  // Non-built-in widget registration method
  // withCascaderWidget()
];
