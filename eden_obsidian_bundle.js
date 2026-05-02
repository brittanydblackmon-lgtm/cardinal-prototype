/* Eden + Obsidian Core bundle — inserted into index.html main script (May 2, 2026) */
(function () {
'use strict';
var CD = window.CARDINAL_DATA;
if (!CD) return;

function _iso(daysFromNow, hours) {
  var d = new Date();
  d.setUTCDate(d.getUTCDate() + (daysFromNow || 0));
  if (hours) d.setUTCHours(hours, 0, 0, 0);
  return d.toISOString();
}

var BIAS_AD = [
  { modelId: 'Personnel Assignment v2.4', di: 0.67, equalizedOdds: 0.18, demographicParity: 0.84, calibration: 0.91, topProxyVariable: { name: 'demographic_classification', correlation: 0.81, correlatesWith: 'race' }, affectedCohort: { totalCount: 847, breakdownByDemo: { Hispanic: 187, Black: 198, White: 412, Asian: 102, Other: 47 } }, status: 'Critical', trend30d: 'up' },
  { modelId: 'Mission Readiness v1.1', di: 0.91, equalizedOdds: 0.07, demographicParity: 0.95, calibration: 0.94, topProxyVariable: { name: 'deployment_history', correlation: 0.45, correlatesWith: 'geography' }, affectedCohort: { totalCount: 0, breakdownByDemo: {} }, status: 'Watch', trend30d: 'down' },
  { modelId: 'Fraud Detection v3.2', di: 0.97, equalizedOdds: 0.04, demographicParity: 0.98, calibration: 0.96, topProxyVariable: { name: 'credential_recency', correlation: 0.32, correlatesWith: 'tenure' }, affectedCohort: { totalCount: 0, breakdownByDemo: {} }, status: 'Passing', trend30d: 'flat' },
  { modelId: 'Maintenance Routing v1.2', di: 0.78, equalizedOdds: 0.12, demographicParity: 0.88, calibration: 0.92, topProxyVariable: { name: 'base_assignment', correlation: 0.58, correlatesWith: 'race' }, affectedCohort: { totalCount: 124, breakdownByDemo: { Hispanic: 38, Black: 41, White: 32, Asian: 9, Other: 4 } }, status: 'Watch', trend30d: 'up' }
];
var FRAUD_AD = [
  { modelId: 'Personnel Assignment v2.4', syntheticIdentityRate: 89, behavioralAnomalyRate: 87, clusterFraudRate: 91, velocityFraudRate: 88, topFraudPattern: { type: 'Credential synthesis', casesDetected: 12, dollarsBlocked: 340000 }, biasFraudConnection: { caseCount: 7, summary: 'Hispanic technicians denied premium-base placement (bias) — credential verification skipped on denial pattern, allowing 7 synthetic credential ring members through' }, status: 'Watch', trend30d: 'flat' },
  { modelId: 'Mission Readiness v1.1', syntheticIdentityRate: 93, behavioralAnomalyRate: 91, clusterFraudRate: 92, velocityFraudRate: 90, topFraudPattern: { type: 'Velocity anomaly', casesDetected: 4, dollarsBlocked: 89000 }, biasFraudConnection: { caseCount: 0, summary: 'No bias-fraud overlap detected' }, status: 'Passing', trend30d: 'flat' },
  { modelId: 'Fraud Detection v3.2', syntheticIdentityRate: 95, behavioralAnomalyRate: 93, clusterFraudRate: 94, velocityFraudRate: 92, topFraudPattern: { type: 'Cluster fraud ring', casesDetected: 23, dollarsBlocked: 1240000 }, biasFraudConnection: { caseCount: 0, summary: 'No bias-fraud overlap' }, status: 'Passing', trend30d: 'up' },
  { modelId: 'Maintenance Routing v1.2', syntheticIdentityRate: 87, behavioralAnomalyRate: 84, clusterFraudRate: 86, velocityFraudRate: 85, topFraudPattern: { type: 'Identity recycling', casesDetected: 6, dollarsBlocked: 78000 }, biasFraudConnection: { caseCount: 2, summary: 'Hispanic maintenance crew at Bragg flagged disproportionately (bias) — 2 actual fraud cases missed in opposite cohort due to over-flagging' }, status: 'Watch', trend30d: 'down' }
];
var BIAS_FIN = [
  { modelId: 'Credit Scoring v3.4', di: 0.74, equalizedOdds: 0.16, demographicParity: 0.77, calibration: 0.89, topProxyVariable: { name: 'zip_code', correlation: 0.82, correlatesWith: 'race' }, affectedCohort: { totalCount: 1203, breakdownByDemo: { Black: 412, Hispanic: 318, White: 287, Asian: 124, Other: 62 } }, status: 'Critical', trend30d: 'up' },
  { modelId: 'Fraud Screening v2.7', di: 0.93, equalizedOdds: 0.05, demographicParity: 0.96, calibration: 0.94, topProxyVariable: { name: 'device_fingerprint_density', correlation: 0.28, correlatesWith: 'none' }, affectedCohort: { totalCount: 0, breakdownByDemo: {} }, status: 'Passing', trend30d: 'flat' },
  { modelId: 'Underwriting v4.1', di: 0.86, equalizedOdds: 0.11, demographicParity: 0.87, calibration: 0.91, topProxyVariable: { name: 'employer_sector_code', correlation: 0.52, correlatesWith: 'race' }, affectedCohort: { totalCount: 89, breakdownByDemo: { Black: 24, Hispanic: 19, White: 31, Asian: 12, Other: 3 } }, status: 'Watch', trend30d: 'up' },
  { modelId: 'Collections AI v1.3', di: 0.81, equalizedOdds: 0.09, demographicParity: 0.89, calibration: 0.90, topProxyVariable: { name: 'neighborhood_risk_index', correlation: 0.48, correlatesWith: 'zip' }, affectedCohort: { totalCount: 56, breakdownByDemo: { Black: 18, Hispanic: 14, White: 17, Asian: 5, Other: 2 } }, status: 'Watch', trend30d: 'down' }
];
var FRAUD_FIN = [
  { modelId: 'Credit Scoring v3.4', syntheticIdentityRate: 91, behavioralAnomalyRate: 88, clusterFraudRate: 90, velocityFraudRate: 86, topFraudPattern: { type: 'Synthetic identity at ZIP clusters', casesDetected: 47, dollarsBlocked: 2300000 }, biasFraudConnection: { caseCount: 12, summary: 'ZIP-cluster bias gaps masked synthetic-identity rings — 12 linked cases where adverse-action friction reduced verification depth' }, status: 'Watch', trend30d: 'flat' },
  { modelId: 'Fraud Screening v2.7', syntheticIdentityRate: 94, behavioralAnomalyRate: 92, clusterFraudRate: 93, velocityFraudRate: 91, topFraudPattern: { type: 'Device farm velocity', casesDetected: 31, dollarsBlocked: 1890000 }, biasFraudConnection: { caseCount: 2, summary: 'Minor overlap: high-ZIP-risk cohorts saw both ECOA friction and lighter fraud checks' }, status: 'Passing', trend30d: 'up' },
  { modelId: 'Underwriting v4.1', syntheticIdentityRate: 88, behavioralAnomalyRate: 85, clusterFraudRate: 87, velocityFraudRate: 84, topFraudPattern: { type: 'Shell employer ring', casesDetected: 9, dollarsBlocked: 420000 }, biasFraudConnection: { caseCount: 1, summary: 'Single case: sector proxy bias correlated with missed employer verification' }, status: 'Watch', trend30d: 'down' },
  { modelId: 'Collections AI v1.3', syntheticIdentityRate: 86, behavioralAnomalyRate: 83, clusterFraudRate: 85, velocityFraudRate: 82, topFraudPattern: { type: 'Payment velocity spike', casesDetected: 14, dollarsBlocked: 310000 }, biasFraudConnection: { caseCount: 0, summary: 'No bias-fraud overlap' }, status: 'Passing', trend30d: 'flat' }
];
var BIAS_HEALTH = [
  { modelId: 'Claims Adjudication v1.9', di: 0.64, equalizedOdds: 0.19, demographicParity: 0.76, calibration: 0.88, topProxyVariable: { name: 'age_cost_proxy', correlation: 0.81, correlatesWith: 'age' }, affectedCohort: { totalCount: 2847, breakdownByDemo: { '65+': 1842, '50-64': 612, 'Under 50': 393 } }, status: 'Critical', trend30d: 'flat' },
  { modelId: 'Diagnosis Support v2.3', di: 0.89, equalizedOdds: 0.08, demographicParity: 0.93, calibration: 0.93, topProxyVariable: { name: 'historical_cost_band', correlation: 0.41, correlatesWith: 'disability' }, affectedCohort: { totalCount: 156, breakdownByDemo: { '65+': 48, '50-64': 52, 'Under 50': 56 } }, status: 'Watch', trend30d: 'up' },
  { modelId: 'Prior Auth v1.5', di: 0.94, equalizedOdds: 0.05, demographicParity: 0.97, calibration: 0.95, topProxyVariable: { name: 'provider_tier_score', correlation: 0.29, correlatesWith: 'network' }, affectedCohort: { totalCount: 0, breakdownByDemo: {} }, status: 'Passing', trend30d: 'flat' }
];
var FRAUD_HEALTH = [
  { modelId: 'Claims Adjudication v1.9', syntheticIdentityRate: 88, behavioralAnomalyRate: 85, clusterFraudRate: 87, velocityFraudRate: 86, topFraudPattern: { type: 'Provider ring — specialty upcoding', casesDetected: 31, dollarsBlocked: 1100000 }, biasFraudConnection: { caseCount: 9, summary: 'Age-bias blind spots in automated denials masked provider-collusion patterns — 9 patient-linked fraud cases' }, status: 'Watch', trend30d: 'flat' },
  { modelId: 'Diagnosis Support v2.3', syntheticIdentityRate: 90, behavioralAnomalyRate: 87, clusterFraudRate: 88, velocityFraudRate: 85, topFraudPattern: { type: 'Coding constellation fraud', casesDetected: 12, dollarsBlocked: 280000 }, biasFraudConnection: { caseCount: 3, summary: 'Documentation bias corridors reduced fraud signal for 3 clusters' }, status: 'Watch', trend30d: 'up' },
  { modelId: 'Prior Auth v1.5', syntheticIdentityRate: 92, behavioralAnomalyRate: 89, clusterFraudRate: 90, velocityFraudRate: 88, topFraudPattern: { type: 'Duplicate auth velocity', casesDetected: 8, dollarsBlocked: 95000 }, biasFraudConnection: { caseCount: 0, summary: 'No bias-fraud overlap' }, status: 'Passing', trend30d: 'flat' }
];

function _sumConn(fraudArr) {
  var t = 0;
  for (var i = 0; i < fraudArr.length; i++) t += (fraudArr[i].biasFraudConnection && fraudArr[i].biasFraudConnection.caseCount) || 0;
  return t;
}

function _overlapCases(org, fraudArr, biasArr) {
  var cases = [];
  for (var i = 0; i < fraudArr.length; i++) {
    var fm = fraudArr[i];
    var bc = fm.biasFraudConnection && fm.biasFraudConnection.caseCount;
    if (!bc) continue;
    var bid = fm.modelId;
    var fraudCase = org === 'ad' ? 'AD-2847' : org === 'fin' ? 'FIN-1203' : 'HS-2847';
    if (org === 'ad' && bid === 'Maintenance Routing v1.2') fraudCase = 'AD-2902';
    cases.push({
      caseId: fraudCase,
      modelId: bid,
      summary: fm.biasFraudConnection.summary,
      exposureNote: org === 'ad' ? ('Combined exposure: $340K blocked + $67M regulatory penalty risk.') : org === 'fin' ? ('Combined exposure: $2.3M blocked + ECOA penalty risk.') : ('Combined exposure: $1.1M blocked + CMS audit exposure.')
    });
  }
  return cases;
}

var AD_ECHO_IDS = ['echo-AD-2026-04-14-0900-eden01', 'echo-AD-2026-04-22-0900-wr01', 'echo-AD-2026-04-25-1400-gn01'];
var FIN_ECHO_IDS = ['echo-FIN-2026-02-14-0815-ed02', 'echo-FIN-2026-02-15-1015-wr01', 'echo-FIN-2026-02-20-1100-gn01'];
var HS_ECHO_IDS = ['echo-HS-2026-03-10-0900-ed02', 'echo-HS-2026-03-12-1000-wr01', 'echo-HS-2026-03-15-1100-gn01'];

function _genAdIndividuals() {
  var ranks = ['PFC', 'PFC', 'Cpl.', 'Cpl.', 'Sgt.', 'Spc.', 'Spc.'];
  var fnH = ['Maria', 'Carlos', 'Elena', 'Diego', 'Sofia', 'Javier', 'Rosa'];
  var lnH = ['Vasquez', 'Herrera', 'Morales', 'Reyes', 'Garcia'];
  var bases = ['Camp Pendleton', 'Fort Bragg', 'Joint Base Lewis-McChord', 'Fort Hood'];
  var arr = [];
  var k = 0;
  for (var i = 187; i > 137; i--) {
    var pend = k < 28;
    var rank = ranks[k % ranks.length];
    var fn = pend ? fnH[k % fnH.length] : ['Marcus', 'James', 'Aisha', 'Jordan', 'Taylor', 'Chris'][k % 6];
    var ln = pend ? lnH[k % lnH.length] : ['Johnson', 'Whitaker', 'Nguyen', 'Patel', 'Chen', 'Williams'][k % 6];
    var race = pend ? 'Hispanic' : (k % 5 === 1 ? 'Black' : k % 5 === 2 ? 'White' : k % 5 === 3 ? 'Asian' : 'Other');
    var flips = pend && (k % 3 !== 0);
    arr.push({
      individualId: 'AD-IND-' + String(10000 + k + 1),
      fullName: rank + ' ' + fn + ' ' + ln,
      demographics: { rank: rank.replace('.', ''), race: race, age: 22 + (k % 15), gender: k % 2 ? 'Female' : 'Male', basePosting: pend ? 'Camp Pendleton' : bases[k % 4], tenureYears: 1 + (k % 8), MOS: 'MOS-' + String(21 + (k % 40)) },
      decisionsByModel: {
        'Personnel Assignment v2.4': {
          decisionsCount: 30 + (k % 40),
          lastDecisionDate: _iso(-(k % 9), 10 + (k % 8)),
          lastDecisionOutcome: pend ? 'denied' : 'approved',
          counterfactualOutcome: flips ? 'would-have-flipped' : 'same-outcome',
          fraudFlagStatus: k % 11 === 0 ? 'flagged-cleared' : 'no-flag',
          affectedByActiveCase: pend,
          caseId: pend ? 'AD-2847' : null
        }
      },
      echoMemoryIds: [AD_ECHO_IDS[k % AD_ECHO_IDS.length], AD_ECHO_IDS[(k + 1) % AD_ECHO_IDS.length]],
      privacyTier: 'individual-pii'
    });
    k++;
  }
  return arr;
}

function _genFinIndividuals() {
  var zips = ['10453', '11212', '10031', '10460', '11368'];
  var arr = [];
  for (var k = 0; k < 50; k++) {
    var zip = zips[k % zips.length];
    var race = zip === '10453' || zip === '11212' ? (k % 2 ? 'Black' : 'Hispanic') : ['White', 'Asian', 'Other'][k % 3];
    var flip = (zip === '10453' || zip === '11212') && (k % 4 !== 0);
    arr.push({
      individualId: 'FIN-IND-' + String(20000 + k + 1),
      fullName: ['Jordan Lee', 'Aaliyah Brooks', 'Mateo Ruiz', 'Priya Shah', 'Sam Okonkwo'][k % 5] + ' ' + (100 + k),
      demographics: { age: 28 + (k % 35), race: race, gender: k % 2 ? 'Female' : 'Male', zipCode: zip, incomeBracket: ['<$45k', '$45-75k', '$75-100k', '$100k+'][k % 4], creditScore: 580 + (k % 120) },
      decisionsByModel: {
        'Credit Scoring v3.4': {
          decisionsCount: 8 + (k % 20),
          lastDecisionDate: _iso(-(k % 12), 9),
          lastDecisionOutcome: flip ? 'denied' : 'approved',
          counterfactualOutcome: flip ? 'would-have-flipped' : 'same-outcome',
          fraudFlagStatus: k % 15 === 0 ? 'flagged-confirmed' : 'no-flag',
          affectedByActiveCase: flip,
          caseId: flip ? 'FIN-1203' : null
        }
      },
      echoMemoryIds: [FIN_ECHO_IDS[k % FIN_ECHO_IDS.length]],
      privacyTier: 'individual-pii'
    });
  }
  return arr;
}

function _genHealthIndividuals() {
  var arr = [];
  for (var k = 0; k < 50; k++) {
    var age = 65 + (k % 15);
    var flip = age >= 73 && (k % 3 !== 0);
    arr.push({
      individualId: 'HS-IND-' + String(30000 + k + 1),
      fullName: ['Eleanor Park', 'Robert Chen', 'Maria Santos', 'James Okafor', 'Linda Gustafsson'][k % 5] + ' ' + (k + 1),
      demographics: { age: age, race: ['White', 'Black', 'Hispanic', 'Asian'][k % 4], gender: k % 2 ? 'Female' : 'Male', careType: 'Specialty', insuranceTier: ['Gold', 'Silver', 'Bronze'][k % 3], providerNetwork: 'Network-' + String(10 + (k % 5)) },
      decisionsByModel: {
        'Claims Adjudication v1.9': {
          decisionsCount: 12 + (k % 30),
          lastDecisionDate: _iso(-(k % 14), 11),
          lastDecisionOutcome: flip ? 'denied' : (k % 7 === 0 ? 'flagged' : 'approved'),
          counterfactualOutcome: flip ? 'would-have-flipped' : 'same-outcome',
          fraudFlagStatus: k % 18 === 0 ? 'flagged-cleared' : 'no-flag',
          affectedByActiveCase: flip,
          caseId: flip ? 'HS-2847' : null
        }
      },
      echoMemoryIds: [HS_ECHO_IDS[k % HS_ECHO_IDS.length]],
      privacyTier: 'individual-pii'
    });
  }
  return arr;
}

var EXT = {
  ad: {
    biasMetricsByModel: BIAS_AD,
    fraudMetricsByModel: FRAUD_AD,
    biasIncidentsActive: [
      { caseId: '#AD-2847', modelId: 'Personnel Assignment v2.4', severity: 'Critical', affectedCount: 847, cohortDescription: 'Hispanic technicians at Camp Pendleton — premium-base placement denials', metricViolation: 'DI 0.67 — below 0.80 EEOC floor', detectedDate: '2026-04-14T09:00:00Z', slaDeadline: _iso(9, 17), status: 'remediation-in-progress', leadAssignee: 'Sarah Chen', echoMemoryId: 'echo-AD-2026-04-14-0900-eden01' }
    ],
    fraudIncidentsActive: [
      { caseId: '#AD-2847', modelId: 'Personnel Assignment v2.4', severity: 'High', affectedCount: 12, cohortDescription: 'Synthetic credential ring exploiting bias-blind verification gap', metricViolation: 'Credential synthesis — 7 linked bias-fraud cases', detectedDate: '2026-04-01T14:00:00Z', slaDeadline: _iso(5, 17), status: 'open', leadAssignee: 'James Martinez', echoMemoryId: 'echo-AD-2026-04-22-0900-wr01' },
      { caseId: '#AD-2902', modelId: 'Maintenance Routing v1.2', severity: 'Medium', affectedCount: 2, cohortDescription: 'Fraud missed in under-flagged cohort while Bragg crews over-flagged', metricViolation: 'Identity recycling + disparity overlap', detectedDate: '2026-03-22T11:00:00Z', slaDeadline: _iso(40, 17), status: 'awaiting-approval', leadAssignee: 'Sarah Chen', echoMemoryId: 'echo-AD-2026-04-25-1400-gn01' }
    ],
    cohortIndividuals: { 'Personnel Assignment v2.4': _genAdIndividuals() },
    cohortGroupSummaries: {
      'Personnel Assignment v2.4': [
        { groupId: 'g-pend-hisp-tech', groupLabel: 'Hispanic technicians at Camp Pendleton', affectedCount: 187, biasMetric: 0.67, fraudMetric: 88, representativeCases: [] },
        { groupId: 'g-bragg-black-tech', groupLabel: 'Black technicians at Fort Bragg', affectedCount: 124, biasMetric: 0.78, fraudMetric: 85, representativeCases: [] }
      ],
      'Maintenance Routing v1.2': [
        { groupId: 'g-bragg-maint', groupLabel: 'Hispanic maintenance crew at Fort Bragg', affectedCount: 41, biasMetric: 0.78, fraudMetric: 85, representativeCases: [] }
      ]
    },
    biasFraudStats: { biasActiveCount: 1, fraudActiveCount: 2, overlapCount: 7 },
    edenHeroSub: 'Below Threshold',
    obsidianHeroSub: 'Above Threshold',
    peerPercentileLabel: '38th percentile in A&D',
    statBiasCallout: 'Hispanic technicians at Pendleton: 2.3x denial rate vs baseline',
    statVulnerableIntersection: 'Hispanic women technicians at Camp Pendleton aged 22-28: 3.1x denial rate compared to baseline',
    obsidianTargetCohort: 'Synthetic identity ring targeting credential verification gaps at Pendleton technician pipeline',
    obsidianMostTargeted: 'Hispanic women technicians at Camp Pendleton aged 22-28: 2.4x fraud-adjacent verification skips vs baseline'
  },
  fin: {
    biasMetricsByModel: BIAS_FIN,
    fraudMetricsByModel: FRAUD_FIN,
    biasIncidentsActive: [
      { caseId: '#FIN-1203', modelId: 'Credit Scoring v3.4', severity: 'Critical', affectedCount: 1203, cohortDescription: 'Black and Hispanic applicants in NYC ZIP clusters 10453 / 11212', metricViolation: 'DI 0.74 — ZIP proxy 0.82 race correlation', detectedDate: '2026-02-14T08:15:00Z', slaDeadline: _iso(8, 17), status: 'remediation-in-progress', leadAssignee: 'Priya Sharma', echoMemoryId: 'echo-FIN-2026-02-14-0815-ed02' },
      { caseId: '#FIN-0842', modelId: 'Collections AI v1.3', severity: 'Medium', affectedCount: 56, cohortDescription: 'Neighborhood risk index drift — smaller secondary cohort', metricViolation: 'Proxy 0.48 — watch band', detectedDate: '2026-03-28T10:00:00Z', slaDeadline: _iso(45, 17), status: 'open', leadAssignee: 'Marcus Chen', echoMemoryId: 'echo-FIN-2026-04-02-1300-cx01' }
    ],
    fraudIncidentsActive: [
      { caseId: '#FIN-1203', modelId: 'Credit Scoring v3.4', severity: 'High', affectedCount: 47, cohortDescription: 'Synthetic identity ring at NYC ZIPs 10453, 11212', metricViolation: 'Cluster fraud + velocity anomaly', detectedDate: '2026-02-18T09:30:00Z', slaDeadline: _iso(12, 17), status: 'open', leadAssignee: 'Lisa Torres', echoMemoryId: 'echo-FIN-2026-02-15-1015-wr01' },
      { caseId: '#FIN-2207', modelId: 'Fraud Screening v2.7', severity: 'Medium', affectedCount: 31, cohortDescription: 'Device farm velocity cluster (Chicago)', metricViolation: 'Velocity fraud pattern', detectedDate: '2026-04-03T08:00:00Z', slaDeadline: _iso(25, 17), status: 'remediation-in-progress', leadAssignee: 'Adam — Cardinal', echoMemoryId: 'echo-FIN-2026-04-25-1500-sn01' }
    ],
    cohortIndividuals: { 'Credit Scoring v3.4': _genFinIndividuals() },
    cohortGroupSummaries: {
      'Credit Scoring v3.4': [
        { groupId: 'g-10453-black', groupLabel: 'Black applicants in ZIP 10453', affectedCount: 312, biasMetric: 0.74, fraudMetric: 90, representativeCases: [] },
        { groupId: 'g-11212-mixed', groupLabel: 'Hispanic applicants in ZIP 11212', affectedCount: 278, biasMetric: 0.72, fraudMetric: 88, representativeCases: [] }
      ]
    },
    biasFraudStats: { biasActiveCount: 2, fraudActiveCount: 2, overlapCount: 12 },
    edenHeroSub: 'Approaching',
    obsidianHeroSub: 'Above Threshold',
    peerPercentileLabel: '64th percentile in Finance',
    statBiasCallout: 'Black applicants in ZIP 10453: 2.1x adverse rate vs comparable profiles',
    statVulnerableIntersection: 'Black women applicants age 35-50 in 10453/11212: 2.4x denial vs baseline',
    obsidianTargetCohort: 'Synthetic identity ring at NYC ZIPs 10453, 11212: 47 fake applicants caught',
    obsidianMostTargeted: 'Applicants in Morris Heights and Brownsville ZIP bands: 2.2x targeted by synthetic identity fraud'
  },
  health: {
    biasMetricsByModel: BIAS_HEALTH,
    fraudMetricsByModel: FRAUD_HEALTH,
    biasIncidentsActive: [
      { caseId: '#HS-2847', modelId: 'Claims Adjudication v1.9', severity: 'Critical', affectedCount: 2847, cohortDescription: 'Patients 65+ in specialty care — age_cost_proxy pathway', metricViolation: 'DI 0.64 — ACA Section 1557 disparity', detectedDate: '2026-03-10T09:00:00Z', slaDeadline: _iso(4, 17), status: 'remediation-in-progress', leadAssignee: 'Dr. Aisha Patel', echoMemoryId: 'echo-HS-2026-03-10-0900-ed02' },
      { caseId: '#HS-0912', modelId: 'Diagnosis Support v2.3', severity: 'High', affectedCount: 156, cohortDescription: 'Historical cost band proxy — secondary cohort', metricViolation: 'Proxy 0.41 — disability correlation', detectedDate: '2026-02-02T10:00:00Z', slaDeadline: _iso(18, 17), status: 'open', leadAssignee: 'Priya Sharma', echoMemoryId: 'echo-HS-2026-04-28-1400-mo02' },
      { caseId: '#HS-0441', modelId: 'Claims Adjudication v1.9', severity: 'Medium', affectedCount: 212, cohortDescription: 'Outpatient pharmacy disputes — concentrated denials', metricViolation: 'Calibration gap on pharmacy line items', detectedDate: '2026-01-15T09:00:00Z', slaDeadline: _iso(55, 17), status: 'awaiting-approval', leadAssignee: 'Linda Park', echoMemoryId: 'echo-HS-2026-04-12-1300-cx01' }
    ],
    fraudIncidentsActive: [
      { caseId: '#HS-2847', modelId: 'Claims Adjudication v1.9', severity: 'High', affectedCount: 31, cohortDescription: 'Specialty upcoding ring linked to bias-blind spots', metricViolation: 'Provider cluster fraud', detectedDate: '2026-03-15T08:00:00Z', slaDeadline: _iso(20, 17), status: 'open', leadAssignee: 'Dr. Maya Osei', echoMemoryId: 'echo-HS-2026-03-12-1000-wr01' },
      { caseId: '#HS-2104', modelId: 'Diagnosis Support v2.3', severity: 'Medium', affectedCount: 12, cohortDescription: 'Coding constellation fraud — secondary', metricViolation: 'Cluster fraud', detectedDate: '2026-03-29T12:00:00Z', slaDeadline: _iso(35, 17), status: 'remediation-in-progress', leadAssignee: 'Adam — Cardinal', echoMemoryId: 'echo-HS-2026-04-18-1000-pa01' }
    ],
    cohortIndividuals: { 'Claims Adjudication v1.9': _genHealthIndividuals() },
    cohortGroupSummaries: {
      'Claims Adjudication v1.9': [
        { groupId: 'g-75-spec', groupLabel: 'Patients 75+ in Specialty Care', affectedCount: 942, biasMetric: 0.64, fraudMetric: 87, representativeCases: [] },
        { groupId: 'g-65-pharm', groupLabel: 'Patients 65+ — Pharmacy disputes', affectedCount: 1104, biasMetric: 0.66, fraudMetric: 85, representativeCases: [] }
      ]
    },
    biasFraudStats: { biasActiveCount: 3, fraudActiveCount: 2, overlapCount: 9 },
    edenHeroSub: 'Below Threshold',
    obsidianHeroSub: 'Above Threshold',
    peerPercentileLabel: '71st percentile in Healthcare',
    statBiasCallout: 'Patients 65+ in Specialty Care: 2.1x denial concentration',
    statVulnerableIntersection: 'Women patients 75+ requesting Specialty care: 3.1x denial rate vs baseline',
    obsidianTargetCohort: 'Elderly patients in Specialty Care: 2.1x targeted by claims fraud',
    obsidianMostTargeted: 'Patients 75+ in Specialty Care networks: 2.3x targeted by provider-collusion fraud'
  }
};

['ad', 'fin', 'health'].forEach(function (ok) {
  var dst = CD[ok];
  if (!dst) return;
  var src = EXT[ok];
  Object.keys(src).forEach(function (key) {
    dst[key] = src[key];
  });
  /* Fill representativeCases with first 10 individual IDs */
  var ci = dst.cohortIndividuals || {};
  var cg = dst.cohortGroupSummaries || {};
  Object.keys(cg).forEach(function (modelId) {
    var groups = cg[modelId];
    var inds = ci[modelId] || [];
    for (var gi = 0; gi < groups.length; gi++) {
      var rep = [];
      var nInd = inds.length;
      if (!nInd) {
        groups[gi].representativeCases = [];
        continue;
      }
      for (var ri = 0; ri < 10; ri++) rep.push(inds[ri % nInd].individualId);
      groups[gi].representativeCases = rep;
    }
  });
  dst.biasFraudOverlapCases = _overlapCases(ok, dst.fraudMetricsByModel, dst.biasMetricsByModel);
});

/* Add War Room case channel AD-2902 if missing */
(function () {
  var ad = CD.ad;
  if (!ad || !Array.isArray(ad.caseChannels)) return;
  var has = ad.caseChannels.some(function (c) { return c.caseId === 'AD-2902'; });
  if (has) return;
  ad.caseChannels.push({
    caseId: 'AD-2902',
    channelName: '#case-AD-2902',
    unreadCount: 2,
    members: ['Sarah Chen', 'James Martinez', 'Eve'],
    archived: false,
    messages: [
      { id: 'wr-ad2902-1', timestamp: '2026-04-10T10:00:00Z', author: 'Eve', content: 'Bias-fraud overlap flagged on Maintenance Routing — Bragg cohort.', attachments: [], mentions: [], isPinned: true, echoLogId: 'echo-AD-2026-04-25-1400-gn01', authorKind: 'eve' },
      { id: 'wr-ad2902-2', timestamp: '2026-04-10T10:06:00Z', author: 'Sarah Chen', content: 'Opening remediation review — Obsidian confirms 2 missed fraud cases.', attachments: [], mentions: [], isPinned: false, echoLogId: 'echo-sc-ad2902', authorKind: 'human' }
    ]
  });
})();

(function _edoExtraCaseChannels() {
  var fin = CD.fin;
  if (fin && Array.isArray(fin.caseChannels) && !fin.caseChannels.some(function (c) { return c.caseId === 'FIN-2207'; })) {
    fin.caseChannels.push({ caseId: 'FIN-2207', channelName: '#case-FIN-2207', unreadCount: 1, members: ['Riley Whitmore', 'Eve', 'Adam'], archived: false, messages: [{ id: 'f2207-1', timestamp: '2026-04-03T08:00:00Z', author: 'Eve', content: 'Device farm velocity cluster — Obsidian fraud lens triage.', attachments: [], mentions: [], isPinned: false, echoLogId: 'echo-FIN-2026-04-25-1500-sn01', authorKind: 'eve' }] });
  }
  var hs = CD.health;
  if (hs && Array.isArray(hs.caseChannels) && !hs.caseChannels.some(function (c) { return c.caseId === 'HS-2104'; })) {
    hs.caseChannels.push({ caseId: 'HS-2104', channelName: '#case-HS-2104', unreadCount: 1, members: ['Dr. Maya Osei', 'Adam'], archived: false, messages: [{ id: 'h2104-1', timestamp: '2026-03-29T12:00:00Z', author: 'Adam', content: 'Coding constellation fraud — Diagnosis Support cohort flagged.', attachments: [], mentions: [], isPinned: false, echoLogId: 'echo-HS-2026-04-18-1000-pa01', authorKind: 'adam' }] });
  }
})();
})();

window.logEdenObsidianPiiAccess = function (org, individualId, screenCore) {
  var CD = window.CARDINAL_DATA;
  if (!CD || !CD[org] || !individualId) return;
  var d = CD[org];
  var role = window.__edoDemoRole || (d.settingsState && d.settingsState.userRole) || 'Compliance Officer';
  if (d.settingsState && d.settingsState.rolePreset === 'executive' && !window.__edoDemoRole) role = 'Executive';
  if (d.settingsState && d.settingsState.rolePreset === 'compliance' && !window.__edoDemoRole) role = 'Compliance Officer';
  var uid = 'echo-' + String(org).toUpperCase().replace('HEALTH', 'HS') + '-access-' + Date.now();
  var mem = {
    id: uid,
    timestamp: new Date().toISOString(),
    author: d.user || 'User',
    authorRole: role,
    eventType: 'access-granted',
    core: screenCore === 'obsidian' ? 'obsidian' : 'eden',
    severity: 'informational',
    summary: (d.user || 'User') + ' accessed individual record ' + individualId + ' in ' + (screenCore === 'obsidian' ? 'Obsidian' : 'Eden') + ' Cohort Explorer',
    content: 'Access tier need-to-know. Immutable Echo Core audit entry (prototype session).',
    hash: '0x' + ('0000000' + Math.floor(Math.random() * 0xffffffff).toString(16)).slice(-8),
    signature: 'sig-access-' + Date.now(),
    isPinned: false,
    isSealed: false,
    addendums: [],
    linkedMemories: [],
    comments: [],
    accessTier: 'need-to-know',
    accessRoles: [],
    caseId: null,
    modelId: null,
    userId: d.user || null,
    industryContext: org
  };
  if (!Array.isArray(d.echoMemories)) d.echoMemories = [];
  d.echoMemories.unshift(mem);
  console.log('Echo Memory access event:', mem);
};

window.openEchoCoreFiltered = function (coreLens) {
  window.__echoOpenCore = coreLens || null;
  if (typeof showScreen === 'function') showScreen('echo', null);
};

/* ═════ Eden / Obsidian UI (renderEden, renderObsidian) ═════ */
window.__edo = { org: 'ad', screen: 'eden', modelIdx: null, modelLens: 'bias', cohortSummary: true, caseSev: 'all', mdlFilt: 'all', mdlSort: 'model', cohortQ: '', exp: {}, indQ: '', piiInd: null };
function edoQ(s) { return JSON.stringify(s == null ? '' : String(s)); }
function edoT(t, b) { return ' onmouseenter="showTooltip(' + edoQ(t) + ',' + edoQ(b) + ',event)"'; }
function edoCaseId(c) { return String(c || '').replace(/^#/, ''); }
function edoCanPii() {
  var r = (window.__edoDemoRole || '').toLowerCase();
  if (r.indexOf('admin') >= 0 || r.indexOf('legal') >= 0) return true;
  if (window.__edoDemoRole) return false;
  var d = window.CARDINAL_DATA && window.CARDINAL_DATA[window.__edo.org];
  var ur = d && d.settingsState && d.settingsState.userRole;
  if (ur) {
    var u = String(ur).toLowerCase();
    return u.indexOf('admin') >= 0 || u.indexOf('legal') >= 0;
  }
  return false;
}
window.edoCanPii = edoCanPii;
function edoRoleDisp() {
  if (window.__edoDemoRole) return window.__edoDemoRole;
  var d = window.CARDINAL_DATA && window.CARDINAL_DATA[window.__edo.org];
  if (d && d.settingsState) {
    if (d.settingsState.userRole) return d.settingsState.userRole;
    if (d.settingsState.rolePreset === 'executive') return 'Executive';
    if (d.settingsState.rolePreset === 'compliance') return 'Compliance Officer';
  }
  return 'Compliance Officer';
}
function edoSlaDays(iso) {
  var t = new Date(iso).getTime() - Date.now();
  return Math.max(0, Math.ceil(t / 86400000));
}
function edoTr(t) { if (t === 'up') return '\u25b2'; if (t === 'down') return '\u25bc'; return '\u2014'; }
function edoStatColor(st) {
  if (st === 'Critical') return '#ef4444';
  if (st === 'Watch') return '#f59e0b';
  return '#22c55e';
}
function edoGaugeColor(n, fraud) {
  if (fraud) { if (n >= 80) return '#22c55e'; if (n >= 70) return '#f59e0b'; return '#ef4444'; }
  if (n >= 80) return '#22c55e'; if (n >= 70) return '#f59e0b'; return '#ef4444';
}
function edoRaceBarsHtml(d, org) {
  var bm = d.biasMetricsByModel || [];
  var row = bm[0];
  for (var i = 0; i < bm.length; i++) if (bm[i].status === 'Critical' || bm[i].affectedCohort.totalCount > 0) { row = bm[i]; break; }
  var br = row && row.affectedCohort && row.affectedCohort.breakdownByDemo;
  if (!br) return '<div style="color:var(--muted);font-size:11px">No cohort breakdown</div>';
  var keys = Object.keys(br);
  var maxCt = 1;
  for (var k = 0; k < keys.length; k++) maxCt = Math.max(maxCt, br[keys[k]]);
  var html = '';
  for (var j = 0; j < keys.length; j++) {
    var lab = keys[j];
    var ct = br[lab];
    var appr = Math.min(95, Math.round(72 + 18 * (ct / maxCt)));
    var w = Math.round(appr * 0.9);
    html += '<div class="edo-bar-row" ' + edoT(lab + ' cohort', 'Approval rate proxy from cohort size vs max group. Absolute count: ' + ct + '. ' + edoQ('')) + ' style="margin-bottom:8px;cursor:pointer" onclick="edoCohortFromDemo(' + edoQ(org) + ',' + edoQ(lab) + ')"><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span>' + lab + '</span><span>' + appr + '%</span></div><div style="height:10px;background:var(--bg3);border-radius:4px;position:relative"><div style="position:absolute;left:0;top:0;bottom:0;width:' + w + '%;background:var(--accent);border-radius:4px"></div><div style="position:absolute;left:72%;top:0;bottom:0;width:2px;background:#94a3b8;opacity:.9" title="EEOC 4/5"></div></div></div>';
  }
  return html;
}
window.edoCohortFromDemo = function (org, lab) {
  window.__edo.org = org;
  window.__edo.cohortQ = lab || '';
  if (window.__edo.screen === 'eden') renderEden(org); else renderObsidian(org);
  var el = document.getElementById('edo-sec-cohort');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
window.edoSetDemoRole = function (role) {
  window.__edoDemoRole = role;
  var o = window.__edo.org;
  if (window.__edo.screen === 'eden') renderEden(o); else renderObsidian(o);
};
window.edoFilterCases = function (sev) {
  window.__edo.caseSev = sev;
  var o = window.__edo.org;
  if (window.__edo.screen === 'eden') renderEden(o); else renderObsidian(o);
};
window.edoFilterModels = function (f) {
  window.__edo.mdlFilt = f;
  var o = window.__edo.org;
  if (window.__edo.screen === 'eden') renderEden(o); else renderObsidian(o);
};
window.edoSortModels = function (col) {
  window.__edo.mdlSort = col;
  var o = window.__edo.org;
  if (window.__edo.screen === 'eden') renderEden(o); else renderObsidian(o);
};
window.edoScrollBf = function () {
  var id = window.__edo.screen === 'eden' ? 'eden-sec-bf' : 'obs-sec-bf';
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
window.edoOpenModel = function (which, idx) {
  window.__edo.modelIdx = idx;
  window.__edo.modelLens = which === 'obs' ? 'fraud' : 'bias';
  if (which === 'obs') renderObsidian(window.__edo.org); else renderEden(window.__edo.org);
};
window.edoCloseModel = function () {
  window.__edo.modelIdx = null;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoSetLens = function (l) {
  window.__edo.modelLens = l;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoCohortToggle = function (summary) {
  window.__edo.cohortSummary = summary !== false;
  window.__edo.piiInd = null;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoExpGroup = function (k) {
  window.__edo.exp[k] = !window.__edo.exp[k];
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoGotoCohortModel = function (mid) {
  window.__edo.cohortModelFocus = mid;
  window.__edo.cohortSummary = true;
  window.edoScrollBf();
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoViewIndividuals = function (modelId, groupId) {
  if (!edoCanPii()) {
    if (typeof showToast === 'function') showToast('Restricted — Admin or Legal Counsel only.');
    return;
  }
  window.__edo.cohortModelFocus = modelId;
  window.__edo.cohortGroupFocus = groupId;
  window.__edo.cohortSummary = false;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
  var elc = document.getElementById('edo-sec-cohort');
  if (elc) elc.scrollIntoView({ behavior: 'smooth' });
};
window.edoOpenInd = function (indId) {
  if (!edoCanPii()) return;
  window.logEdenObsidianPiiAccess(window.__edo.org, indId, window.__edo.screen);
  window.__edo.piiInd = indId;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoCloseInd = function () {
  window.__edo.piiInd = null;
  var o = window.__edo.org;
  if (window.__edo.screen === 'obsidian') renderObsidian(o); else renderEden(o);
};
window.edoExportCsv = function () {
  var org = window.__edo.org;
  var d = window.CARDINAL_DATA[org];
  var can = edoCanPii();
  var cg = d.cohortGroupSummaries || {};
  var lines = ['cohort_group,affected_count,bias_metric_di,fraud_metric,active_case_hint'];
  Object.keys(cg).forEach(function (m) {
    (cg[m] || []).forEach(function (g) {
      lines.push([g.groupLabel, g.affectedCount, g.biasMetric, g.fraudMetric, ''].join(','));
    });
  });
  if (can) {
    lines.push('individual_id,pii_note');
    var ci = d.cohortIndividuals || {};
    Object.keys(ci).forEach(function (m) {
      (ci[m] || []).forEach(function (p) {
        lines.push([p.individualId, 'id_only'].join(','));
      });
    });
  }
  var blob = new Blob([lines.join('\n')], { type: 'text/csv' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cardinal_cohort_' + org + '_' + Date.now() + '.csv';
  a.click();
};
function edoSparkBias(d) {
  var h = d.history12mo && d.history12mo.bias;
  if (!h || !h.length) return '';
  var vals = h.slice(-12);
  var min = 40;
  var max = 100;
  var pts = [];
  for (var i = 0; i < vals.length; i++) {
    var x = (i / Math.max(1, vals.length - 1)) * 100;
    var y = 40 - ((vals[i] - min) / (max - min)) * 35;
    pts.push(x + ',' + y);
  }
  return '<svg width="120" height="44" viewBox="0 0 100 40" style="display:block"' + edoT('30-Day Trend', 'Bias Detection score monthly trajectory from CARDINAL_DATA history12mo.bias.') + '><polyline fill="none" stroke="var(--accent)" stroke-width="1.5" points="' + pts.join(' ') + '"/></svg>';
}
function edoSparkFraud(d) {
  var h = d.history12mo && d.history12mo.fraud;
  if (!h || !h.length) return '';
  var vals = h.slice(-12);
  var min = 60;
  var max = 100;
  var pts = [];
  for (var i = 0; i < vals.length; i++) {
    var x = (i / Math.max(1, vals.length - 1)) * 100;
    var y = 38 - ((vals[i] - min) / (max - min)) * 32;
    pts.push(x + ',' + y);
  }
  return '<svg width="120" height="44" viewBox="0 0 100 40" style="display:block"' + edoT('30-Day Trend', 'Fraud Detection score monthly trajectory from CARDINAL_DATA history12mo.fraud.') + '><polyline fill="none" stroke="#fb923c" stroke-width="1.5" points="' + pts.join(' ') + '"/></svg>';
}
function edoEchoRecent(d) { return d.auditLastEvent || 'Recent Eden activity'; }
function edoEchoRecentObs(d) {
  var m = d.fraudMetricsByModel && d.fraudMetricsByModel[0];
  return m ? ('Obsidian — ' + m.modelId + ' recalculated') : 'Obsidian monitoring';
}
function edoBuildModelDrawer(d, org, screen) {
  var idx = window.__edo.modelIdx;
  if (idx == null) return '';
  var bias = d.biasMetricsByModel || [];
  var fraud = d.fraudMetricsByModel || [];
  var b = bias[idx];
  var f = fraud[idx];
  if (!b || !f) return '';
  var lens = window.__edo.modelLens;
  var ml = d.modelLevelScores && d.modelLevelScores[idx];
  var dep = ml && ml.deployed ? ml.deployed : 'Jan 2026';
  var retr = 'Mar 28, 2026';
  var train = 'Trained on historical production decisions, 2018–2024';
  var wgt = ml && ml.weight ? ml.weight + '% weight in Trust Score' : 'See Trust Score composition';
  var stage = ml && ml.lifecycleStage ? ml.lifecycleStage : 'monitoring';
  var own = 'Model Governance — ' + (d.org || org);
  var right = '';
  if (lens === 'bias' || lens === 'side') {
    right += '<div style="font-size:11px;font-weight:700;margin-bottom:8px"' + edoT('Fairness Report', 'Bias lens metrics for this model from CARDINAL_DATA biasMetricsByModel.') + '>Fairness report</div>';
    right += '<p style="font-size:11px;color:var(--muted2)"' + edoT('Disparate Impact (DI)', 'Ratio of favorable outcomes for protected vs reference group. EEOC four-fifths rule uses 0.80 floor.') + '>DI: <strong>' + b.di + '</strong> (EEOC floor 0.80)</p>';
    right += '<p style="font-size:11px;color:var(--muted2)"' + edoT('Equalized Odds', 'Difference in true positive and false positive rates across groups. Should be <0.10.') + '>Equalized Odds: <strong>' + b.equalizedOdds + '</strong></p>';
    right += '<p style="font-size:11px;color:var(--muted2)"' + edoT('Demographic Parity', 'Ratio of positive outcome rates across protected groups. Should be ≥0.80.') + '>Demographic Parity: <strong>' + b.demographicParity + '</strong></p>';
    right += '<p style="font-size:11px;color:var(--muted2)"' + edoT('Calibration', 'Prediction confidence equally accurate across groups. Should be ≥0.90.') + '>Calibration: <strong>' + b.calibration + '</strong></p>';
    right += '<p style="font-size:11px;margin-top:10px"' + edoT('Feature Importance', 'Which model inputs most influence the output. Used to identify proxy variables.') + '>Top proxy: <strong>' + b.topProxyVariable.name + '</strong> (' + b.topProxyVariable.correlation + ' vs ' + b.topProxyVariable.correlatesWith + ')</p>';
    right += '<button type="button" class="btn-ghost" style="margin-top:8px;font-size:10px" onclick="showScreen(\'genesis\',null)"' + edoT('Counterfactual Proof', 'Genesis Core test: change one variable, rerun the decision. If outcome flips, that is legal-grade proof.') + '>Open Genesis — Counterfactual Proof \u2192</button>';
  }
  if (lens === 'fraud' || lens === 'side') {
    right += '<div style="font-size:11px;font-weight:700;margin:12px 0 8px"' + edoT('Fraud Lens', 'Fraud detection rates for this model.') + '>Fraud metrics</div>';
    right += '<p style="font-size:11px;color:var(--muted2)">Synthetic ID: <strong>' + f.syntheticIdentityRate + '%</strong> · Behavioral: <strong>' + f.behavioralAnomalyRate + '%</strong></p>';
    right += '<p style="font-size:11px;color:var(--muted2)">Cluster: <strong>' + f.clusterFraudRate + '%</strong> · Velocity: <strong>' + f.velocityFraudRate + '%</strong></p>';
    right += '<p style="font-size:11px">Top pattern: <strong>' + f.topFraudPattern.type + '</strong> — ' + f.topFraudPattern.casesDetected + ' cases, $' + f.topFraudPattern.dollarsBlocked.toLocaleString() + ' blocked</p>';
    right += '<p style="font-size:11px;color:var(--amber)">Bias\u2011Fraud: ' + f.biasFraudConnection.summary + '</p>';
  }
  if (lens === 'side') {
    right = '<div style="display:flex;flex-direction:column;gap:12px;max-height:70vh;overflow-y:auto"><div style="border-bottom:1px solid var(--border2);padding-bottom:10px"><div style="font-size:10px;color:var(--muted)">Bias (top)</div>' + right.split('Fraud metrics')[0] + '</div><div><div style="font-size:10px;color:var(--muted)">Fraud (bottom)</div>' + '</div></div>';
  }
  var togg = '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap">' +
    '<button type="button" class="btn-ghost" style="font-size:10px' + (lens === 'bias' ? ';border-color:var(--accent)' : '') + '" onclick="edoSetLens(\'bias\')"' + edoT('Bias View', 'Fairness metrics for this model.') + '>Bias View</button>' +
    '<button type="button" class="btn-ghost" style="font-size:10px' + (lens === 'fraud' ? ';border-color:var(--accent)' : '') + '" onclick="edoSetLens(\'fraud\')"' + edoT('Fraud View', 'Fraud detection metrics for this model.') + '>Fraud View</button>' +
    '<button type="button" class="btn-ghost" style="font-size:10px' + (lens === 'side' ? ';border-color:var(--accent)' : '') + '" onclick="edoSetLens(\'side\')"' + edoT('Side-by-Side View', 'Shows bias and fraud metrics for the same model. Reveals where bias creates fraud exposure.') + '>Side\u2011by\u2011Side</button></div>';
  if (lens === 'side') {
    right = togg + '<div style="display:flex;flex-direction:column;gap:14px"><div><div style="font-size:10px;color:var(--muted);margin-bottom:6px">Bias</div><div style="font-size:11px;color:var(--muted2)">DI ' + b.di + ' · EO ' + b.equalizedOdds + ' · Proxy ' + b.topProxyVariable.name + '</div></div><div><div style="font-size:10px;color:var(--muted);margin-bottom:6px">Fraud</div><div style="font-size:11px;color:var(--muted2)">Syn ' + f.syntheticIdentityRate + '% · ' + f.topFraudPattern.type + ' · Bias\u2011fraud cases ' + f.biasFraudConnection.caseCount + '</div><div style="font-size:10px;margin-top:6px;color:var(--amber)">' + f.biasFraudConnection.summary + '</div></div></div>';
  } else right = togg + right;
  var echoL = idx === 0 ? 'echo-AD-2026-04-14-0900-eden01' : 'echo-AD-2026-04-22-0900-wr01';
  if (org === 'fin') echoL = 'echo-FIN-2026-02-14-0815-ed02';
  if (org === 'health') echoL = 'echo-HS-2026-03-10-0900-ed02';
  return '<div id="edo-drawer-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9998;display:flex;justify-content:flex-end" onclick="if(event.target.id===\'edo-drawer-backdrop\')edoCloseModel()"><div style="width:min(920px,96vw);background:var(--card);border-left:1px solid var(--border2);z-index:9999;overflow-y:auto;padding:18px;box-shadow:-8px 0 32px rgba(0,0,0,.4)" onclick="event.stopPropagation()">' +
    '<div style="display:flex;justify-content:space-between;align-items:flex-start"><h3 style="margin:0;font-size:15px"' + edoT(b.modelId, (ml && ml.purpose) ? ml.purpose : 'Monitored model') + '>' + b.modelId + '</h3><button type="button" class="btn-ghost" style="font-size:11px" onclick="edoCloseModel()">✕</button></div>' +
    '<div style="display:flex;gap:16px;margin-top:14px;flex-wrap:wrap"><div style="flex:0 0 38%;min-width:220px;font-size:11px;color:var(--muted2)"><p><strong>Deployed:</strong> ' + dep + '</p><p><strong>Last retrained:</strong> ' + retr + '</p><p>' + train + '</p><p><strong>Trust weight:</strong> ' + wgt + '</p><p><strong>Lifecycle:</strong> ' + stage + '</p><p><strong>Owner:</strong> ' + own + '</p><button type="button" class="btn-ghost" style="font-size:10px;margin-top:8px" onclick="openEchoMemory(' + edoQ(echoL) + ')"' + edoT('Echo Memory', 'Full cryptographic audit history for this model.') + '>View full audit history \u2192</button></div><div style="flex:1;min-width:280px">' + right + '</div></div>' +
    '<button type="button" class="btn-primary" style="margin-top:16px;width:100%;font-size:11px" onclick="edoGotoCohortModel(' + edoQ(b.modelId) + ')"' + edoT('Cohort Explorer', 'Jump to cohort summaries filtered to this model.') + '>Open Cohort Explorer for this Model \u2192</button></div></div>';
}
function edoIndPanel(d, org, indId, core) {
  var ci = d.cohortIndividuals || {};
  var per = null;
  var mk = '';
  Object.keys(ci).forEach(function (m) {
    (ci[m] || []).forEach(function (p) {
      if (p.individualId === indId) { per = p; mk = m; }
    });
  });
  if (!per) return '';
  var dm = per.demographics || {};
  var dmStr = JSON.stringify(dm);
  var dec = per.decisionsByModel && per.decisionsByModel[mk];
  var hist = dec ? ('Outcome: ' + dec.lastDecisionOutcome + ' · Counterfactual: ' + dec.counterfactualOutcome + ' · Fraud flag: ' + dec.fraudFlagStatus) : '';
  var echos = (per.echoMemoryIds || []).map(function (eid) {
    return '<button type="button" class="btn-ghost" style="font-size:10px;margin:2px" onclick="openEchoMemory(' + edoQ(eid) + ')">' + eid + '</button>';
  }).join(' ');
  return '<div id="edo-ind-backdrop" style="position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:10000;display:flex;align-items:center;justify-content:center;padding:12px" onclick="if(event.target.id===\'edo-ind-backdrop\')edoCloseInd()"><div style="background:var(--card);border-radius:12px;max-width:560px;width:100%;max-height:90vh;overflow-y:auto;padding:16px;border:1px solid var(--border2)" onclick="event.stopPropagation()">' +
    '<div style="font-size:12px;font-weight:700;margin-bottom:6px"' + edoT('Individual Record', 'PII detail — access logged to Echo Core.') + '>' + per.fullName + ' · ' + per.individualId + '</div>' +
    '<div style="font-size:10px;color:var(--amber);margin-bottom:10px;border:1px solid rgba(245,158,11,.3);padding:8px;border-radius:8px"' + edoT('Individual Access Banner', 'Per Cardinal compliance, every PII access is logged to Echo Core as an immutable audit event.') + '>INDIVIDUAL\u2011LEVEL VIEW — Access logged. You are: ' + (d.user || '') + ' · Role: ' + edoRoleDisp() + '</div>' +
    '<div style="font-size:11px;margin-bottom:10px"><strong>Demographics</strong><pre style="font-size:10px;color:var(--muted2);white-space:pre-wrap">' + dmStr + '</pre></div>' +
    '<div style="font-size:11px;margin-bottom:10px"><strong>Decision snapshot</strong><p style="color:var(--muted2)">' + hist + '</p></div>' +
    '<div style="font-size:11px;margin-bottom:10px"><strong>Audit trail</strong><div>' + echos + '</div></div>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
    '<button type="button" class="btn-primary" style="font-size:10px"' + edoT('Remediation Cohort', 'Add to remediation cohort under Atonement policy.') + ' onclick="showToast(\'Queued — Atonement cohort (prototype).\')">Add to Remediation Cohort</button>' +
    '<button type="button" class="btn-ghost" style="font-size:10px"' + edoT('Notify Person', 'Send notification per Affected-Person Communication policy.') + ' onclick="showToast(\'Notify Person — template queued (prototype).\')">Notify Person</button>' +
    '<button type="button" class="btn-ghost" style="font-size:10px" onclick="showToast(\'Marked reviewed.\')">Mark Reviewed</button>' +
    '<button type="button" class="btn-ghost" style="font-size:10px" onclick="edoCloseInd()">Close</button></div></div></div>';
}

window.renderEden = function (org) {
  var CD = window.CARDINAL_DATA;
  if (!CD || !CD[org]) org = 'ad';
  window.__edo.org = org;
  window.__edo.screen = 'eden';
  var root = document.getElementById('eden-core-root');
  if (!root) return;
  var d = CD[org];
  var extPeer = d.peerPercentileLabel || d.peerComparison;
  var bfN = d.biasFraudStats ? d.biasFraudStats.overlapCount : 0;
  var bias = d.biasScore;
  var col = edoGaugeColor(bias, false);
  var cases = d.biasIncidentsActive || [];
  var sev = window.__edo.caseSev;
  if (sev !== 'all') cases = cases.filter(function (c) { return String(c.severity).toLowerCase() === sev; });
  var biasModels = (d.biasMetricsByModel || []).slice();
  var mf = window.__edo.mdlFilt;
  if (mf === 'Critical') biasModels = biasModels.filter(function (m) { return m.status === 'Critical'; });
  else if (mf === 'Watch') biasModels = biasModels.filter(function (m) { return m.status === 'Watch'; });
  else if (mf === 'Passing') biasModels = biasModels.filter(function (m) { return m.status === 'Passing'; });
  else if (mf === 'Highest Affected') biasModels.sort(function (a, b) { return (b.affectedCohort.totalCount || 0) - (a.affectedCohort.totalCount || 0); });
  var sortK = window.__edo.mdlSort;
  if (sortK === 'di') biasModels.sort(function (a, b) { return a.di - b.di; });
  var cards = cases.map(function (c) {
    var se = c.severity === 'Critical' ? 'badge-red' : c.severity === 'High' ? 'badge-amber' : 'badge-yellow';
    var sla = edoSlaDays(c.slaDeadline);
    return '<div class="edo-case-card" style="min-width:320px;height:140px;background:var(--bg3);border-radius:12px;padding:12px;border:1px solid var(--border2);flex-shrink:0;transition:transform .15s;cursor:default" onmouseenter="this.style.transform=\'translateY(-3px)\'" onmouseleave="this.style.transform=\'none\'"' + edoT('Active Bias Case', 'Open remediation case tracked in War Room.') + '>' +
      '<div style="display:flex;justify-content:space-between"><span class="badge ' + se + '" style="font-size:9px"' + edoT(c.severity, c.severity + ' severity — remediation priority.') + '>' + c.severity + '</span></div>' +
      '<div style="font-size:12px;font-weight:700;margin-top:6px"' + edoT(c.caseId, 'War Room case identifier.') + '>' + c.caseId + ' · ' + c.modelId + '</div>' +
      '<div style="font-size:10px;color:var(--muted);margin-top:4px">' + c.affectedCount + ' affected · ' + c.metricViolation + '</div>' +
      '<div style="font-size:10px;color:var(--amber);margin-top:4px"' + edoT('SLA Countdown', 'Cardinal enforces Critical 14d / High 30d / Medium 60d fix deadlines. Echo Core logs SLA events.') + '>' + sla + ' days remaining</div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px"><span style="font-size:10px"' + edoT('Lead Assignee', 'Case owner — ' + c.leadAssignee) + '>' + c.leadAssignee + '</span>' +
      '<button type="button" class="btn-primary" style="font-size:10px;padding:4px 10px" onclick="openWarRoomToCase(' + edoQ(edoCaseId(c.caseId)) + ')">Open Case</button></div></div>';
  }).join('');
  var mrows = '';
  for (var r = 0; r < biasModels.length; r++) {
    var m = biasModels[r];
    var origIdx = (d.biasMetricsByModel || []).indexOf(m);
    mrows += '<tr style="cursor:pointer" onclick="edoOpenModel(\'eden\',' + origIdx + ')"' + edoT(m.modelId, (d.modelLevelScores && d.modelLevelScores[origIdx] && d.modelLevelScores[origIdx].purpose) ? d.modelLevelScores[origIdx].purpose : 'Monitored model') + '><td style="padding:8px;font-size:11px">' + m.modelId + '</td><td style="padding:8px">' + m.di + '</td><td style="padding:8px">' + m.equalizedOdds + '</td><td style="padding:8px;font-size:10px">' + m.topProxyVariable.name + ' ' + m.topProxyVariable.correlation + '</td><td style="padding:8px">' + (m.affectedCohort.totalCount || 0) + '</td><td style="padding:8px"><span style="color:' + edoStatColor(m.status) + '">' + m.status + '</span></td><td style="padding:8px">' + edoTr(m.trend30d) + '</td></tr>';
  }
  var ov = (d.biasFraudOverlapCases || []).map(function (o) {
    return '<div style="padding:10px;background:var(--bg3);border-radius:8px;margin-bottom:8px;cursor:pointer;border:1px solid var(--border2)" onclick="openWarRoomToCase(' + edoQ(edoCaseId(o.caseId)) + ')"' + edoT('Overlap case', o.summary) + '><strong>' + o.caseId + '</strong> · ' + o.modelId + '<div style="font-size:10px;color:var(--muted);margin-top:4px">' + o.summary + '</div><div style="font-size:10px;color:var(--amber)">' + o.exposureNote + '</div></div>';
  }).join('');
  var cgFlat = [];
  var cgs = d.cohortGroupSummaries || {};
  var foc = window.__edo.cohortModelFocus;
  Object.keys(cgs).forEach(function (modelId) {
    if (foc && foc !== modelId) return;
    (cgs[modelId] || []).forEach(function (g) {
      if (window.__edo.cohortQ && g.groupLabel.indexOf(window.__edo.cohortQ) < 0) return;
      cgFlat.push({ modelId: modelId, g: g });
    });
  });
  var cohortRows = '';
  for (var i = 0; i < cgFlat.length; i++) {
    var item = cgFlat[i];
    var g = item.g;
    var ek = item.modelId + '|' + g.groupId;
    var exp = !!window.__edo.exp[ek];
    var anon = (g.representativeCases || []).slice(0, 10).map(function (rid, ii) {
      return 'Individual ' + String.fromCharCode(65 + ii) + ' — ID ' + rid;
    }).join('<br/>');
    var conn = (d.fraudMetricsByModel || []).filter(function (fm) { return fm.modelId === item.modelId; })[0];
    var fc = conn && conn.biasFraudConnection ? conn.biasFraudConnection.caseCount : 0;
    var ac = (d.biasIncidentsActive || []).concat(d.fraudIncidentsActive || []).filter(function (x) { return x.modelId === item.modelId; })[0];
    var cshow = ac ? ac.caseId : '—';
    cohortRows += '<tr><td colspan="5" style="padding:0"><div style="border:1px solid var(--border2);border-radius:10px;margin-bottom:8px;overflow:hidden">' +
      '<div style="display:table;width:100%;table-layout:fixed;cursor:pointer" onclick="edoExpGroup(' + edoQ(ek) + ')"><span style="display:table-cell;padding:10px;font-size:11px;width:32%"' + edoT(g.groupLabel, 'Cohort group aggregated statistics.') + '>' + g.groupLabel + '</span>' +
      '<span style="display:table-cell;padding:10px;font-size:11px">' + g.affectedCount + '</span>' +
      '<span style="display:table-cell;padding:10px;font-size:11px">' + g.biasMetric + '</span>' +
      '<span style="display:table-cell;padding:10px;font-size:11px"' + edoT('Fraud Connection', 'Linked fraud cases from bias-fraud overlap.') + '>' + fc + ' cases</span>' +
      '<span style="display:table-cell;padding:10px;font-size:11px"' + edoT('Active Case', 'Open War Room case tied to this cohort.') + '>' + cshow + '</span></div>' +
      (exp ? '<div style="padding:10px;background:rgba(166,218,255,.06);font-size:10px;color:var(--muted2)">' + anon + '</div>' : '') +
      '<div style="padding:8px;display:flex;gap:8px"><button type="button" class="btn-ghost" style="font-size:10px" onclick="event.stopPropagation();edoViewIndividuals(' + edoQ(item.modelId) + ',' + edoQ(g.groupId) + ')"' + (!edoCanPii() ? edoT('Restricted Access', 'Individual PII view requires Admin or Legal Counsel. Contact your Cardinal administrator to request access.') : edoT('Individual View', 'Per-person record with PII. Admin and Legal Counsel only. Every access logged to Echo Core.')) + '>' + (edoCanPii() ? 'View Individuals' : '\ud83d\udd12 Admin Access Required') + '</button></div></div></td></tr>';
  }
  var piiBlock = '';
  if (!window.__edo.cohortSummary && edoCanPii()) {
    var inds = [];
    var ci = d.cohortIndividuals || {};
    Object.keys(ci).forEach(function (mk) {
      if (foc && foc !== mk) return;
      (ci[mk] || []).forEach(function (p) { inds.push({ mk: mk, p: p }); });
    });
    piiBlock = '<div style="border:1px solid rgba(245,158,11,.35);padding:10px;border-radius:8px;margin-bottom:12px;font-size:10px;color:var(--amber)"' + edoT('Individual Access Banner', 'Per Cardinal compliance, every PII access is itself logged to Echo Core as an immutable audit event.') + '>INDIVIDUAL\u2011LEVEL VIEW — All access logged to Echo Core. You are: ' + (d.user || '') + ', Role: ' + edoRoleDisp() + '</div>';
    piiBlock += '<table class="data-table" style="width:100%"><thead><tr><th ' + edoT('Individual ID', 'Anonymized identifier.') + '>ID</th><th ' + edoT('Name', 'Full name — PII.') + '>Name</th><th>Info</th><th ' + edoT('Bias Status', 'Counterfactual outcome summary.') + '>Bias</th><th ' + edoT('Fraud Flag', 'Fraud flag status for this person.') + '>Fraud</th><th ' + edoT('Active Case', 'Is this individual part of an open remediation cohort?') + '>Case</th></tr></thead><tbody>';
    for (var pi = 0; pi < inds.length; pi++) {
      var ip = inds[pi].p;
      var imk = inds[pi].mk;
      var dec2 = ip.decisionsByModel && ip.decisionsByModel[imk];
      var gstr = JSON.stringify(ip.demographics || {});
      piiBlock += '<tr style="cursor:pointer" onclick="edoOpenInd(' + edoQ(ip.individualId) + ')"><td style="font-size:10px">' + ip.individualId + '</td><td style="font-size:10px">' + ip.fullName + '</td><td style="font-size:10px;max-width:140px;overflow:hidden;text-overflow:ellipsis">' + gstr + '</td><td style="font-size:10px"' + edoT('Counterfactual Result', 'If we changed one demographic variable and reran: same outcome means fair; would-have-flipped means biased.') + '>' + (dec2 ? dec2.counterfactualOutcome : '') + '</td><td style="font-size:10px"' + edoT('Fraud Flag', 'no-flag = clean; flagged-cleared = cleared on review; flagged-confirmed = active fraud case.') + '>' + (dec2 ? dec2.fraudFlagStatus : '') + '</td><td style="font-size:10px">' + (dec2 && dec2.caseId ? dec2.caseId : 'None') + '</td></tr>';
    }
    piiBlock += '</tbody></table>';
  }
  var nAff = 0;
  Object.keys(cgs || {}).forEach(function (mm) {
    (cgs[mm] || []).forEach(function (gg) { nAff += gg.affectedCount || 0; });
  });
  var ageRow = (d.disparityHeatmap && d.disparityHeatmap.yLabels || []).map(function (yl, yi) {
    var row = (d.disparityHeatmap.cells && d.disparityHeatmap.cells[yi]) || [];
    var mx = Math.max.apply(null, row.concat([1]));
    return '<div style="margin-bottom:6px"><div style="font-size:10px">' + yl + '</div><div style="height:8px;background:var(--bg3);border-radius:4px"><div style="height:100%;width:' + Math.round(100 * row[0] / mx) + '%;background:var(--accent);border-radius:4px"></div></div></div>';
  }).join('');
  var heatCells = '';
  if (d.disparityHeatmap && d.disparityHeatmap.cells) {
    for (var hi = 0; hi < d.disparityHeatmap.cells.length; hi++) {
      var crow = d.disparityHeatmap.cells[hi];
      for (var hj = 0; hj < crow.length; hj++) {
        var mult = crow[hj];
        var op = mult >= 2 ? 0.95 : mult >= 1.5 ? 0.65 : 0.35;
        heatCells += '<div style="flex:1;min-width:36px;height:28px;margin:2px;border-radius:6px;background:rgba(239,68,68,' + op + ');cursor:pointer" onclick="edoCohortFromDemo(' + edoQ(org) + ',' + edoQ((d.disparityHeatmap.yLabels[hi] || '') + ' × ' + (d.disparityHeatmap.xLabels[hj] || '')) + ')"' + edoT('Geographic cell', 'Disparity multiplier from CARDINAL_DATA disparityHeatmap.') + ' title="' + mult + 'x"></div>';
      }
    }
  }
  root.innerHTML =
    '<div class="edo-scroll" style="padding:12px 12px 40px;max-height:calc(100vh - 120px);overflow-y:auto">' +
    '<section id="eden-sec-hero" style="margin-bottom:20px"><div style="display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start">' +
    '<div style="flex:0 0 240px;text-align:center"' + edoT('Bias Detection Score', 'Composite measure of fairness across all monitored models. Below 70 = active violations.') + '>' +
    '<div id="eden-gauge-ring" style="width:220px;height:220px;margin:0 auto;border-radius:50%;background:conic-gradient(' + col + ' ' + bias * 3.6 + 'deg, var(--bg3) 0);display:flex;align-items:center;justify-content:center"><div style="width:150px;height:150px;border-radius:50%;background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:center"><span id="eden-gauge-val" style="font-size:42px;font-weight:800;color:' + col + '">0</span><span style="font-size:10px;color:var(--muted)">Bias Score</span></div></div>' +
    '<div style="margin-top:10px;font-size:14px;font-weight:700"' + edoT('Bias Detection', 'Eden Core bias monitoring.') + '>Bias Detection</div><div style="font-size:11px;color:var(--muted)"' + edoT('Status', 'Threshold interpretation from CARDINAL_DATA.') + '>' + (d.edenHeroSub || '') + '</div></div>' +
    '<div style="flex:1;min-width:260px">' + edoSparkBias(d) +
    '<div style="margin-top:10px"><span class="badge badge-blue" style="font-size:10px"' + edoT('Peer Position', 'Your rank vs anonymized industry peers using Cardinal.') + '>' + extPeer + '</span></div>' +
    '<div style="font-size:10px;color:var(--muted);margin-top:8px"' + edoT('Last calculated', 'Freshness of bias sub-score from CARDINAL_DATA.') + '>Live — last calculated ' + (d.auditTimestamp || 'recently') + '</div></div></div>' +
    '<div style="margin-top:16px;padding:12px;border-radius:10px;border:1px solid rgba(245,158,11,.35);cursor:pointer;background:rgba(245,158,11,.06)" onclick="edoScrollBf()"' + edoT('Bias-Fraud Connection', 'Cardinal unique value. Bias creates blind spots; fraudsters exploit blind spots.') + '><strong>Bias\u2011Fraud Connection:</strong> ' + bfN + ' cases where bias blind spots created fraud exposure. Click to jump \u2192</div>' +
    '<button type="button" class="btn-primary" style="margin-top:10px;font-size:11px" onclick="document.getElementById(\'eden-sec-cases\').scrollIntoView({behavior:\'smooth\'})"' + edoT('View Live Detections', 'Scroll to active bias cases.') + '>View Live Detections \u2192</button></section>' +
    '<section id="eden-sec-cases" style="margin-bottom:20px"><h2 style="font-size:14px;margin:0 0 8px"' + edoT('Active Bias Cases', 'Open bias remediation cases from CARDINAL_DATA.') + '>Active Bias Cases — ' + (d.biasIncidentsActive || []).length + ' open</h2>' +
    '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap"><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'all\')">All</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'critical\')">Critical</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'high\')">High</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'medium\')">Medium</button></div>' +
    '<div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px">' + cards + '</div>' +
    '<button type="button" class="btn-ghost" style="font-size:11px;margin-top:8px" onclick="showScreen(\'warroom\',null)"' + edoT('War Room', 'Open case command center.') + '>View All in War Room \u2192</button></section>' +
    '<section style="margin-bottom:20px"><h2 style="font-size:14px"' + edoT('Protected Group Impact', 'Bias lens demographic analysis.') + '>Protected Group Impact — Bias Lens</h2><p style="font-size:11px;color:var(--muted)"' + edoT('Subtitle', 'Where adverse outcomes cluster.') + '>How bias concentrates across demographics, age, gender, geography.</p>' +
    '<div style="padding:12px;border-radius:10px;background:rgba(239,68,68,.08);margin:12px 0;border:1px solid rgba(239,68,68,.25)"' + edoT('Statistically Significant', 'Disparity passes EEOC four-fifths rule threshold AND has p-value < 0.05 for sample size.') + '><strong>Statistically significant bias:</strong> ' + (d.statBiasCallout || '') + '</div>' +
    '<div class="grid-2" style="gap:14px"><div class="card"><div class="section-title"' + edoT('Race / Ethnicity', 'Horizontal approval proxy by group.') + '>Race / Ethnicity</div>' + edoRaceBarsHtml(d, org) + '</div>' +
    '<div class="card"><div class="section-title"' + edoT('Age comparison proxy', 'Age bracket disparity visualization from heatmap.') + '>Age brackets</div>' + ageRow + '</div></div>' +
    '<div class="grid-2" style="margin-top:14px;gap:14px"><div class="card"><div class="section-title"' + edoT('Gender', 'Gender disparity proxy from dashboard demo rates.') + '>Gender</div><div style="font-size:11px;color:var(--muted2)">Male / Female / Non-binary approval proxies tracked — see Model detail for specifics.</div></div>' +
    '<div class="card"><div class="section-title"' + edoT('Geographic heat strip', 'States / bases / ZIP clusters by industry.') + '>Geographic disparity</div><div style="display:flex;flex-wrap:wrap">' + heatCells + '</div></div></div>' +
    '<div style="margin-top:12px;padding:12px;border-radius:10px;border:1px solid var(--border2)"' + edoT('Intersectional Analysis', 'Compound disparity across multiple demographic dimensions.') + '><strong>Most vulnerable intersection:</strong> ' + (d.statVulnerableIntersection || '') + '</div></section>' +
    '<section style="margin-bottom:20px"><h2 style="font-size:14px"' + edoT('Models Monitored for Bias', 'Coverage grid from biasMetricsByModel.') + '>Models Monitored for Bias</h2>' +
    '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0"><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'all\')">All</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'Critical\')">Critical</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'Watch\')">Watch</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'Passing\')">Passing</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'Highest Affected\')">Highest Affected</button></div>' +
    '<div style="overflow-x:auto"><table class="data-table"><thead><tr><th onclick="edoSortModels(\'model\')"' + edoT('Model', 'Monitored model name and version.') + '>Model</th><th onclick="edoSortModels(\'di\')"' + edoT('Disparate Impact (DI)', 'Ratio of favorable rates — EEOC 0.80 floor.') + '>DI</th><th ' + edoT('Equalized Odds', 'Should be <0.10.') + '>EO</th><th ' + edoT('Proxy Variable', 'Feature correlating with protected class.') + '>Top Proxy</th><th>Affected</th><th ' + edoT('Status', 'Critical / Watch / Passing.') + '>Status</th><th ' + edoT('Trend (30d)', 'Direction of bias metric over last 30 days.') + '>Trend</th></tr></thead><tbody>' + mrows + '</tbody></table></div></section>' +
    '<section id="edo-sec-cohort" style="margin-bottom:20px"><h2 style="font-size:14px"' + edoT('Cohort Explorer', 'Search affected groups and individuals.') + '>Cohort Explorer — Affected Individuals</h2><p style="font-size:11px;color:var(--muted)">Search and filter across ' + nAff + ' affected individuals (aggregated).</p>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0"><span class="badge badge-blue" style="font-size:10px"' + edoT('Cohort View', 'Aggregated group-level statistics. No PII.') + '>Cohort View</span>' + (edoCanPii() ? '<span class="badge badge-green" style="font-size:10px"' + edoT('Individual View', 'PII drill-in enabled for your role.') + '>Individual View</span>' : '<span class="badge badge-amber" style="font-size:10px"' + edoT('Restricted Access', 'This view shows individual PII and requires Admin or Legal Counsel role.') + '>\ud83d\udd12 Admin Access Required</span>') +
    '<span style="margin-left:auto;font-size:10px;color:var(--muted)">Demo as:</span>' +
    '<button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Compliance Officer\')">Compliance</button><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Data Scientist\')">Data Scientist</button><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Executive\')">Executive</button><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Legal Counsel\')">Legal Counsel</button><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Admin\')">Admin</button></div>' +
    '<div style="display:flex;gap:8px;margin-bottom:10px"><button type="button" class="btn-ghost" style="font-size:10px' + (window.__edo.cohortSummary ? ';border-color:var(--accent)' : '') + '"' + edoT('Cohort Summary', 'Aggregated cohort statistics. Available to all roles. No PII shown.') + ' onclick="edoCohortToggle(true)">Cohort Summary</button><button type="button" class="btn-ghost" style="font-size:10px' + (!window.__edo.cohortSummary ? ';border-color:var(--accent)' : '') + '"' + edoT('Individual Drill-In', 'Per-person record with PII. Admin and Legal Counsel only. Every access logged to Echo Core.') + ' onclick="if(window.edoCanPii())window.edoCohortToggle(false)">Individual Drill\u2011In ' + (!edoCanPii() ? '\ud83d\udd12' : '') + '</button><button type="button" class="btn-ghost" style="font-size:10px;margin-left:auto"' + edoT('Export Cohort CSV', 'Downloads anonymized cohort data; Admin export adds individual IDs only, not full names.') + ' onclick="edoExportCsv()">Export Cohort CSV</button></div>' +
    (window.__edo.cohortSummary ? '<table class="data-table"><thead><tr><th>Group</th><th>Affected</th><th>DI</th><th>Fraud Conn</th><th>Case</th></tr></thead><tbody>' + cohortRows + '</tbody></table>' : piiBlock) +
    '</section>' +
    '<section id="eden-sec-bf" style="margin-bottom:20px"><h2 style="font-size:14px"' + edoT('Cardinal Difference', 'Bias \u00d7 fraud overlap.') + '>Where Bias Creates Fraud Exposure</h2><p style="font-size:11px;color:var(--muted)"' + edoT('Unique Insight', 'Bias creates blind spots. Fraudsters exploit blind spots.') + '>No other platform connects these.</p>' +
    '<div style="display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;margin:16px 0">' +
    '<div style="width:120px;height:120px;border-radius:50%;background:rgba(239,68,68,.2);display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;padding:8px"' + edoT('Bias Cases', 'Active bias cases count from data.') + '>Bias Cases<br><strong>' + (d.biasFraudStats && d.biasFraudStats.biasActiveCount != null ? d.biasFraudStats.biasActiveCount : (d.biasIncidentsActive || []).length) + '</strong></div>' +
    '<div style="width:120px;height:120px;border-radius:50%;background:rgba(251,146,60,.25);display:flex;align-items:center;justify-content:center;font-size:11px;text-align:center;padding:8px;margin-left:-40px"' + edoT('Fraud Cases', 'Active fraud cases.') + '>Fraud Cases<br><strong>' + (d.biasFraudStats && d.biasFraudStats.fraudActiveCount != null ? d.biasFraudStats.fraudActiveCount : (d.fraudIncidentsActive || []).length) + '</strong></div></div>' +
    '<div style="text-align:center;font-size:12px;font-weight:600;color:var(--amber);margin-bottom:12px"' + edoT('Overlap', 'Bias\u2011fraud connection case count.') + '>Overlap: ' + bfN + ' cases</div>' + ov + '</section>' +
    '<section><h2 style="font-size:14px"' + edoT('Echo Footer', 'Tamper-proof audit trail.') + '>Echo Core</h2><p style="font-size:11px;color:var(--muted)"' + edoT('Tamper-proof', 'Cryptographic, court-admissible, regulator-ready.') + '>Every bias detection logged tamper\u2011proof in Echo Core.</p><p style="font-size:11px">Most recent: ' + edoEchoRecent(d) + '</p>' +
    '<button type="button" class="btn-ghost" style="font-size:11px" onclick="openEchoCoreFiltered(\'eden\')"' + edoT('Echo Core', 'Filtered timeline to Eden-classified events.') + '>View Full Bias Audit Log \u2192</button></section></div>' +
    edoBuildModelDrawer(d, org, 'eden') + (window.__edo.piiInd ? edoIndPanel(d, org, window.__edo.piiInd, 'eden') : '');
  setTimeout(function () {
    var el = document.getElementById('eden-gauge-val');
    if (!el) return;
    var tgt = bias;
    var cur = 0;
    var tmr = setInterval(function () {
      cur += Math.max(1, Math.ceil(tgt / 25));
      if (cur >= tgt) { cur = tgt; clearInterval(tmr); }
      el.textContent = cur;
    }, 20);
  }, 30);
};

window.renderObsidian = function (org) {
  var CD = window.CARDINAL_DATA;
  if (!CD || !CD[org]) org = 'ad';
  window.__edo.org = org;
  window.__edo.screen = 'obsidian';
  var root = document.getElementById('obsidian-core-root');
  if (!root) return;
  var d = CD[org];
  var fraud = d.fraudScore;
  var col = edoGaugeColor(fraud, true);
  var extPeer = d.peerPercentileLabel || d.peerComparison;
  var bfN = d.biasFraudStats ? d.biasFraudStats.overlapCount : 0;
  var cases = d.fraudIncidentsActive || [];
  var sev = window.__edo.caseSev;
  if (sev !== 'all') cases = cases.filter(function (c) { return String(c.severity).toLowerCase() === sev; });
  var fmodels = (d.fraudMetricsByModel || []).slice();
  var mf = window.__edo.mdlFilt;
  if (mf === 'Critical') fmodels = fmodels.filter(function (m) { return m.status === 'Critical'; });
  else if (mf === 'Watch') fmodels = fmodels.filter(function (m) { return m.status === 'Watch'; });
  else if (mf === 'Passing') fmodels = fmodels.filter(function (m) { return m.status === 'Passing'; });
  else if (mf === 'Highest Affected') fmodels.sort(function (a, b) { return (b.topFraudPattern.casesDetected || 0) - (a.topFraudPattern.casesDetected || 0); });
  var cards = cases.map(function (c) {
    var se = c.severity === 'Critical' ? 'badge-red' : c.severity === 'High' ? 'badge-amber' : 'badge-yellow';
    var sla = edoSlaDays(c.slaDeadline);
    return '<div class="edo-case-card" style="min-width:320px;height:140px;background:var(--bg3);border-radius:12px;padding:12px;border:1px solid var(--border2);flex-shrink:0" onmouseenter="this.style.transform=\'translateY(-3px)\'" onmouseleave="this.style.transform=\'none\'">' +
      '<span class="badge ' + se + '" style="font-size:9px"' + edoT(c.severity, 'Fraud case severity.') + '>' + c.severity + '</span>' +
      '<div style="font-size:12px;font-weight:700;margin-top:6px"' + edoT(c.caseId, 'War Room case.') + '>' + c.caseId + ' · ' + c.modelId + '</div>' +
      '<div style="font-size:10px;color:var(--muted)">' + c.metricViolation + '</div>' +
      '<div style="font-size:10px;color:var(--amber);margin-top:4px"' + edoT('SLA Countdown', 'Cardinal enforces SLA deadlines on fraud remediation.') + '>' + sla + ' days remaining</div>' +
      '<div style="margin-top:8px"><button type="button" class="btn-primary" style="font-size:10px;padding:4px 10px" onclick="openWarRoomToCase(' + edoQ(edoCaseId(c.caseId)) + ')">Open Case</button></div></div>';
  }).join('');
  var mrows = '';
  for (var r = 0; r < fmodels.length; r++) {
    var m = fmodels[r];
    var origIdx = (d.fraudMetricsByModel || []).indexOf(m);
    var bfc = m.biasFraudConnection ? m.biasFraudConnection.caseCount : 0;
    mrows += '<tr style="cursor:pointer" onclick="edoOpenModel(\'obs\',' + origIdx + ')"><td style="padding:8px;font-size:11px">' + m.modelId + '</td><td style="padding:8px">' + m.syntheticIdentityRate + '%</td><td style="padding:8px">' + m.behavioralAnomalyRate + '%</td><td style="padding:8px">' + m.clusterFraudRate + '%</td><td style="padding:8px;font-size:10px">' + m.topFraudPattern.type + '</td><td style="padding:8px">' + bfc + '</td><td style="padding:8px;color:' + edoStatColor(m.status) + '">' + m.status + '</td><td style="padding:8px">' + edoTr(m.trend30d) + '</td></tr>';
  }
  var ov = (d.biasFraudOverlapCases || []).map(function (o) {
    return '<div style="padding:10px;background:var(--bg3);border-radius:8px;margin-bottom:8px;cursor:pointer;border:1px solid var(--border2)" onclick="openWarRoomToCase(' + edoQ(edoCaseId(o.caseId)) + ')"' + edoT('Fraud-bias case', o.summary) + '><strong>' + o.caseId + '</strong> — Obsidian lens · ' + o.modelId + '<div style="font-size:10px;color:var(--muted);margin-top:4px">' + o.summary + '</div></div>';
  }).join('');
  var cgFlat = [];
  var cgs = d.cohortGroupSummaries || {};
  var foc = window.__edo.cohortModelFocus;
  Object.keys(cgs).forEach(function (modelId) {
    if (foc && foc !== modelId) return;
    (cgs[modelId] || []).forEach(function (g) {
      cgFlat.push({ modelId: modelId, g: g });
    });
  });
  var cohortRows = '';
  for (var i = 0; i < cgFlat.length; i++) {
    var item = cgFlat[i];
    var g = item.g;
    var ek = 'obs|' + item.modelId + '|' + g.groupId;
    var exp = !!window.__edo.exp[ek];
    var conn = (d.fraudMetricsByModel || []).filter(function (fm) { return fm.modelId === item.modelId; })[0];
    var fc = conn && conn.biasFraudConnection ? conn.biasFraudConnection.caseCount : 0;
    var lbl = org === 'fin' ? ('Synthetic identity pressure — ' + g.groupLabel) : org === 'health' ? ('Fraud target cohort — ' + g.groupLabel) : ('Fraud ring proximity — ' + g.groupLabel);
    cohortRows += '<tr><td colspan="5" style="padding:0"><div style="border:1px solid var(--border2);border-radius:10px;margin-bottom:8px">' +
      '<div style="padding:10px;cursor:pointer" onclick="edoExpGroup(' + edoQ(ek) + ')"><strong' + edoT('Fraud cohort', 'Fraud lens cohort summary.') + '>' + lbl + '</strong><div style="font-size:10px;color:var(--muted)">Affected ' + g.affectedCount + ' · Fraud catch proxy ' + g.fraudMetric + '% · Bias\u2011fraud ' + fc + '</div></div>' +
      (exp ? '<div style="padding:8px;font-size:10px;background:rgba(251,146,60,.08)">Representative anonymized IDs on file.</div>' : '') +
      '<div style="padding:8px"><button type="button" class="btn-ghost" style="font-size:10px" onclick="event.stopPropagation();edoViewIndividuals(' + edoQ(item.modelId) + ',' + edoQ(g.groupId) + ')">' + (edoCanPii() ? 'View Individuals' : '\ud83d\udd12 Admin Access Required') + '</button></div></div></td></tr>';
  }
  var piiBlock = '';
  if (!window.__edo.cohortSummary && edoCanPii()) {
    var inds = [];
    var ci = d.cohortIndividuals || {};
    Object.keys(ci).forEach(function (mk) {
      if (foc && foc !== mk) return;
      (ci[mk] || []).forEach(function (p) { inds.push({ mk: mk, p: p }); });
    });
    piiBlock = '<div style="border:1px solid rgba(251,146,60,.35);padding:10px;border-radius:8px;margin-bottom:12px;font-size:10px;color:var(--amber)"' + edoT('Individual Access Banner', 'Every PII access logged.') + '>INDIVIDUAL\u2011LEVEL VIEW — Fraud + PII. ' + (d.user || '') + ' · ' + edoRoleDisp() + '</div><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Fraud flags</th><th>Case</th></tr></thead><tbody>';
    for (var qi = 0; qi < inds.length; qi++) {
      var ip2 = inds[qi].p;
      var mk2 = inds[qi].mk;
      var dec3 = ip2.decisionsByModel && ip2.decisionsByModel[mk2];
      piiBlock += '<tr style="cursor:pointer" onclick="edoOpenInd(' + edoQ(ip2.individualId) + ')"><td style="font-size:10px">' + ip2.individualId + '</td><td style="font-size:10px">' + ip2.fullName + '</td><td style="font-size:10px">' + (dec3 ? dec3.fraudFlagStatus : '') + '</td><td style="font-size:10px">' + (dec3 && dec3.caseId ? dec3.caseId : '') + '</td></tr>';
    }
    piiBlock += '</tbody></table>';
  }
  var fraudBars = (fmodels || []).slice(0, 4).map(function (fm) {
    return '<div style="margin-bottom:8px"><div style="font-size:10px">' + fm.modelId + '</div><div style="height:10px;background:var(--bg3);border-radius:4px"><div style="width:' + fm.syntheticIdentityRate + '%;height:100%;background:#fb923c;border-radius:4px"></div></div></div>';
  }).join('');
  var nAff = 0;
  Object.keys(cgs || {}).forEach(function (mm) { (cgs[mm] || []).forEach(function (gg) { nAff += gg.affectedCount || 0; }); });
  root.innerHTML =
    '<div class="edo-scroll" style="padding:12px 12px 40px;max-height:calc(100vh - 120px);overflow-y:auto">' +
    '<section id="obs-sec-hero"><div style="display:flex;flex-wrap:wrap;gap:20px">' +
    '<div style="text-align:center"' + edoT('Fraud Detection Score', 'Composite fraud catch rate across synthetic identity, behavioral anomaly, cluster, and velocity patterns.') + '>' +
    '<div style="width:220px;height:220px;margin:0 auto;border-radius:50%;background:conic-gradient(' + col + ' ' + fraud * 3.6 + 'deg, var(--bg3) 0);display:flex;align-items:center;justify-content:center"><div style="width:150px;height:150px;border-radius:50%;background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:center"><span id="obs-gauge-val" style="font-size:40px;font-weight:800;color:' + col + '">0</span><span style="font-size:10px;color:var(--muted)">Fraud Score</span></div></div>' +
    '<div style="margin-top:10px;font-weight:700">Fraud Detection</div><div style="font-size:11px;color:var(--muted)">' + (d.obsidianHeroSub || '') + '</div></div>' +
    '<div style="flex:1">' + edoSparkFraud(d) + '<div style="margin-top:10px"><span class="badge badge-blue" style="font-size:10px"' + edoT('Peer Position', 'Peer rank via Cardinal.') + '>' + extPeer + '</span></div><div style="font-size:10px;color:var(--muted);margin-top:8px">Live — last calculated ' + (d.auditTimestamp || '') + '</div></div></div>' +
    '<div style="margin-top:14px;padding:12px;border-radius:10px;border:1px solid rgba(251,146,60,.4);cursor:pointer;background:rgba(251,146,60,.07)" onclick="edoScrollBf()"' + edoT('Bias-Fraud Connection', 'Cardinal unique value.') + '>Bias\u2011Fraud Connection: ' + bfN + ' overlapping cases \u2014 Obsidian view</div></section>' +
    '<section id="obs-sec-cases" style="margin-top:20px"><h2 style="font-size:14px">Active Fraud Cases — ' + (d.fraudIncidentsActive || []).length + ' open</h2><div style="display:flex;gap:8px;flex-wrap:wrap">' +
    '<button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'all\')">All</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'critical\')">Critical</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'high\')">High</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterCases(\'medium\')">Medium</button></div>' +
    '<div style="display:flex;gap:12px;overflow-x:auto;margin-top:10px">' + cards + '</div><button type="button" class="btn-ghost" style="font-size:11px" onclick="showScreen(\'warroom\',null)">View All in War Room \u2192</button></section>' +
    '<section style="margin-top:20px"><h2 style="font-size:14px"' + edoT('Where Fraud Concentrates', 'Obsidian demographic / geography lens.') + '>Where Fraud Concentrates</h2>' +
    '<div class="grid-2" style="gap:14px;margin-top:10px"><div class="card"><div class="section-title"' + edoT('Synthetic ID by model', 'Catch rate proxy by model.') + '>Synthetic identity rates</div>' + fraudBars + '</div>' +
    '<div class="card"><div class="section-title"' + edoT('Velocity timeline proxy', 'Hourly fraud pressure (illustrative).') + '>Velocity anomalies</div><div style="font-size:11px;color:var(--muted2)">Peaks 02:00–05:00 UTC — cluster replay attempts. Data from CARDINAL_DATA fraud metrics.</div></div></div>' +
    '<div style="margin-top:12px;padding:12px;border-radius:10px;border:1px solid var(--border2)"' + edoT('Most Targeted', 'Highest fraud+bias intersection cohort.') + '><strong>Most targeted cohort:</strong> ' + (d.obsidianMostTargeted || '') + '</div></section>' +
    '<section style="margin-top:20px"><h2 style="font-size:14px">Models — Fraud Coverage</h2><div style="display:flex;gap:6px;flex-wrap:wrap">' +
    '<button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'all\')">All</button><button type="button" class="btn-ghost" style="font-size:10px" onclick="edoFilterModels(\'Watch\')">Watch</button></div>' +
    '<div style="overflow-x:auto;margin-top:10px"><table class="data-table"><thead><tr><th ' + edoT('Model', 'Monitored model.') + '>Model</th><th ' + edoT('Synthetic Identity Rate', 'Percent caught / blocked in monitor.') + '>Syn ID</th><th ' + edoT('Behavioral Anomaly', 'Behavioral fraud detection rate.') + '>Behav</th><th ' + edoT('Cluster Fraud', 'Ring detection rate.') + '>Cluster</th><th ' + edoT('Top Pattern', 'Dominant fraud typology.') + '>Pattern</th><th ' + edoT('Bias\u2011Fraud', 'Linked cases count.') + '>B\u2011F</th><th>Status</th><th ' + edoT('Trend (30d)', '30-day trajectory.') + '>Tr</th></tr></thead><tbody>' + mrows + '</tbody></table></div></section>' +
    '<section id="edo-sec-cohort" style="margin-top:20px"><h2 style="font-size:14px">Cohort Explorer — Fraud Lens</h2><p style="font-size:11px;color:var(--muted)">' + nAff + ' individuals in monitored cohorts (aggregated).</p>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0"><span class="badge badge-blue" style="font-size:10px">Cohort View</span>' + (edoCanPii() ? '<span class="badge badge-green" style="font-size:10px">Individual View</span>' : '<span class="badge badge-amber" style="font-size:10px">\ud83d\udd12 Admin Access Required</span>') +
    '<span style="margin-left:auto;font-size:10px">Demo:</span><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Compliance Officer\')">Compliance</button><button type="button" class="btn-ghost" style="font-size:9px" onclick="edoSetDemoRole(\'Admin\')">Admin</button></div>' +
    '<div style="display:flex;gap:8px"><button type="button" class="btn-ghost" style="font-size:10px' + (window.__edo.cohortSummary ? ';border-color:#fb923c' : '') + '" onclick="edoCohortToggle(true)">Cohort Summary</button><button type="button" class="btn-ghost" style="font-size:10px' + (!window.__edo.cohortSummary ? ';border-color:#fb923c' : '') + '" onclick="edoCanPii()&&edoCohortToggle(false)">Individual Drill\u2011In</button><button type="button" class="btn-ghost" style="font-size:10px;margin-left:auto" onclick="edoExportCsv()">Export CSV</button></div>' +
    (window.__edo.cohortSummary ? '<table class="data-table"><thead><tr><th>Cohort</th><th>Note</th></tr></thead><tbody>' + cohortRows + '</tbody></table>' : piiBlock) +
    '</section>' +
    '<section id="obs-sec-bf" style="margin-top:20px"><h2 style="font-size:14px"' + edoT('Cardinal Unique Insight', 'Dual monitoring moat.') + '>Bias \u00d7 Fraud — Obsidian framing</h2><div style="text-align:center;margin:12px 0;font-weight:700;color:var(--amber)">Overlap: ' + bfN + '</div>' + ov + '</section>' +
    '<section style="margin-top:20px"><p style="font-size:11px;color:var(--muted)">Obsidian events anchored to Echo Core.</p><p style="font-size:11px">Most recent: ' + edoEchoRecentObs(d) + '</p>' +
    '<button type="button" class="btn-ghost" style="font-size:11px" onclick="openEchoCoreFiltered(\'obsidian\')"' + edoT('Obsidian audit log', 'Echo filtered to fraud-class events.') + '>View Obsidian Audit Log \u2192</button></section></div>' +
    edoBuildModelDrawer(d, org, 'obs') + (window.__edo.piiInd ? edoIndPanel(d, org, window.__edo.piiInd, 'obsidian') : '');
  setTimeout(function () {
    var el = document.getElementById('obs-gauge-val');
    if (!el) return;
    var tgt = fraud;
    var cur = 0;
    var iv = setInterval(function () {
      cur += Math.max(1, Math.ceil(tgt / 25));
      if (cur >= tgt) { cur = tgt; clearInterval(iv); }
      el.textContent = cur;
    }, 20);
  }, 30);
};
