// NBA 2K26 MyCareer XP System - Main Application

// ============================================
// DATA MODELS
// ============================================

const ATTRIBUTES = {
  // Shooting (9)
  layup: { name: 'Layup', category: 'Shooting', base: 25 },
  stdnk: { name: 'Standing Dunk', category: 'Shooting', base: 25 },
  dunk: { name: 'Dunk', category: 'Shooting', base: 25 },
  close: { name: 'Close Shot', category: 'Shooting', base: 25 },
  mid: { name: 'Mid-Range', category: 'Shooting', base: 25 },
  threePoint: { name: '3-Point', category: 'Shooting', base: 25 },
  ft: { name: 'Free Throw', category: 'Shooting', base: 25 },
  phook: { name: 'Post Hook', category: 'Shooting', base: 25 },
  pfade: { name: 'Post Fade', category: 'Shooting', base: 25 },
  
  // Offensive Skills (4)
  postc: { name: 'Post Control', category: 'Offensive', base: 25 },
  shotiq: { name: 'Shot IQ', category: 'Offensive', base: 25 },
  ball: { name: 'Ball Handling', category: 'Offensive', base: 25 },
  spdwball: { name: 'Speed w/ Ball', category: 'Offensive', base: 25 },
  
  // Playmaking (5)
  hands: { name: 'Hand Control', category: 'Playmaking', base: 25 },
  pass: { name: 'Passing', category: 'Playmaking', base: 25 },
  passiq: { name: 'Passing IQ', category: 'Playmaking', base: 25 },
  vision: { name: 'Vision', category: 'Playmaking', base: 25 },
  offcon: { name: 'Off-Ball Spacing', category: 'Playmaking', base: 25 },
  
  // Defense (7)
  idef: { name: 'Interior Defense', category: 'Defense', base: 25 },
  pdef: { name: 'Perimeter Defense', category: 'Defense', base: 25 },
  steal: { name: 'Steal', category: 'Defense', base: 25 },
  block: { name: 'Block', category: 'Defense', base: 25 },
  helpdiq: { name: 'Help Defense IQ', category: 'Defense', base: 25 },
  passper: { name: 'Pass Perception', category: 'Defense', base: 25 },
  defcon: { name: 'Defensive Consistency', category: 'Defense', base: 25 },
  
  // Physical (7)
  speed: { name: 'Speed', category: 'Physical', base: 25 },
  aglty: { name: 'Agility', category: 'Physical', base: 25 },
  str: { name: 'Strength', category: 'Physical', base: 25 },
  vert: { name: 'Vertical', category: 'Physical', base: 25 },
  stam: { name: 'Stamina', category: 'Physical', base: 25 },
  intngbl: { name: 'Intangibles', category: 'Physical', base: 25 },
  hustl: { name: 'Hustle', category: 'Physical', base: 25 },
  
  // Rebounding (2)
  oreb: { name: 'Offensive Rebound', category: 'Rebounding', base: 25 },
  dreb: { name: 'Defensive Rebound', category: 'Rebounding', base: 25 },
  
  // Foul (1)
  foul: { name: 'Foul', category: 'Foul', base: 25 }
};

const BADGES = [
  // Scoring
  { id: 'catch-shoot', name: 'Catch & Shoot', icon: '🎯', category: 'Scoring', tier: 'bronze' },
  { id: 'limitless-range', name: 'Limitless Range', icon: '🔫', category: 'Scoring', tier: 'bronze' },
  { id: 'steady-shooter', name: 'Steady Shooter', icon: '🎲', category: 'Scoring', tier: 'bronze' },
  { id: 'sniper', name: 'Sniper', icon: '🔍', category: 'Scoring', tier: 'bronze' },
  { id: 'green-machine', name: 'Green Machine', icon: '✅', category: 'Scoring', tier: 'bronze' },
  { id: 'tireless-shooter', name: 'Tireless Shooter', icon: '💪', category: 'Scoring', tier: 'bronze' },
  { id: 'deep-threes', name: 'Deep Threes', icon: '🌟', category: 'Scoring', tier: 'bronze' },
  { id: 'difficult-shots', name: 'Difficult Shots', icon: '🎪', category: 'Scoring', tier: 'bronze' },
  { id: 'hot-zone-hunter', name: 'Hot Zone Hunter', icon: '🔥', category: 'Scoring', tier: 'bronze' },
  { id: 'mid-maestro', name: 'Mid-Range Maestro', icon: '🎼', category: 'Scoring', tier: 'bronze' },
  { id: 'slippery-offball', name: 'Slippery Off-Ball', icon: '⚡', category: 'Scoring', tier: 'bronze' },
  { id: 'volume-shooter', name: 'Volume Shooter', icon: '📊', category: 'Scoring', tier: 'bronze' },
  
  // Finishing
  { id: 'contact-finisher', name: 'Contact Finisher', icon: '💥', category: 'Finishing', tier: 'bronze' },
  { id: 'acrobat', name: 'Acrobat', icon: '🤸', category: 'Finishing', tier: 'bronze' },
  { id: 'lob-city-finisher', name: 'Lob City Finisher', icon: '🏀', category: 'Finishing', tier: 'bronze' },
  { id: 'relentless-finisher', name: 'Relentless Finisher', icon: '🚀', category: 'Finishing', tier: 'bronze' },
  { id: 'tear-dropper', name: 'Tear Dropper', icon: '💧', category: 'Finishing', tier: 'bronze' },
  { id: 'layup-king', name: 'Layup King', icon: '👑', category: 'Finishing', tier: 'bronze' },
  { id: 'dunk-king', name: 'Dunk King', icon: '🦅', category: 'Finishing', tier: 'bronze' },
  { id: 'posterizer', name: 'Posterizer', icon: '🎬', category: 'Finishing', tier: 'bronze' },
  { id: 'giant-slayer', name: 'Giant Slayer', icon: '⚔️', category: 'Finishing', tier: 'bronze' },
  { id: 'limitless-takeoff', name: 'Limitless Takeoff', icon: '✈️', category: 'Finishing', tier: 'bronze' },
  
  // Playmaking
  { id: 'dimer', name: 'Dimer', icon: '🎁', category: 'Playmaking', tier: 'bronze' },
  { id: 'bullet-passer', name: 'Bullet Passer', icon: '💌', category: 'Playmaking', tier: 'bronze' },
  { id: 'dream-on', name: 'Dream On', icon: '💭', category: 'Playmaking', tier: 'bronze' },
  { id: 'skip-passer', name: 'Skip Passer', icon: '🏃', category: 'Playmaking', tier: 'bronze' },
  { id: 'flashy-passer', name: 'Flashy Passer', icon: '✨', category: 'Playmaking', tier: 'bronze' },
  { id: 'pocket-passer', name: 'Pocket Passer', icon: '👖', category: 'Playmaking', tier: 'bronze' },
  { id: 'lob-city-passer', name: 'Lob City Passer', icon: '🎪', category: 'Playmaking', tier: 'bronze' },
  { id: 'edge-creator', name: 'Edge Creator', icon: '🔱', category: 'Playmaking', tier: 'bronze' },
  
  // Defense
  { id: 'perimeter-lockdown', name: 'Perimeter Lock Down', icon: '🛡️', category: 'Defense', tier: 'bronze' },
  { id: 'interior-lockdown', name: 'Interior Lock Down', icon: '🏗️', category: 'Defense', tier: 'bronze' },
  { id: 'pick-pocket', name: 'Pick Pocket', icon: '👜', category: 'Defense', tier: 'bronze' },
  { id: 'interceptor', name: 'Interceptor', icon: '🚨', category: 'Defense', tier: 'bronze' },
  { id: 'rim-protector', name: 'Rim Protector', icon: '🏀', category: 'Defense', tier: 'bronze' },
  { id: 'chase-down', name: 'Chase Down Artist', icon: '🏃‍♂️', category: 'Defense', tier: 'bronze' },
  { id: 'clamps', name: 'Clamps', icon: '🤜', category: 'Defense', tier: 'bronze' },
  { id: 'moving-truck', name: 'Moving Truck', icon: '🚚', category: 'Defense', tier: 'bronze' },
  { id: 'intimidator', name: 'Intimidator', icon: '😤', category: 'Defense', tier: 'bronze' },
  { id: 'help-anchor', name: 'Help Defense Anchor', icon: '🔗', category: 'Defense', tier: 'bronze' },
  { id: 'defensive-anchor', name: 'Defensive Anchor', icon: '⚓', category: 'Defense', tier: 'bronze' },
  { id: 'brick-wall', name: 'Brick Wall', icon: '🧱', category: 'Defense', tier: 'bronze' },
  { id: 'rebound-chaser', name: 'Rebound Chaser', icon: '🏃‍♀️', category: 'Rebounding', tier: 'bronze' },
  { id: 'glass-cleaner', name: 'Glass Cleaner', icon: '🧹', category: 'Rebounding', tier: 'bronze' },
  { id: 'offensive-rebounder', name: 'Offensive Rebounder', icon: '📈', category: 'Rebounding', tier: 'bronze' }
];

const SEASON_GOALS = [
  { id: 'championship', name: 'Championship', reward: 2000, category: 'Playoff' },
  { id: 'conference-finals', name: 'Conference Finals', reward: 1000, category: 'Playoff' },
  { id: 'playoffs', name: 'Make Playoffs', reward: 200, category: 'Playoff' },
  { id: 'ppg-30', name: '30+ PPG Average', reward: 1000, category: 'Scoring' },
  { id: 'ppg-24', name: '24+ PPG Average', reward: 500, category: 'Scoring' },
  { id: 'apg-10', name: '10+ APG Average', reward: 1000, category: 'Playmaking' },
  { id: 'triple-double', name: 'Triple-Double Average', reward: 2000, category: 'Playmaking' },
  { id: 'rpg-12', name: '12+ RPG Average', reward: 1000, category: 'Rebounding' },
  { id: 'spg-2', name: '2.0+ SPG Average', reward: 1000, category: 'Defense' },
  { id: 'bpg-25', name: '2.5+ BPG Average', reward: 1000, category: 'Defense' },
  { id: '50-40-90', name: '50-40-90 Club', reward: 2000, category: 'Efficiency' },
  { id: 'mvp', name: 'MVP Award', reward: 2000, category: 'Special' },
  { id: 'all-star', name: 'All-Star Selection', reward: 1000, category: 'Special' },
  { id: 'dpoy', name: 'Defensive POY', reward: 2000, category: 'Special' }
];

const NBA_TEAMS = [
  { name: 'Boston Celtics', wins: 65 },
  { name: 'Miami Heat', wins: 46 },
  { name: 'Milwaukee Bucks', wins: 58 },
  { name: 'Philadelphia 76ers', wins: 56 },
  { name: 'New York Knicks', wins: 50 },
  { name: 'Denver Nuggets', wins: 63 },
  { name: 'Los Angeles Lakers', wins: 56 },
  { name: 'Phoenix Suns', wins: 64 },
  { name: 'Golden State Warriors', wins: 51 },
  { name: 'Sacramento Kings', wins: 48 },
  { name: 'Dallas Mavericks', wins: 50 },
  { name: 'Memphis Grizzlies', wins: 27 },
  { name: 'Los Angeles Clippers', wins: 44 },
  { name: 'New Orleans Pelicans', wins: 36 },
  { name: 'Oklahoma City Thunder', wins: 56 },
  { name: 'Minnesota Timberwolves', wins: 56 },
  { name: 'Toronto Raptors', wins: 41 },
  { name: 'Chicago Bulls', wins: 39 },
  { name: 'Charlotte Hornets', wins: 21 },
  { name: 'Washington Wizards', wins: 15 },
  { name: 'Detroit Pistons', wins: 14 },
  { name: 'Houston Rockets', wins: 41 },
  { name: 'Portland Trail Blazers', wins: 21 },
  { name: 'San Antonio Spurs', wins: 22 },
  { name: 'Utah Jazz', wins: 37 }
];

// ============================================
// PLAYER STATE
// ============================================

let playerState = {
  overall: 87,
  position: 'PG',
  team: 'Los Angeles Lakers',
  attributes: {},
  badges: [],
  xp: {
    earned: 37800,
    spent: 25300,
    available: 12500
  },
  stats: [],
  goals: {},
  currentPage: 'dashboard',
  saveStatus: 'saved'
};

// Initialize attributes
Object.keys(ATTRIBUTES).forEach(key => {
  playerState.attributes[key] = 70;
});

// ============================================
// CALCULATION FUNCTIONS
// ============================================

function calculateXPCost(attributeId, fromLevel, toLevel) {
  let cost = 0;
  for (let level = fromLevel + 1; level <= toLevel; level++) {
    if (level <= 25) cost += 100;
    else if (level <= 50) cost += 120;
    else if (level <= 75) cost += 150;
    else cost += 200;
  }
  return cost;
}

function calculateOverall() {
  const values = Object.values(playerState.attributes);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

function getAttributeCap() {
  const overall = playerState.overall;
  if (overall <= 64) return 65;
  if (overall <= 69) return 70;
  if (overall <= 74) return 75;
  if (overall <= 79) return 80;
  if (overall <= 84) return 85;
  if (overall <= 89) return 90;
  if (overall <= 94) return 95;
  return 99;
}

function calculateTradeXP(playerOVR) {
  return 1000 + (playerOVR * 50);
}

function calculateTransferXP(teamWins) {
  return 2000 + (teamWins * 25);
}

function calculateXPFromGame(stats) {
  let baseXP = 0;
  baseXP += stats.points * 5;
  baseXP += stats.rebounds * 8;
  baseXP += stats.assists * 10;
  baseXP += stats.steals * 15;
  baseXP += stats.blocks * 15;
  baseXP += stats.fgMade * 3 - stats.fgMissed;
  baseXP = Math.round(baseXP);
  
  // Win bonus
  if (stats.result === 'W') baseXP = Math.round(baseXP * 1.25);
  
  return baseXP;
}

// ============================================
// SAVE/LOAD FUNCTIONS
// ============================================

function saveProgress() {
  playerState.saveStatus = 'saving';
  updateUI();
  
  setTimeout(() => {
    localStorage.setItem('2k26-player-state', JSON.stringify(playerState));
    playerState.saveStatus = 'saved';
    updateUI();
  }, 1000);
}

function loadProgress() {
  const saved = localStorage.getItem('2k26-player-state');
  if (saved) {
    playerState = JSON.parse(saved);
  }
}

// ============================================
// UI RENDERING FUNCTIONS
// ============================================

function renderNavigation() {
  return `
    <nav class="top-nav">
      <div class="nav-logo">🏀 2K26 XP System</div>
      <ul class="nav-menu">
        <li><a href="#" class="nav-link ${playerState.currentPage === 'dashboard' ? 'active' : ''}" onclick="navigateTo('dashboard')">Dashboard</a></li>
        <li><a href="#" class="nav-link ${playerState.currentPage === 'attributes' ? 'active' : ''}" onclick="navigateTo('attributes')">Attributes</a></li>
        <li><a href="#" class="nav-link ${playerState.currentPage === 'badges' ? 'active' : ''}" onclick="navigateTo('badges')">Badges</a></li>
        <li><a href="#" class="nav-link ${playerState.currentPage === 'goals' ? 'active' : ''}" onclick="navigateTo('goals')">Goals</a></li>
        <li><a href="#" class="nav-link ${playerState.currentPage === 'stats' ? 'active' : ''}" onclick="navigateTo('stats')">Stats</a></li>
        <li><a href="#" class="nav-link ${playerState.currentPage === 'spend' ? 'active' : ''}" onclick="navigateTo('spend')">Spend XP</a></li>
      </ul>
      <div class="nav-right">
        <button class="save-btn" onclick="saveProgress()">💾 Save</button>
        <div class="save-status ${playerState.saveStatus}">
          <span class="save-icon ${playerState.saveStatus}">
            ${playerState.saveStatus === 'saved' ? '✓' : playerState.saveStatus === 'saving' ? '⟳' : '⚠'}
          </span>
          <span>${playerState.saveStatus === 'saved' ? 'Saved' : playerState.saveStatus === 'saving' ? 'Saving...' : 'Failed'}</span>
        </div>
        <button class="settings-btn">⚙️</button>
      </div>
    </nav>
  `;
}

function renderDashboard() {
  const progressPercent = (playerState.xp.available / (playerState.xp.available + playerState.xp.spent)) * 100;
  
  return `
    <div class="page-content">
      <div class="dashboard-header">
        <div class="player-info-card">
          <div class="player-overall">
            <span class="overall-label">Overall</span>
            <span class="overall-value">${playerState.overall}</span>
          </div>
          <div class="player-position">
            <span>🏀 ${playerState.position}</span>
          </div>
          <div class="player-team">
            <span class="team-label">Team</span>
            <span class="team-name">${playerState.team}</span>
          </div>
        </div>
        
        <div class="quick-stats-card card">
          <h3 class="card-title">Season Stats</h3>
          <div class="stats-grid">
            <div class="stat-item"><span class="stat-label">PPG</span><span class="stat-value">28.5</span></div>
            <div class="stat-item"><span class="stat-label">RPG</span><span class="stat-value">4.2</span></div>
            <div class="stat-item"><span class="stat-label">APG</span><span class="stat-value">8.1</span></div>
            <div class="stat-item"><span class="stat-label">FG%</span><span class="stat-value">45.3%</span></div>
            <div class="stat-item"><span class="stat-label">3P%</span><span class="stat-value">39.2%</span></div>
            <div class="stat-item"><span class="stat-label">SPG</span><span class="stat-value">1.8</span></div>
          </div>
        </div>
        
        <div class="xp-display-card">
          <h3 class="card-title">XP</h3>
          <div class="xp-value">${playerState.xp.available.toLocaleString()}</div>
          <span class="xp-label">Available</span>
          <div class="xp-progress">
            <div class="xp-progress-bar">
              <div class="xp-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
            <span style="font-size: 12px; color: var(--text-tertiary)">${progressPercent.toFixed(1)}%</span>
          </div>
          <div class="xp-stats">
            <div class="xp-stat">
              <span style="color: var(--text-tertiary); font-size: 12px">Total Earned</span>
              <span style="color: var(--gold-primary); font-weight: 700; font-size: 14px">${(playerState.xp.earned + playerState.xp.spent).toLocaleString()}</span>
            </div>
            <div class="xp-stat">
              <span style="color: var(--text-tertiary); font-size: 12px">Total Spent</span>
              <span style="color: var(--gold-primary); font-weight: 700; font-size: 14px">${playerState.xp.spent.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="action-buttons-row">
        <button class="action-btn" onclick="navigateTo('import')">📊 Import Game Stats</button>
        <button class="action-btn" onclick="navigateTo('spend')">✨ Spend XP</button>
        <button class="action-btn" onclick="navigateTo('badges')">🏆 View Badges</button>
        <button class="action-btn" onclick="navigateTo('goals')">🎯 Season Goals</button>
      </div>
      
      <div class="card recent-games-card">
        <h3 class="card-title">Recent Games</h3>
        <div class="table-wrapper">
          <table class="games-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Result</th>
                <th>PPG</th>
                <th>RPG</th>
                <th>APG</th>
                <th>XP</th>
              </tr>
            </thead>
            <tbody>
              <tr class="even">
                <td>12/15</td>
                <td>Boston Celtics</td>
                <td class="result-cell win">W 115-108</td>
                <td>32</td>
                <td>5</td>
                <td>9</td>
                <td class="xp-cell">+650</td>
              </tr>
              <tr>
                <td>12/13</td>
                <td>Miami Heat</td>
                <td class="result-cell win">W 102-98</td>
                <td>26</td>
                <td>3</td>
                <td>7</td>
                <td class="xp-cell">+580</td>
              </tr>
              <tr class="even">
                <td>12/11</td>
                <td>Golden State</td>
                <td class="result-cell loss">L 112-118</td>
                <td>25</td>
                <td>4</td>
                <td>8</td>
                <td class="xp-cell">+450</td>
              </tr>
              <tr>
                <td>12/09</td>
                <td>Denver Nuggets</td>
                <td class="result-cell win">W 108-105</td>
                <td>31</td>
                <td>6</td>
                <td>10</td>
                <td class="xp-cell">+720</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderAttributes() {
  const cap = getAttributeCap();
  
  let html = `<div class="page-content">
    <div class="section">
      <h1>Attributes - Upgrade Your Skills</h1>
      <p style="margin-bottom: 24px; color: var(--text-tertiary)">You have <strong style="color: var(--gold-primary)">${playerState.xp.available.toLocaleString()} XP</strong> available. Attribute cap: <strong style="color: var(--gold-primary)">${cap}</strong></p>
      
      <div class="attributes-grid">`;
  
  Object.entries(ATTRIBUTES).forEach(([key, attr]) => {
    const current = playerState.attributes[key];
    const nextLevel = Math.min(current + 1, cap);
    const cost = calculateXPCost(key, current, nextLevel);
    const canUpgrade = playerState.xp.available >= cost && nextLevel <= cap;
    
    html += `
      <div class="attribute-card">
        <div class="attribute-header">
          <div class="attribute-name">${attr.name}</div>
          <div class="attribute-level" style="font-size: 12px; color: var(--text-tertiary)">${attr.category}</div>
        </div>
        <div class="attribute-current">
          <div class="level-display">${current}</div>
          <div class="level-max">/ ${cap}</div>
        </div>
        <div class="attribute-bar">
          <div class="attribute-fill" style="width: ${(current / cap) * 100}%"></div>
        </div>
        <div class="upgrade-info">
          <span>Next: ${nextLevel}</span>
          <span class="upgrade-cost">${cost} XP</span>
        </div>
        <button class="attribute-btn" ${!canUpgrade ? 'disabled' : ''} onclick="upgradeAttribute('${key}')">Upgrade</button>
      </div>
    `;
  });
  
  html += `</div></div></div>`;
  return html;
}

function renderBadges() {
  let html = `<div class="page-content">
    <div class="section">
      <h1>Badges - 60+ Available</h1>
      <div class="badges-grid">`;
  
  BADGES.forEach(badge => {
    html += `
      <div class="badge-card">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-tier">${badge.tier.toUpperCase()}</div>
        <div class="badge-bar"><div class="badge-fill" style="width: 35%"></div></div>
        <div class="badge-progress">35% to Silver</div>
        <button class="badge-btn" onclick="upgradeBadge('${badge.id}')">Progress</button>
      </div>
    `;
  });
  
  html += `</div></div></div>`;
  return html;
}

function renderGoals() {
  let html = `<div class="page-content">
    <div class="section">
      <h1>Season Goals & Achievements</h1>
      <div class="goals-container">`;
  
  const categories = {};
  SEASON_GOALS.forEach(goal => {
    if (!categories[goal.category]) categories[goal.category] = [];
    categories[goal.category].push(goal);
  });
  
  Object.entries(categories).forEach(([cat, goals]) => {
    html += `<div class="goal-category">
      <div class="goal-category-title">${cat}</div>`;
    
    goals.forEach(goal => {
      const progress = Math.random() * 100;
      html += `
        <div class="goal-item">
          <span class="goal-name">${goal.name}</span>
          <span class="goal-reward">+${goal.reward} XP</span>
        </div>
        <div class="goal-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${progress.toFixed(0)}%</span>
        </div>
      `;
    });
    
    html += `</div>`;
  });
  
  html += `</div></div></div>`;
  return html;
}

function renderStats() {
  return `<div class="page-content">
    <div class="section">
      <h1>Career Statistics</h1>
      <div class="stats-summary">
        <div class="stats-box">
          <div class="stats-label">Games Played</div>
          <div class="stats-value">48</div>
        </div>
        <div class="stats-box">
          <div class="stats-label">PPG</div>
          <div class="stats-value">28.5</div>
        </div>
        <div class="stats-box">
          <div class="stats-label">RPG</div>
          <div class="stats-value">4.2</div>
        </div>
        <div class="stats-box">
          <div class="stats-label">APG</div>
          <div class="stats-value">8.1</div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderSpendXP() {
  return `<div class="page-content">
    <div class="section">
      <h1>Spend Your XP</h1>
      <div class="spend-xp-container">
        <div class="spend-section">
          <div class="spend-title">Trade for Player</div>
          <p class="spend-description">Request your team to trade for a specific player. Cost increases with player overall rating.</p>
          
          <div class="form-group">
            <label class="form-label">Player OVR</label>
            <input type="number" id="tradeOVR" class="form-input" min="60" max="99" value="85" onchange="updateTradeCost()">
          </div>
          
          <div class="cost-display">
            <div class="cost-label">Cost</div>
            <div class="cost-value" id="tradeCostDisplay">5250 XP</div>
          </div>
          
          <button class="spend-btn" onclick="spendXPTrade()">Request Trade</button>
          <div class="xp-available">Available: ${playerState.xp.available.toLocaleString()} XP</div>
        </div>
        
        <div class="spend-section">
          <div class="spend-title">Transfer to Team</div>
          <p class="spend-description">Request a trade to a different NBA team. Cost increases with team's win total.</p>
          
          <div class="form-group">
            <label class="form-label">Select Team</label>
            <select id="teamSelect" class="form-select" onchange="updateTransferCost()">
              ${NBA_TEAMS.map(team => `<option value="${team.wins}">${team.name} (${team.wins} wins)</option>`).join('')}
            </select>
          </div>
          
          <div class="cost-display">
            <div class="cost-label">Cost</div>
            <div class="cost-value" id="transferCostDisplay">3625 XP</div>
          </div>
          
          <button class="spend-btn" onclick="spendXPTransfer()">Request Transfer</button>
          <div class="xp-available">Available: ${playerState.xp.available.toLocaleString()} XP</div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderImport() {
  return `<div class="page-content">
    <div class="section">
      <h1>Import Game Stats</h1>
      <div class="spend-section" style="max-width: 500px;">
        <div class="spend-title">Add Game Statistics</div>
        <p class="spend-description">Enter your game stats to earn XP based on your performance.</p>
        
        <div class="form-group">
          <label class="form-label">Points</label>
          <input type="number" id="points" class="form-input" value="28" onchange="calculateGameXP()">
        </div>
        
        <div class="form-group">
          <label class="form-label">Rebounds</label>
          <input type="number" id="rebounds" class="form-input" value="4" onchange="calculateGameXP()">
        </div>
        
        <div class="form-group">
          <label class="form-label">Assists</label>
          <input type="number" id="assists" class="form-input" value="8" onchange="calculateGameXP()">
        </div>
        
        <div class="form-group">
          <label class="form-label">Steals</label>
          <input type="number" id="steals" class="form-input" value="2" onchange="calculateGameXP()">
        </div>
        
        <div class="form-group">
          <label class="form-label">Blocks</label>
          <input type="number" id="blocks" class="form-input" value="1" onchange="calculateGameXP()">
        </div>
        
        <div class="form-group">
          <label class="form-label">FG Made / Attempts</label>
          <div style="display: flex; gap: 8px;">
            <input type="number" id="fgMade" class="form-input" style="flex: 1;" value="11" onchange="calculateGameXP()">
            <input type="number" id="fgAttempts" class="form-input" style="flex: 1;" value="24" onchange="calculateGameXP()">
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Result</label>
          <select id="result" class="form-select" onchange="calculateGameXP()">
            <option value="W">Win</option>
            <option value="L">Loss</option>
          </select>
        </div>
        
        <div class="cost-display">
          <div class="cost-label">XP Earned</div>
          <div class="cost-value" id="gameXPDisplay">650 XP</div>
        </div>
        
        <button class="spend-btn" onclick="importGameStats()">Import Game</button>
      </div>
    </div>
  </div>`;
}

// ============================================
// ACTION FUNCTIONS
// ============================================

function upgradeAttribute(attrKey) {
  const current = playerState.attributes[attrKey];
  const cap = getAttributeCap();
  
  if (current >= cap) {
    alert('Attribute at maximum for your current Overall!');
    return;
  }
  
  const cost = calculateXPCost(attrKey, current, current + 1);
  
  if (playerState.xp.available < cost) {
    alert(`Need ${cost} XP but only have ${playerState.xp.available}!`);
    return;
  }
  
  playerState.attributes[attrKey]++;
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  playerState.overall = calculateOverall();
  
  saveProgress();
}

function upgradeBadge(badgeId) {
  const cost = 250;
  
  if (playerState.xp.available < cost) {
    alert(`Need ${cost} XP for badge upgrade!`);
    return;
  }
  
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  
  saveProgress();
  alert('Badge upgraded!');
}

function spendXPTrade() {
  const ovr = parseInt(document.getElementById('tradeOVR').value);
  const cost = calculateTradeXP(ovr);
  
  if (playerState.xp.available < cost) {
    alert(`Need ${cost} XP!`);
    return;
  }
  
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  
  saveProgress();
  alert('Trade request submitted!');
}

function spendXPTransfer() {
  const wins = parseInt(document.getElementById('teamSelect').value);
  const cost = calculateTransferXP(wins);
  
  if (playerState.xp.available < cost) {
    alert(`Need ${cost} XP!`);
    return;
  }
  
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  
  saveProgress();
  alert('Transfer request submitted!');
}

function importGameStats() {
  const points = parseInt(document.getElementById('points').value);
  const rebounds = parseInt(document.getElementById('rebounds').value);
  const assists = parseInt(document.getElementById('assists').value);
  const steals = parseInt(document.getElementById('steals').value);
  const blocks = parseInt(document.getElementById('blocks').value);
  const fgMade = parseInt(document.getElementById('fgMade').value);
  const fgAttempts = parseInt(document.getElementById('fgAttempts').value);
  const result = document.getElementById('result').value;
  
  const xpEarned = calculateXPFromGame({
    points, rebounds, assists, steals, blocks,
    fgMade, fgMissed: fgAttempts - fgMade,
    result
  });
  
  playerState.xp.available += xpEarned;
  playerState.xp.earned += xpEarned;
  
  saveProgress();
  navigateTo('dashboard');
}

function updateTradeCost() {
  const ovr = parseInt(document.getElementById('tradeOVR').value);
  document.getElementById('tradeCostDisplay').textContent = calculateTradeXP(ovr) + ' XP';
}

function updateTransferCost() {
  const wins = parseInt(document.getElementById('teamSelect').value);
  document.getElementById('transferCostDisplay').textContent = calculateTransferXP(wins) + ' XP';
}

function calculateGameXP() {
  const points = parseInt(document.getElementById('points').value) || 0;
  const rebounds = parseInt(document.getElementById('rebounds').value) || 0;
  const assists = parseInt(document.getElementById('assists').value) || 0;
  const steals = parseInt(document.getElementById('steals').value) || 0;
  const blocks = parseInt(document.getElementById('blocks').value) || 0;
  const fgMade = parseInt(document.getElementById('fgMade').value) || 0;
  const fgAttempts = parseInt(document.getElementById('fgAttempts').value) || 0;
  const result = document.getElementById('result').value;
  
  const xpEarned = calculateXPFromGame({
    points, rebounds, assists, steals, blocks,
    fgMade, fgMissed: fgAttempts - fgMade,
    result
  });
  
  document.getElementById('gameXPDisplay').textContent = xpEarned + ' XP';
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(page) {
  playerState.currentPage = page;
  updateUI();
}

// ============================================
// MAIN UI UPDATE
// ============================================

function updateUI() {
  const root = document.getElementById('root');
  
  let content = renderNavigation();
  
  switch(playerState.currentPage) {
    case 'dashboard': content += renderDashboard(); break;
    case 'attributes': content += renderAttributes(); break;
    case 'badges': content += renderBadges(); break;
    case 'goals': content += renderGoals(); break;
    case 'stats': content += renderStats(); break;
    case 'spend': content += renderSpendXP(); break;
    case 'import': content += renderImport(); break;
  }
  
  root.innerHTML = content;
}

// ============================================
// INITIALIZATION
// ============================================

loadProgress();
updateUI();

// Auto-save every 5 minutes
setInterval(saveProgress, 300000);