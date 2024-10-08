import { NgModule } from "@angular/core";
import { NavBar } from "./nav-bar.component";
import { NzIconModule  } from 'ng-zorro-antd/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'

import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule ({
  declarations:[NavBar],
  imports: [NzIconModule, MatButtonModule, MatCardModule, FlexLayoutModule ],
  exports: [NavBar]
}) 
export class NavBarModule{}
