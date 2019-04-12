import { platformBrowserDynamic} from '@angular/platform-browser-dynamic'; //contains client side code... dependency injection etc.

import{ AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);