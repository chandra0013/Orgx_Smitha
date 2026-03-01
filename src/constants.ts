import { StudentRiskRow } from './types';

export const MOCK_STUDENTS: StudentRiskRow[] = [
  {
    id: '1',
    student_id: 'STU20240001',
    name: 'Priya Sharma',
    program: 'Computer Science',
    year_of_study: 3,
    advisor_id: 'ADV001',
    current_risk: {
      risk_score: 82.4,
      risk_level: 'HIGH',
      dropout_probability: 0.78,
      assessed_at: new Date().toISOString(),
      top_triggers: [
        { feature: 'Weekly LMS Activity', raw_key: 'lms_logins', impact: 24.5, direction: 'increasing_risk', current_value: 2 },
        { feature: 'Assignment Delay', raw_key: 'delay', impact: 18.2, direction: 'increasing_risk', current_value: 72 },
        { feature: 'Class Attendance', raw_key: 'attendance', impact: 12.4, direction: 'increasing_risk', current_value: 0.45 },
        { feature: 'Peer Interaction', raw_key: 'peer', impact: 8.1, direction: 'protective', current_value: 0.85 }
      ]
    },
    risk_history: [
      { date: '2024-01-01', score: 45 },
      { date: '2024-01-08', score: 48 },
      { date: '2024-01-15', score: 55 },
      { date: '2024-01-22', score: 62 },
      { date: '2024-01-29', score: 75 },
      { date: '2024-02-05', score: 82 }
    ]
  },
  {
    id: '2',
    student_id: 'STU20240002',
    name: 'Arjun Mehta',
    program: 'Engineering',
    year_of_study: 2,
    advisor_id: 'ADV001',
    current_risk: {
      risk_score: 12.5,
      risk_level: 'LOW',
      dropout_probability: 0.05,
      assessed_at: new Date().toISOString(),
      top_triggers: [
        { feature: 'Class Attendance', raw_key: 'attendance', impact: 15.2, direction: 'protective', current_value: 0.98 },
        { feature: 'Weekly LMS Activity', raw_key: 'lms_logins', impact: 10.1, direction: 'protective', current_value: 15 }
      ]
    },
    risk_history: [
      { date: '2024-01-01', score: 15 },
      { date: '2024-01-08', score: 14 },
      { date: '2024-01-15', score: 12 },
      { date: '2024-01-22', score: 13 },
      { date: '2024-01-29', score: 12 },
      { date: '2024-02-05', score: 12 }
    ]
  },
  {
    id: '3',
    student_id: 'STU20240003',
    name: 'Sara Chen',
    program: 'Business',
    year_of_study: 4,
    advisor_id: 'ADV001',
    current_risk: {
      risk_score: 45.8,
      risk_level: 'MEDIUM',
      dropout_probability: 0.32,
      assessed_at: new Date().toISOString(),
      top_triggers: [
        { feature: 'Mood Trend', raw_key: 'sentiment', impact: 14.2, direction: 'increasing_risk', current_value: 4.2 },
        { feature: 'Late Night Activity', raw_key: 'night_ratio', impact: 9.5, direction: 'increasing_risk', current_value: 0.65 }
      ]
    },
    risk_history: [
      { date: '2024-01-01', score: 30 },
      { date: '2024-01-08', score: 32 },
      { date: '2024-01-15', score: 35 },
      { date: '2024-01-22', score: 40 },
      { date: '2024-01-29', score: 42 },
      { date: '2024-02-05', score: 45 }
    ]
  },
  {
    id: '4',
    student_id: 'STU20240004',
    name: 'Mohammed Al-Rashid',
    program: 'Psychology',
    year_of_study: 1,
    advisor_id: 'ADV001',
    current_risk: {
      risk_score: 68.2,
      risk_level: 'HIGH',
      dropout_probability: 0.62,
      assessed_at: new Date().toISOString(),
      top_triggers: [
        { feature: 'Consecutive Absences', raw_key: 'absences', impact: 22.1, direction: 'increasing_risk', current_value: 5 },
        { feature: 'LMS Engagement', raw_key: 'lms_logins', impact: 15.4, direction: 'increasing_risk', current_value: 1 }
      ]
    },
    risk_history: [
      { date: '2024-01-01', score: 20 },
      { date: '2024-01-08', score: 25 },
      { date: '2024-01-15', score: 35 },
      { date: '2024-01-22', score: 50 },
      { date: '2024-01-29', score: 60 },
      { date: '2024-02-05', score: 68 }
    ]
  }
];
