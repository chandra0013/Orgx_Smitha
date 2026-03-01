import { LucideIcon } from 'lucide-react';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface RiskTrigger {
  feature: string;
  raw_key: string;
  impact: number;
  direction: 'increasing_risk' | 'protective';
  current_value: number;
}

export interface RiskAssessment {
  risk_score: number;
  risk_level: RiskLevel;
  dropout_probability: number;
  top_triggers: RiskTrigger[];
  assessed_at: string;
}

export interface Student {
  id: string;
  student_id: string;
  name: string;
  program: string;
  year_of_study: number;
  advisor_id: string;
  avatar?: string;
}

export interface StudentRiskRow extends Student {
  current_risk: RiskAssessment;
  risk_history: { date: string; score: number }[];
}

export interface NavItem {
  icon: LucideIcon;
  label: string;
  id: string;
  badge?: string;
}
