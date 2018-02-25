import { RouterModule, Route } from '@angular/router';
import { CatsByOwnerGenderComponent } from './cats-by-owner-gender/cats-by-owner-gender.component';

const routes: Route[] = [
    { path: '', component: CatsByOwnerGenderComponent }
]

export const AppRoutesModule = RouterModule.forRoot(routes)
