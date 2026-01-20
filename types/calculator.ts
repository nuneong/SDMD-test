export interface CostItem {
  id: string;
  name: string;
  hours: number; // Monthly hours
  cost: number; // Monthly cost in USD
  category?: string;
}

export interface CalculatorState {
  selectedItemIds: string[];
}

