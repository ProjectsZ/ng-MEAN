import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Services*/
import { PostService } from './posts/post.service';


/* Components */
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDataListComponent } from './posts/post-data-list/post-data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostDataListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
