import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgListLang } from "../../shared/svg-list-lang/svg-list-lang";
import { SvgListTech } from "../../shared/svg-list-tech/svg-list-tech";

@Component({
  selector: 'app-skills',
  imports: [SvgListLang, SvgListTech],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills { }
