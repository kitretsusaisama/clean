import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'
import { AuthGuard } from 'src/app/components/layout/Guard/auth.guard'

// layouts & notfound
import { LayoutAuthComponent } from 'src/app/layouts/Auth/auth.component'
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'
import { Error404Component } from 'src/app/pages/auth/404/404.component'

const COMPONENTS = [Error404Component]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/alpha',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'src/app/pages/dashboard/dashboard.module#DashboardModule',
      },
      // {
      //   path: 'ecommerce',
      //   loadChildren: 'src/app/pages/ecommerce/ecommerce.module#EcommerceModule',
      // },
      {
        path: 'apps',
        loadChildren: 'src/app/pages/apps/apps.module#AppsModule',
      },
      {
        path: 'icons',
        loadChildren: 'src/app/pages/icons/icons.module#IconsModule',
      },
      {
        path: 'charts',
        loadChildren: 'src/app/pages/charts/charts.module#ChartsModule',
      },
      {
        path: 'cards',
        loadChildren: 'src/app/pages/cards/cards.module#CardsModule',
      },
      {
        path: 'advanced',
        loadChildren: 'src/app/pages/advanced/advanced.module#AdvancedModule',
      },
      {
        path: 'widgets',
        loadChildren: 'src/app/pages/widgets/widgets.module#WidgetsModule',
      },
      {
        path: 'tables',
        loadChildren: 'src/app/pages/tables/tables.module#TablesModule',
      },
      {
        path: 'ui-kits',
        loadChildren: 'src/app/pages/ui-kits/ui-kits.module#UIKitsModule',
      },
    ],
  },
  {
    path: 'auth',
    component: LayoutAuthComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/pages/auth/auth.module#AuthModule',
      },
    ],
  },
  {
    path: '**',
    component: Error404Component,
    canActivate: [AuthGuard],
    data: { title: 'Not Found' },
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
