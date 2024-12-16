import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AnalyticComponent} from './components/analytic/analytic.component';
import {CrmComponent} from './components/crm/crm.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {LeafletMapsComponent} from './components/leaflet-maps/leaflet-maps.component';
import {AcademyComponent} from './components/academy/academy.component';
import {ListUsersComponent} from './components/users/list-users/list-users.component';
import {SecurityComponent} from './components/users/view/security/security.component';
import {NotificationsComponent} from './components/users/view/notifications/notifications.component';
import {ConnectionsComponent} from './components/users/view/connections/connections.component';
import {AccountComponent} from './components/users/view/account/account.component';
import {ChatComponent} from './components/chat/chat.component';
import {CollapsedMenuComponent} from './components/collapsed-menu/collapsed-menu.component';
import {ContentNavbarComponent} from './components/content-navbar/content-navbar.component';
import {DocumentationComponent} from './components/documentation/documentation.component';
import {EmailComponent} from './components/email/email.component';
import {FormValidationComponent} from './components/form-validation/form-validation.component';
import {HorizontalComponent} from './components/horizontal/horizontal.component';
import {KanbanComponent} from './components/kanban/kanban.component';
import {LogisticsComponent} from './components/logistics/logistics.component';
import {ModalExemplesComponent} from './components/modal-exemples/modal-exemples.component';
import {ProfilComponent} from './components/profil/profil.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {TablesComponent} from './components/tables/tables.component';
import {BillingComponent} from './components/users/view/billing/billing.component';
import {BasicComponent} from './components/authentifications/login/basic/basic.component';



export const routes: Routes = [

  {path: 'board', component: DashboardComponent},
  {path: '', redirectTo: 'board', pathMatch: 'full'},
  {path: "login_basic",component: BasicComponent},
  //{path: "forgot_password_cover", component: CoverComponent},
  //{path: "login_basic", component: BasicComponent},

  {
    path: 'dashboard', children: [
      {path: "analytic", component: AnalyticComponent},
      {path: "crm", component: CrmComponent},
      {path: "calendar", component: CalendarComponent},
      {path: "leafket_maps", component: LeafletMapsComponent},
      {path: "academy", component: AcademyComponent},
      {path: "academy", component: AcademyComponent},
      {path: "academy", component: AcademyComponent},
      {path: "list_users", component: ListUsersComponent},
      {path: "security_users", component: SecurityComponent},
      {path: "notification_users", component: NotificationsComponent},
      {path: "connections_users", component: ConnectionsComponent},
      {path: "account_users", component: AccountComponent},
      {path: "chat", component: ChatComponent},
      {path: "calendar", component: CalendarComponent},
      {path: "collapsed_menu", component: CollapsedMenuComponent},
      {path: "content_navbar", component: ContentNavbarComponent},
      {path: "documentation", component: DocumentationComponent},
      {path: "email", component: EmailComponent},
      {path: "form_validation", component: FormValidationComponent},
      {path: "horizontal", component: HorizontalComponent},
      {path: "kanban", component: KanbanComponent},
      {path: "leaflet_maps", component: LeafletMapsComponent},
      {path: "logistics", component: LogisticsComponent},
      {path: "modal_exemples", component: ModalExemplesComponent},
      {path: "profil", component: ProfilComponent},
      {path: "tables", component: TablesComponent},
      {path: "billing_plan", component:   BillingComponent},


    ]
  }

];






