// NBA 2K26 MyCareer XP System - Complete Application

const ATTRIBUTES = {
  layup: { name: 'Layup', cat: 'Shooting' },
  stdnk: { name: 'Standing Dunk', cat: 'Shooting' },
  dunk: { name: 'Dunk', cat: 'Shooting' },
  close: { name: 'Close Shot', cat: 'Shooting' },
  mid: { name: 'Mid-Range', cat: 'Shooting' },
  threePoint: { name: '3-Point', cat: 'Shooting' },
  ft: { name: 'Free Throw', cat: 'Shooting' },
  phook: { name: 'Post Hook', cat: 'Shooting' },
  pfade: { name: 'Post Fade', cat: 'Shooting' },
  postc: { name: 'Post Control', cat: 'Offensive' },
  shotiq: { name: 'Shot IQ', cat: 'Offensive' },
  ball: { name: 'Ball Handling', cat: 'Offensive' },
  spdwball: { name: 'Speed w/ Ball', cat: 'Offensive' },
  hands: { name: 'Hand Control', cat: 'Playmaking' },
  pass: { name: 'Passing', cat: 'Playmaking' },
  passiq: { name: 'Passing IQ', cat: 'Playmaking' },
  vision: { name: 'Vision', cat: 'Playmaking' },
  offcon: { name: 'Off-Ball Spacing', cat: 'Playmaking' },
  idef: { name: 'Interior Defense', cat: 'Defense' },
  pdef: { name: 'Perimeter Defense', cat: 'Defense' },
  steal: { name: 'Steal', cat: 'Defense' },
  block: { name: 'Block', cat: 'Defense' },
  helpdiq: { name: 'Help Defense IQ', cat: 'Defense' },
  passper: { name: 'Pass Perception', cat: 'Defense' },
  defcon: { name: 'Defensive Consistency', cat: 'Defense' },
  speed: { name: 'Speed', cat: 'Physical' },
  aglty: { name: 'Agility', cat: 'Physical' },
  str: { name: 'Strength', cat: 'Physical' },
  vert: { name: 'Vertical', cat: 'Physical' },
  stam: { name: 'Stamina', cat: 'Physical' },
  intngbl: { name: 'Intangibles', cat: 'Physical' },
  hustl: { name: 'Hustle', cat: 'Physical' },
  oreb: { name: 'Offensive Rebound', cat: 'Rebounding' },
  dreb: { name: 'Defensive Rebound', cat: 'Rebounding' },
  foul: { name: 'Foul', cat: 'Foul' }
};

const BADGES = [
  { id: 'catch-shoot', name: 'Catch & Shoot', icon: '🏀', cat: 'Scoring' },
  { id: 'limitless', name: 'Limitless Range', icon: '🎯', cat: 'Scoring' },
  { id: 'sniper', name: 'Sniper', icon: '🔍', cat: 'Scoring' },
  { id: 'contact', name: 'Contact Finisher', icon: '💥', cat: 'Finishing' },
  { id: 'acrobat', name: 'Acrobat', icon: '🤸', cat: 'Finishing' },
  { id: 'dunk-king', name: 'Dunk King', icon: '🦅', cat: 'Finishing' },
  { id: 'dimer', name: 'Dimer', icon: '🎁', cat: 'Playmaking' },
  { id: 'bullet', name: 'Bullet Passer', icon: '💌', cat: 'Playmaking' },
  { id: 'lockdown', name: 'Perimeter Lock Down', icon: '🛡️', cat: 'Defense' },
  { id: 'rim', name: 'Rim Protector', icon: '🏀', cat: 'Defense' },
  { id: 'pick-pocket', name: 'Pick Pocket', icon: '🎰', cat: 'Defense' },
  { id: 'clamps', name: 'Clamps', icon: '🤐', cat: 'Defense' },
  { id: 'glass', name: 'Glass Cleaner', icon: '🧹', cat: 'Rebounding' },
  { id: 'rebound', name: 'Rebound Chaser', icon: '🏃‍♀️', cat: 'Rebounding' },
];

const GOALS = [
  { id: 'championship', name: 'Championship', reward: 2000, cat: 'Playoff' },
  { id: 'ppg-30', name: '30+ PPG Average', reward: 1000, cat: 'Scoring' },
  { id: 'apg-10', name: '10+ APG Average', reward: 1000, cat: 'Playmaking' },
  { id: 'triple-double', name: 'Triple-Double Average', reward: 2000, cat: 'Playmaking' },
  { id: 'rpg-12', name: '12+ RPG Average', reward: 1000, cat: 'Rebounding' },
  { id: 'spg-2', name: '2.0+ SPG Average', reward: 1000, cat: 'Defense' },
  { id: '50-40-90', name: '50-40-90 Club', reward: 2000, cat: 'Efficiency' },
  { id: 'mvp', name: 'MVP Award', reward: 2000, cat: 'Special' },
];

const TEAMS = [
  { name: 'Boston Celtics', wins: 65 },
  { name: 'Denver Nuggets', wins: 63 },
  { name: 'Phoenix Suns', wins: 64 },
  { name: 'Los Angeles Lakers', wins: 56 },
  { name: 'Milwaukee Bucks', wins: 58 },
  { name: 'Philadelphia 76ers', wins: 56 },
  { name: 'Golden State Warriors', wins: 51 },
  { name: 'Dallas Mavericks', wins: 50 },
  { name: 'New York Knicks', wins: 50 },
  { name: 'Sacramento Kings', wins: 48 },
  { name: 'Miami Heat', wins: 46 },
  { name: 'Los Angeles Clippers', wins: 44 },
  { name: 'Houston Rockets', wins: 41 },
  { name: 'Toronto Raptors', wins: 41 },
  { name: 'Utah Jazz', wins: 37 },
  { name: 'New Orleans Pelicans', wins: 36 },
  { name: 'Chicago Bulls', wins: 39 },
  { name: 'Oklahoma City Thunder', wins: 56 },
  { name: 'Minnesota Timberwolves', wins: 56 },
  { name: 'Memphis Grizzlies', wins: 27 },
  { name: 'Portland Trail Blazers', wins: 21 },
  { name: 'San Antonio Spurs', wins: 22 },
  { name: 'Charlotte Hornets', wins: 21 },
  { name: 'Washington Wizards', wins: 15 },
  { name: 'Detroit Pistons', wins: 14 }
];

let playerState = {
  overall: 87,
  position: 'PG',
  team: 'Los Angeles Lakers',
  attributes: {},
  xp: { earned: 37800, spent: 25300, available: 12500 },
  currentPage: 'dashboard',
  saveStatus: 'saved'
};

Object.keys(ATTRIBUTES).forEach(k => playerState.attributes[k] = 70);

function calculateXPCost(level) {
  if (level <= 25) return 100;
  if (level <= 50) return 120;
  if (level <= 75) return 150;
  return 200;
}

function getAttributeCap() {
  const ovr = playerState.overall;
  if (ovr <= 64) return 65;
  if (ovr <= 69) return 70;
  if (ovr <= 74) return 75;
  if (ovr <= 79) return 80;
  if (ovr <= 84) return 85;
  if (ovr <= 89) return 90;
  if (ovr <= 94) return 95;
  return 99;
}

function calculateOverall() {
  const vals = Object.values(playerState.attributes);
  return Math.round(vals.reduce((a, b) => a + b) / vals.length);
}

function saveProgress() {
  const el = document.getElementById('saveStatus');
  el.className = 'save-status saving';
  document.getElementById('saveIcon').textContent = '⟳';
  document.getElementById('saveText').textContent = 'Saving...';
  
  setTimeout(() => {
    localStorage.setItem('2k26-state', JSON.stringify(playerState));
    el.className = 'save-status saved';
    document.getElementById('saveIcon').textContent = '✓';
    document.getElementById('saveText').textContent = 'Saved';
  }, 1000);
}

function loadProgress() {
  const saved = localStorage.getItem('2k26-state');
  if (saved) playerState = JSON.parse(saved);
}

function renderDashboard() {
  const progressPercent = (playerState.xp.available / (playerState.xp.available + playerState.xp.spent)) * 100;
  return `
    <div class="dashboard-header">
      <div class="card player-card">
        <div class="overall">
          <div class="overall-label">Overall</div>
          <div class="overall-value">${playerState.overall}</div>
        </div>
        <div class="position-box">🏀 ${playerState.position}</div>
        <div class="team-info">
          <div class="team-label">Team</div>
          <div class="team-name">${playerState.team}</div>
        </div>
      </div>

      <div class="card">
        <h3 class="card-title">Season Stats</h3>
        <div class="stats-grid">
          <div class="stat-item"><div class="stat-label">PPG</div><div class="stat-value">28.5</div></div>
          <div class="stat-item"><div class="stat-label">RPG</div><div class="stat-value">4.2</div></div>
          <div class="stat-item"><div class="stat-label">APG</div><div class="stat-value">8.1</div></div>
          <div class="stat-item"><div class="stat-label">FG%</div><div class="stat-value">45.3%</div></div>
          <div class="stat-item"><div class="stat-label">3P%</div><div class="stat-value">39.2%</div></div>
          <div class="stat-item"><div class="stat-label">SPG</div><div class="stat-value">1.8</div></div>
        </div>
      </div>

      <div class="card xp-card">
        <h3 class="card-title">XP</h3>
        <div class="xp-value">${playerState.xp.available.toLocaleString()}</div>
        <div class="xp-label">Available to Spend</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${progressPercent}%"></div></div>
        <div style="font-size:12px;color:var(--text-tertiary)">Total Earned: ${(playerState.xp.earned + playerState.xp.spent).toLocaleString()} XP</div>
      </div>
    </div>

    <div class="action-buttons">
      <button class="action-btn" onclick="navigateTo('import')">📊 Import Game Stats</button>
      <button class="action-btn" onclick="navigateTo('spend')">💰 Spend XP</button>
      <button class="action-btn" onclick="navigateTo('badges')">🏆 View Badges</button>
      <button class="action-btn" onclick="navigateTo('goals')">🎯 Season Goals</button>
    </div>

    <div class="card">
      <h3 class="card-title">Recent Games</h3>
      <div class="table-wrapper">
        <table class="games-table">
          <thead>
            <tr><th>Date</th><th>Opponent</th><th>Result</th><th>PPG</th><th>RPG</th><th>APG</th><th>XP</th></tr>
          </thead>
          <tbody>
            <tr><td>12/15</td><td>Boston</td><td class="result-w">W 115-108</td><td>32</td><td>5</td><td>9</td><td class="xp-earned">+650</td></tr>
            <tr><td>12/13</td><td>Miami</td><td class="result-w">W 102-98</td><td>26</td><td>3</td><td>7</td><td class="xp-earned">+580</td></tr>
            <tr><td>12/11</td><td>Golden State</td><td class="result-l">L 112-118</td><td>25</td><td>4</td><td>8</td><td class="xp-earned">+450</td></tr>
            <tr><td>12/09</td><td>Denver</td><td class="result-w">W 108-105</td><td>31</td><td>6</td><td>10</td><td class="xp-earned">+720</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAttributes() {
  const cap = getAttributeCap();
  let html = `<div class="page-content">
    <h1 class="page-title">All 34 Attributes - Upgrade Your Skills</h1>
    <p style="margin-bottom:24px;color:var(--text-tertiary)">Available: <strong style="color:var(--gold-primary)">${playerState.xp.available.toLocaleString()} XP</strong> | Cap: <strong style="color:var(--gold-primary)">${cap}</strong></p>
    <div class="attributes-grid">`;
  
  Object.entries(ATTRIBUTES).forEach(([key, attr]) => {
    const current = playerState.attributes[key];
    const cost = calculateXPCost(current + 1);
    const canUpgrade = playerState.xp.available >= cost && current < cap;
    html += `
      <div class="attribute-card">
        <div class="attribute-name">${attr.name}</div>
        <div class="attribute-level"><span>${current}</span><span> / ${cap}</span></div>
        <div class="attribute-bar"><div class="attribute-fill" style="width:${(current/cap)*100}%"></div></div>
        <div class="upgrade-cost">Next: ${cost} XP</div>
        <button class="upgrade-btn" ${!canUpgrade ? 'disabled' : ''} onclick="upgradeAttribute('${key}')">Upgrade</button>
      </div>
    `;
  });
  
  html += `</div></div>`;
  return html;
}

function renderBadges() {
  let html = `<div class="page-content"><h1 class="page-title">60+ Badges</h1><div class="badges-grid">`;
  BADGES.forEach(b => {
    html += `<div class="badge-card"><div class="badge-icon">${b.icon}</div><div class="badge-name">${b.name}</div><div class="badge-tier">BRONZE</div><div class="badge-progress">35% to Silver</div></div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderGoals() {
  let html = `<div class="page-content"><h1 class="page-title">Season Goals & Achievements</h1><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">`;
  GOALS.forEach(g => {
    html += `<div class="card"><div style="font-weight:700;color:var(--gold-primary);margin-bottom:8px">${g.name}</div><div style="font-size:12px;color:var(--text-tertiary);margin-bottom:12px">+${g.reward} XP</div><div style="width:100%;height:8px;background:#334155;border-radius:4px;overflow:hidden"><div style="height:100%;background:var(--gold-primary);width:${Math.random()*100}%"></div></div></div>`;
  });
  html += `</div></div>`;
  return html;
}

function renderStats() {
  return `<div class="page-content"><h1 class="page-title">Career Statistics</h1><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px"><div class="card" style="text-align:center"><div style="font-size:12px;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:8px">Games Played</div><div style="font-size:32px;font-weight:700;color:var(--gold-primary)">48</div></div><div class="card" style="text-align:center"><div style="font-size:12px;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:8px">PPG</div><div style="font-size:32px;font-weight:700;color:var(--gold-primary)">28.5</div></div><div class="card" style="text-align:center"><div style="font-size:12px;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:8px">RPG</div><div style="font-size:32px;font-weight:700;color:var(--gold-primary)">4.2</div></div><div class="card" style="text-align:center"><div style="font-size:12px;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:8px">APG</div><div style="font-size:32px;font-weight:700;color:var(--gold-primary)">8.1</div></div></div></div>`;
}

function renderSpend() {
  return `<div class="page-content"><h1 class="page-title">Spend Your XP</h1><div class="spend-container">
    <div class="spend-section"><h3 style="font-size:20px;font-weight:700;color:var(--gold-primary);margin-bottom:16px">Trade for Player</h3><p style="margin-bottom:16px;color:var(--text-tertiary)">Request a team trade for a specific player.</p><div class="form-group"><label class="form-label">Player Overall</label><input type="number" id="tradeOVR" class="form-input" min="60" max="99" value="85" onchange="updateTradeCost()"></div><div class="cost-display"><div class="cost-label">Cost</div><div class="cost-value" id="tradeCost">5250 XP</div></div><button class="action-btn" onclick="spendTrade()" style="width:100%">Request Trade</button></div>
    <div class="spend-section"><h3 style="font-size:20px;font-weight:700;color:var(--gold-primary);margin-bottom:16px">Transfer to Team</h3><p style="margin-bottom:16px;color:var(--text-tertiary)">Request trade to different NBA team.</p><div class="form-group"><label class="form-label">Select Team</label><select id="teamSelect" class="form-select" onchange="updateTransferCost()">${TEAMS.map((t,i) => `<option value="${t.wins}" ${i===0?'selected':''}>${t.name} (${t.wins} wins)</option>`).join('')}</select></div><div class="cost-display"><div class="cost-label">Cost</div><div class="cost-value" id="transferCost">3625 XP</div></div><button class="action-btn" onclick="spendTransfer()" style="width:100%">Request Transfer</button></div>
  </div></div>`;
}

function renderImport() {
  return `<div class="page-content"><h1 class="page-title">Import Game Stats</h1><div class="spend-section" style="max-width:500px"><h3 style="font-size:20px;font-weight:700;color:var(--gold-primary);margin-bottom:16px">Add Your Game</h3><div class="form-group"><label class="form-label">Points</label><input type="number" id="pts" class="form-input" value="28" onchange="calcXP()"></div><div class="form-group"><label class="form-label">Rebounds</label><input type="number" id="reb" class="form-input" value="4" onchange="calcXP()"></div><div class="form-group"><label class="form-label">Assists</label><input type="number" id="ast" class="form-input" value="8" onchange="calcXP()"></div><div class="form-group"><label class="form-label">Steals</label><input type="number" id="stl" class="form-input" value="2" onchange="calcXP()"></div><div class="form-group"><label class="form-label">Blocks</label><input type="number" id="blk" class="form-input" value="1" onchange="calcXP()"></div><div class="form-group"><label class="form-label">Result</label><select id="result" class="form-select" onchange="calcXP()"><option value="W">Win</option><option value="L">Loss</option></select></div><div class="cost-display"><div class="cost-label">XP Earned</div><div class="cost-value" id="xpDisplay">650 XP</div></div><button class="action-btn" onclick="importGame()" style="width:100%">Import Game</button></div></div>`;
}

function upgradeAttribute(key) {
  const current = playerState.attributes[key];
  const cap = getAttributeCap();
  if (current >= cap) { alert('At max!'); return; }
  const cost = calculateXPCost(current + 1);
  if (playerState.xp.available < cost) { alert('Not enough XP!'); return; }
  playerState.attributes[key]++;
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  playerState.overall = calculateOverall();
  saveProgress();
  updateUI();
}

function updateTradeCost() {
  const ovr = parseInt(document.getElementById('tradeOVR').value);
  const cost = 1000 + (ovr * 50);
  document.getElementById('tradeCost').textContent = cost + ' XP';
}

function updateTransferCost() {
  const wins = parseInt(document.getElementById('teamSelect').value);
  const cost = 2000 + (wins * 25);
  document.getElementById('transferCost').textContent = cost + ' XP';
}

function calcXP() {
  const pts = parseInt(document.getElementById('pts').value) || 0;
  const reb = parseInt(document.getElementById('reb').value) || 0;
  const ast = parseInt(document.getElementById('ast').value) || 0;
  const stl = parseInt(document.getElementById('stl').value) || 0;
  const blk = parseInt(document.getElementById('blk').value) || 0;
  const result = document.getElementById('result').value;
  let xp = pts * 5 + reb * 8 + ast * 10 + stl * 15 + blk * 15;
  if (result === 'W') xp = Math.round(xp * 1.25);
  document.getElementById('xpDisplay').textContent = xp + ' XP';
}

function spendTrade() {
  const ovr = parseInt(document.getElementById('tradeOVR').value);
  const cost = 1000 + (ovr * 50);
  if (playerState.xp.available < cost) { alert('Not enough XP!'); return; }
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  saveProgress();
  alert('Trade requested!');
  navigateTo('dashboard');
}

function spendTransfer() {
  const wins = parseInt(document.getElementById('teamSelect').value);
  const cost = 2000 + (wins * 25);
  if (playerState.xp.available < cost) { alert('Not enough XP!'); return; }
  playerState.xp.available -= cost;
  playerState.xp.spent += cost;
  saveProgress();
  alert('Transfer requested!');
  navigateTo('dashboard');
}

function importGame() {
  const pts = parseInt(document.getElementById('pts').value) || 0;
  const reb = parseInt(document.getElementById('reb').value) || 0;
  const ast = parseInt(document.getElementById('ast').value) || 0;
  const stl = parseInt(document.getElementById('stl').value) || 0;
  const blk = parseInt(document.getElementById('blk').value) || 0;
  const result = document.getElementById('result').value;
  let xp = pts * 5 + reb * 8 + ast * 10 + stl * 15 + blk * 15;
  if (result === 'W') xp = Math.round(xp * 1.25);
  playerState.xp.available += xp;
  playerState.xp.earned += xp;
  saveProgress();
  navigateTo('dashboard');
}

function navigateTo(page) {
  playerState.currentPage = page;
  updateNav();
  updateUI();
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  const links = { dashboard: 0, attributes: 1, badges: 2, goals: 3, stats: 4, spend: 5 };
  if (links[playerState.currentPage] !== undefined) {
    document.querySelectorAll('.nav-link')[links[playerState.currentPage]].classList.add('active');
  }
}

function updateUI() {
  const content = document.getElementById('mainContent');
  switch(playerState.currentPage) {
    case 'dashboard': content.innerHTML = renderDashboard(); break;
    case 'attributes': content.innerHTML = renderAttributes(); break;
    case 'badges': content.innerHTML = renderBadges(); break;
    case 'goals': content.innerHTML = renderGoals(); break;
    case 'stats': content.innerHTML = renderStats(); break;
    case 'spend': content.innerHTML = renderSpend(); break;
    case 'import': content.innerHTML = renderImport(); break;
  }
}

loadProgress();
updateUI();
setInterval(saveProgress, 300000);