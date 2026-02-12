// NFL Teams organized by division
export const NFL_TEAMS = [
  // AFC East
  { id: 1, name: "Buffalo Bills", abbreviation: "BUF", division: "AFC East", conference: "AFC" },
  { id: 2, name: "Miami Dolphins", abbreviation: "MIA", division: "AFC East", conference: "AFC" },
  { id: 3, name: "New England Patriots", abbreviation: "NE", division: "AFC East", conference: "AFC" },
  { id: 4, name: "New York Jets", abbreviation: "NYJ", division: "AFC East", conference: "AFC" },
  
  // AFC North
  { id: 5, name: "Baltimore Ravens", abbreviation: "BAL", division: "AFC North", conference: "AFC" },
  { id: 6, name: "Cincinnati Bengals", abbreviation: "CIN", division: "AFC North", conference: "AFC" },
  { id: 7, name: "Cleveland Browns", abbreviation: "CLE", division: "AFC North", conference: "AFC" },
  { id: 8, name: "Pittsburgh Steelers", abbreviation: "PIT", division: "AFC North", conference: "AFC" },
  
  // AFC South
  { id: 9, name: "Houston Texans", abbreviation: "HOU", division: "AFC South", conference: "AFC" },
  { id: 10, name: "Indianapolis Colts", abbreviation: "IND", division: "AFC South", conference: "AFC" },
  { id: 11, name: "Jacksonville Jaguars", abbreviation: "JAX", division: "AFC South", conference: "AFC" },
  { id: 12, name: "Tennessee Titans", abbreviation: "TEN", division: "AFC South", conference: "AFC" },
  
  // AFC West
  { id: 13, name: "Denver Broncos", abbreviation: "DEN", division: "AFC West", conference: "AFC" },
  { id: 14, name: "Kansas City Chiefs", abbreviation: "KC", division: "AFC West", conference: "AFC" },
  { id: 15, name: "Las Vegas Raiders", abbreviation: "LV", division: "AFC West", conference: "AFC" },
  { id: 16, name: "Los Angeles Chargers", abbreviation: "LAC", division: "AFC West", conference: "AFC" },
  
  // NFC East
  { id: 17, name: "Dallas Cowboys", abbreviation: "DAL", division: "NFC East", conference: "NFC" },
  { id: 18, name: "New York Giants", abbreviation: "NYG", division: "NFC East", conference: "NFC" },
  { id: 19, name: "Philadelphia Eagles", abbreviation: "PHI", division: "NFC East", conference: "NFC" },
  { id: 20, name: "Washington Commanders", abbreviation: "WAS", division: "NFC East", conference: "NFC" },
  
  // NFC North
  { id: 21, name: "Chicago Bears", abbreviation: "CHI", division: "NFC North", conference: "NFC" },
  { id: 22, name: "Detroit Lions", abbreviation: "DET", division: "NFC North", conference: "NFC" },
  { id: 23, name: "Green Bay Packers", abbreviation: "GB", division: "NFC North", conference: "NFC" },
  { id: 24, name: "Minnesota Vikings", abbreviation: "MIN", division: "NFC North", conference: "NFC" },
  
  // NFC South
  { id: 25, name: "Atlanta Falcons", abbreviation: "ATL", division: "NFC South", conference: "NFC" },
  { id: 26, name: "Carolina Panthers", abbreviation: "CAR", division: "NFC South", conference: "NFC" },
  { id: 27, name: "New Orleans Saints", abbreviation: "NO", division: "NFC South", conference: "NFC" },
  { id: 28, name: "Tampa Bay Buccaneers", abbreviation: "TB", division: "NFC South", conference: "NFC" },
  
  // NFC West
  { id: 29, name: "Arizona Cardinals", abbreviation: "ARI", division: "NFC West", conference: "NFC" },
  { id: 30, name: "Los Angeles Rams", abbreviation: "LAR", division: "NFC West", conference: "NFC" },
  { id: 31, name: "San Francisco 49ers", abbreviation: "SF", division: "NFC West", conference: "NFC" },
  { id: 32, name: "Seattle Seahawks", abbreviation: "SEA", division: "NFC West", conference: "NFC" },
];

export const POSITIONS = [
  "QB", "RB", "WR", "TE", "OL", 
  "DL", "LB", "CB", "S", "K", "P"
];

export const POSITION_GROUPS = {
  "QB": "Offense",
  "RB": "Offense",
  "WR": "Offense",
  "TE": "Offense",
  "OL": "Offense",
  "DL": "Defense",
  "LB": "Defense",
  "CB": "Defense",
  "S": "Defense",
  "K": "Special Teams",
  "P": "Special Teams",
};
