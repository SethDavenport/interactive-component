import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-risk-level-selector',
  templateUrl: './risk-level-selector.component.html',
  styleUrls: ['./risk-level-selector.component.css']
})
export class RiskLevelSelectorComponent {
  @Input() allRiskLevels: string[];
  @Input() selectedRiskLevel: string;
  @Output() selectedRiskLevelChanges = new EventEmitter<string>();
}
