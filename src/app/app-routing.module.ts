import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PostListComponent } from './post/post-list.component';
import { PostShowComponent } from './post/post-show.component';
import { PostNewComponent } from './post/post-new.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent },
    { path: 'posts',    component: PostListComponent},
    { path: 'posts/:id', component: PostShowComponent},
    { path: 'post/new', component: PostNewComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
