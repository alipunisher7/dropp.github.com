import { Component, OnInit, Input } from '@angular/core';
import { OperatorService } from 'services'
import { IOrganization } from 'models'

@Component({
  selector: 'ts-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationsComponent implements OnInit {
  @Input() organization: IOrganization;

  constructor(private _operatorservice: OperatorService) { }

  searchOrganization() {

  }

  ngOnInit() {
  }

  OnSearch() {

  }
}
