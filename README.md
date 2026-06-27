# NBA 2K26 MyCareer XP Rewards System

A play-to-earn alternative to MyCareer that lets you build your player through actual performance rather than VC spending. Import game stats, earn XP, and develop your player with skill points and badges based on your real performance.

## 🎮 Features

### Core Gameplay
- **Performance-Based XP System**: Earn XP rewards based on your actual in-game stats
- **Auto-Save System**: Automatic progress saving after every action - never lose your progress
- **34 Customizable Attributes**: Spend earned XP on ANY attribute to customize your playstyle
- **60+ Badges**: Unlock and upgrade badges based on your playstyle and overall rating
- **Seasonal Goals & Achievements**: Earn bonus XP for reaching season milestones
- **Team Control**: Trade for players or request transfers using XP

### XP Spending Options
1. **Attribute Upgrades** - Improve any of 34 attributes (Cost: 100-200 XP per level)
2. **Team Trade Requests** - Request trades for specific players (Cost: 1,000 + Player OVR × 50)
3. **Team Transfer Requests** - Transfer to different teams (Cost: 2,000 + Team Wins × 25)

### Auto-Save Features
- ✅ Real-Time Saving: Every action saved instantly
- ✅ Save Indicator: Visual feedback (Saving... → Saved ✓ → Failed ⚠)
- ✅ Save Button: Manual save option in top-right
- ✅ Cloud Sync: Optional backup protection
- ✅ Save History: Access previous save states

## 📊 All 34 Attributes

**Shooting** (9): Layup, Standing Dunk, Dunk, Close Shot, Mid-Range, 3-Point, Free Throw, Post Hook, Post Fade

**Offensive Skills** (4): Post Control, Shot IQ, Ball Handling, Speed With Ball

**Playmaking** (5): Hand Control, Passing, Passing IQ, Vision, Off-Ball Spacing

**Defense** (7): Interior Defense, Perimeter Defense, Steal, Block, Help Defense IQ, Pass Perception, Defensive Consistency

**Physical** (7): Speed, Agility, Strength, Vertical, Stamina, Intangibles, Hustle

**Rebounding** (2): Offensive Rebound, Defensive Rebound

**Foul** (1): Foul

## 🏆 60+ Badges Across 10 Categories

- **Scoring Badges** (12): Catch & Shoot, Limitless Range, Steady Shooter, Sniper, Green Machine, etc.
- **Finishing Badges** (10): Contact Finisher, Acrobat, Lob City Finisher, Tear Dropper, Dunk King, etc.
- **Playmaking Badges** (8): Dimer, Bullet Passer, Dream On, Skip Passer, Lob City Passer, etc.
- **Defense Badges** (15): Perimeter Lock Down, Interior Lock Down, Pick Pocket, Rim Protector, Clamps, etc.
- **Physical Badges** (7): Ankle Breaker, Slithery Finisher, Relentless Athlete, etc.
- **Team Badges** (2): Floor General, Playmaker
- **And More!**

Each badge has 4 tiers: Bronze → Silver → Gold → Hall of Fame

## 🎯 Season Goals & Achievements (50+ Types)

### Bonus XP by Achievement Type
- **Bronze**: +200 XP
- **Silver**: +500 XP  
- **Gold**: +1,000 XP
- **Platinum**: +2,000 XP

### Achievement Categories
1. **Playoff Achievements**: Championship, Conference Finals, First Round
2. **Scoring**: 30+ PPG, 20+ PPG, 40-point games, 50-point games
3. **Playmaking**: 10+ APG, Triple-doubles, Assist records
4. **Rebounding**: 12+ RPG, 20-rebound games
5. **Defense**: 2.0+ SPG, 2.5+ BPG, Steals/Blocks records
6. **Efficiency**: 50-40-90 Club, High shooting percentages
7. **Team Success**: 60+ wins, Leading team stats
8. **Skill Mastery**: Badge upgrades, Hot zones, Consistency
9. **Special**: MVP, All-Star, All-NBA, DPOY
10. **Trading**: Successful trades, Team transfers

## 💰 XP Cost Formulas

### Attribute Upgrades
- Levels 1-25: 100 XP/level
- Levels 26-50: 120 XP/level
- Levels 51-75: 150 XP/level
- Levels 76-99: 200 XP/level

### Team Trades
**Formula**: 1,000 XP + (Player OVR × 50)
- 60 OVR Player: 4,000 XP
- 85 OVR Star: 5,250 XP
- 99 OVR Elite: 6,000 XP

### Team Transfers
**Formula**: 2,000 XP + (Team Wins × 25)
- 50-win team: 3,250 XP
- 55-win team: 3,375 XP
- 60-win team: 3,500 XP
- 70-win team: 3,750 XP

## 📈 Tier System & Rotation Minutes

| Overall | Minutes | Starter | Badge Slots | Max Attr |
|---------|---------|---------|-------------|----------|
| 60-64   | 4-8     | No      | 2           | 65       |
| 65-69   | 8-12    | No      | 3           | 70       |
| 70-74   | 12-18   | Maybe   | 4           | 75       |
| 75-79   | 18-24   | Likely  | 5           | 80       |
| 80-84   | 24-32   | Yes     | 6           | 85       |
| 85-89   | 28-35   | Yes     | 7           | 90       |
| 90-94   | 32-40   | Yes     | 8           | 95       |
| 95-99   | 40 Full | Yes     | 8           | 99       |

## 🎨 UI/UX Design

### Color Scheme
- **Background**: Deep Navy Blue (#0A1F3F)
- **Buttons**: Gold (#FFD700)
- **Text**: White (#FFFFFF)
- **Accents**: Lighter Blue (#0F2D52)

### Top Navigation
- Fixed navigation bar with menu items
- Save button with status indicator
- Settings icon
- Responsive mobile menu

### Dashboard
- Player Info Card (Overall, Position, Team)
- Quick Stats Card (PPG, RPG, APG, FG%, 3P%, SPG)
- XP Display Card (Available XP, Progress, Total Earned)
- Action Buttons (Import Stats, Spend XP, View Badges, Season Goals)
- Recent Games Table

## 🚀 Getting Started

1. **Open the app** - Load index.html in your browser
2. **Import your first game** - Add game stats to start earning XP
3. **Spend XP** - Upgrade attributes or badges
4. **Complete season goals** - Earn bonus XP rewards
5. **Trade/Transfer** - Use XP to build your dream team
6. **Auto-Save** - All progress automatically saved

## 📱 Responsive Design

- Desktop: Full layout with all features
- Tablet: 2-column layout
- Mobile: Single column with hamburger menu

## 🔒 Data Persistence

- **Local Storage**: Instant saves on your device
- **Cloud Sync**: Optional backup to cloud
- **Save History**: Access previous save states
- **Auto-Save**: Every action is automatically saved

## 📚 Documentation

All complete documentation available in `/docs` folder:
- `UI_DESIGN.md` - Design system specifications
- `ATTRIBUTES.md` - All 34 attributes
- `BADGES.md` - All 60+ badges
- `GOALS.md` - Season achievements
- `XP_SPENDING.md` - Trading and transfers
- `SAVE_SYSTEM.md` - Data persistence

## 💡 Tips

- Focus on 2-3 key attributes early game
- Complete season goals for bonus XP
- Trade for complementary players
- Mix and match badges for your playstyle
- Use auto-save - never worry about losing progress

## License

MIT License - See LICENSE file for details

---

**Version**: 1.0.0 Complete  
**Status**: ✅ Full Implementation