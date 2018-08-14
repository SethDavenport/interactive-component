import { Component, Input, EventEmitter } from '@angular/core';

export type RiskLevel = 'balanced' | 'conservative' | 'growth';
export type PortfolioWeights = {
  [etfName: string]: number;
}

export type PortfolioWeightsByRiskLevel = {
  balanced: PortfolioWeights;
  conservative: PortfolioWeights;
  growth: PortfolioWeights;
}

@Component({
  selector: 'app-interactive-graph',
  templateUrl: './interactive-graph.component.html',
  styleUrls: ['./interactive-graph.component.css']
})
export class InteractiveGraphComponent {
  @Input() portfolioWeights: PortfolioWeights
  @Input() selectedRiskLevel: RiskLevel

  getDataPointLabels = () => Object.keys(this.portfolioWeights[this.selectedRiskLevel]);
  getDataPoint = (dataPointLabel: string) => this.portfolioWeights[this.selectedRiskLevel][dataPointLabel];
  getDataPointColor = (dataPointLabel: string) =>
}
