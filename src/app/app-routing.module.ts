import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NonogramComponent } from './nonogram/nonogram.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { CalmComponent } from './calm/calm.component';
import { StudyComponent } from './study/study.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile1Component } from './profile1/profile1.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
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
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './edit-bookmark/edit-bookmark.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,
  {
    path: "nonogram",
    component: NonogramComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "forum",
    component: ForumComponent
  }, {
    path: "calm",
    component: CalmComponent
  },
  {
    path: "study",
    component: StudyComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "d1",
    component: Dashboard1Component
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "profile1",
    component: Profile1Component
  }
  ,
  {
    path: "management",
    component: ManagementComponent
  },
  {
    path: "management/uploadsched",
    component: UploadschedComponent
  },
  {
    path: "events",
    component: EventsComponent
  },
  {
    path: "addevent",
    component: AddeventComponent
  },
  {
    path: "beach",
    component: BeachComponent
  },
  {
    path: "management/viewscedule",
    component: ViewsceduleComponent
  },
  {
    path: "events/hashtag",
    component: HashtagComponent
  }
  ,
  {
    path: "signt",
    component: SigntComponent
  },
  {
    path: "texttrans",
    component: TexttransComponent
  }, {
    path: "chats",
    component: ChatsComponent
  },
  {
    path: "temple",
    component: TempleinjapanComponent
  },
  {
    path: "island",
    component: IslandComponent
  },
  {
    path: "meditate",
    component: MeditateComponent
  },
  {
    path: "funactivity",
    component: FunActivityComponent
  },
  { path: 'productivity/bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'productivity/bookmarks/add', component: AddBookmarkComponent },
  { path: 'productivity/bookmarks/manage', component: ManageBookmarksComponent, children: [
    { path: 'productivity/:id', component: EditBookmarkComponent }
  ] },
  { path: 'productivity/todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'productivity/todos/add', component: AddTodoComponent },
  { path: 'productivity/todos/:id', component: EditTodoComponent },
  { path: 'productivity/notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'productivity/notes/add', component: AddNoteComponent },
  { path: 'productivity/notes/:id', component: EditNoteComponent },
  { path: 'productivity', component: ProductivityComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {path:'saferoom',component: SaferoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
