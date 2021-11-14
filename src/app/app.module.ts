import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { WindowService } from './services/window.service';

import { NonogramComponent } from './nonogram/nonogram.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalmComponent } from './calm/calm.component';
import { StudyComponent } from './study/study.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { CardsComponent } from './cards/cards.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { from } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ViewsceduleComponent } from './viewscedule/viewscedule.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { SigntComponent } from './signt/signt.component';
import { TexttransComponent } from './texttrans/texttrans.component';
import { ChatsComponent } from './chats/chats.component';
import { BeachComponent } from './beach/beach.component';
import { TempleinjapanComponent } from './templeinjapan/templeinjapan.component';
import { IslandComponent } from './island/island.component';
import { MeditateComponent } from './meditate/meditate.component';
import { FunActivityComponent } from './fun-activity/fun-activity.component';
import { ProductivityComponent } from './productivity/productivity.component';

import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { BookmarkTileComponent } from './bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';
import { SaferoomComponent } from './saferoom/saferoom.component';


@NgModule({
  declarations: [
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent,
    AppComponent,
    SigninComponent,
    HomeComponent,
    NonogramComponent,
    DashboardComponent,
    ForumComponent,
    NavbarComponent,
    CalmComponent,
    StudyComponent,
    SearchComponent,
    NewsComponent,
    CardsComponent,
    Dashboard1Component,
    ProfileComponent,
    Profile1Component,
    ManagementComponent,
    UploadschedComponent,
    EventsComponent,
    AddeventComponent,
    ViewsceduleComponent,
    HashtagComponent,
    SigntComponent,
    TexttransComponent,
    ChatsComponent,
    BeachComponent,
    TempleinjapanComponent,
    IslandComponent,
    MeditateComponent,
    FunActivityComponent,
    ProductivityComponent,
    SaferoomComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    NoopAnimationsModule,
    MatSidenavModule ,
    MatSelectModule
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
