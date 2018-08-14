import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portfolioWeights = {
    balanced: {
       'US Stocks': 15.5,
       'US Mid-Cap': 2.5,
       'US Small-Cap': 5,
       'Foreign Stocks': 9,
       'Emerging Markets': 3,
       'Municipal Bonds': 34.5,
       'Inflation-Protected Bonds': 3.5,
       'Govt Bonds': 20.5,
       'High-Yield Bonds': 6.5
     },
     conservative: {
       'US Stocks': 22,
       'US Mid-Cap': 4,
       'US Small-Cap': 7,
       'Foreign Stocks': 12,
       'Emerging Markets': 4,
       'Municipal Bonds': 26.5,
       'Inflation-Protected Bonds': 2.5,
       'Govt Bonds': 16,
       'High-Yield Bonds': 5
     },
     growth: {
       'US Stocks': 35.5,
       'US Mid-Cap': 6,
       'US Small-Cap': 11.5,
       'Foreign Stocks': 20.5,
       'Emerging Markets': 6.5,
       'Municipal Bonds': 12,
       'Inflation-Protected Bonds': 0,
       'Govt Bonds': 8,
       'High-Yield Bonds': 0
     },
  };

  selectedRiskLevel: string = 'balanced'
  selectedRiskLevelChanges = (newRiskLevel: string) => this.selectedRiskLevel = newRiskLevel;
}
