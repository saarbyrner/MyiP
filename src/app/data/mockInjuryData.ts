import { NFL_TEAMS, POSITIONS, POSITION_GROUPS } from "./nflTeams";

export type InjuryType = 
  | "Concussion" 
  | "Shoulder" 
  | "LEX Sprain" 
  | "LEX Strain" 
  | "ACL" 
  | "Hamstring" 
  | "Ankle"
  | "Knee"
  | "Back"
  | "Foot"
  | "Hand"
  | "Quad"
  | "Hip"
  | "Groin";

export type InjuryStatus = "Out" | "Limited" | "Recovered";
export type SessionType = "Games" | "Practice" | "Conditioning" | "Recovery" | "Strength Training" | "Film Study";

export interface InjuryRecord {
  id: string;
  playerId: string;
  playerName: string;
  teamId: number;
  teamName: string;
  teamAbbr: string;
  position: string;
  positionGroup: string;
  injuryType: InjuryType;
  injuryDate: Date;
  returnDate: Date | null;
  expectedReturnDate: Date | null;
  daysOut: number;
  status: InjuryStatus;
  severity: "Minor" | "Moderate" | "Severe";
  sessionTypeAtInjury: SessionType;
  season: number;
  week: number;
  description: string;
  isRecurring: boolean;
  previousInjuryId?: string;
}

// Helper to generate random dates within a season
function getRandomDate(season: number, weekStart: number, weekEnd: number): Date {
  const year = season;
  // NFL season typically starts early September
  const seasonStart = new Date(year, 8, 1); // September 1st
  const weekInMs = 7 * 24 * 60 * 60 * 1000;
  const startMs = seasonStart.getTime() + (weekStart * weekInMs);
  const endMs = seasonStart.getTime() + (weekEnd * weekInMs);
  const randomMs = startMs + Math.random() * (endMs - startMs);
  return new Date(randomMs);
}

// Injury severity and recovery time mappings
const injuryRecoveryProfiles: Record<InjuryType, { minDays: number; maxDays: number; severityWeight: Record<string, number> }> = {
  "Concussion": { minDays: 7, maxDays: 28, severityWeight: { Minor: 7, Moderate: 14, Severe: 21 } },
  "Shoulder": { minDays: 14, maxDays: 180, severityWeight: { Minor: 21, Moderate: 60, Severe: 150 } },
  "LEX Sprain": { minDays: 7, maxDays: 42, severityWeight: { Minor: 10, Moderate: 21, Severe: 35 } },
  "LEX Strain": { minDays: 10, maxDays: 56, severityWeight: { Minor: 14, Moderate: 28, Severe: 45 } },
  "ACL": { minDays: 180, maxDays: 365, severityWeight: { Minor: 200, Moderate: 270, Severe: 330 } },
  "Hamstring": { minDays: 14, maxDays: 90, severityWeight: { Minor: 21, Moderate: 42, Severe: 70 } },
  "Ankle": { minDays: 7, maxDays: 60, severityWeight: { Minor: 14, Moderate: 28, Severe: 50 } },
  "Knee": { minDays: 14, maxDays: 120, severityWeight: { Minor: 21, Moderate: 45, Severe: 90 } },
  "Back": { minDays: 7, maxDays: 90, severityWeight: { Minor: 14, Moderate: 35, Severe: 70 } },
  "Foot": { minDays: 14, maxDays: 90, severityWeight: { Minor: 21, Moderate: 42, Severe: 75 } },
  "Hand": { minDays: 7, maxDays: 42, severityWeight: { Minor: 10, Moderate: 21, Severe: 35 } },
  "Quad": { minDays: 14, maxDays: 60, severityWeight: { Minor: 21, Moderate: 35, Severe: 50 } },
  "Hip": { minDays: 21, maxDays: 120, severityWeight: { Minor: 30, Moderate: 60, Severe: 100 } },
  "Groin": { minDays: 14, maxDays: 60, severityWeight: { Minor: 21, Moderate: 35, Severe: 50 } },
};

// First names pool
const firstNames = [
  "Marcus", "Jamal", "Tyler", "Brandon", "Cameron", "Derek", "Justin", "Kyle", "Ryan", "Aaron",
  "Josh", "Matt", "Tom", "Drew", "Patrick", "Russell", "Dak", "Jalen", "Lamar", "Joe",
  "Trevor", "Tua", "Mac", "Zach", "Davis", "Christian", "Nick", "Cooper", "Davante", "Stefon",
  "DeAndre", "Tyreek", "Mike", "Chris", "DK", "Terry", "CeeDee", "Jaylen", "AJ", "Deebo",
  "Travis", "George", "Mark", "Darren", "TJ", "Micah", "Myles", "Maxx", "Nick", "Quinnen",
  "Dexter", "Javon", "Rashan", "Montez", "Roquan", "Fred", "Tremaine", "Bobby", "CJ", "Shaquille",
  "Patrick", "Jaire", "Sauce", "Jalen", "Trevon", "Marshon", "Carlton", "Denzel", "Jaycee", "Tre'Davious",
  "Derwin", "Jessie", "Minkah", "Antoine", "Justin", "Jamal", "Kevin", "Harrison", "Quentin", "Jordan",
];

// Last names pool
const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Thompson", "White", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Young", "Allen",
  "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson",
  "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Turner", "Phillips", "Parker",
  "Evans", "Edwards", "Collins", "Stewart", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell",
  "Murphy", "Bailey", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Peterson", "Gray", "Ramirez",
  "James", "Watson", "Brooks", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson",
];

function generatePlayerName(): string {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getWeightedSeverity(): "Minor" | "Moderate" | "Severe" {
  const rand = Math.random();
  if (rand < 0.5) return "Minor";
  if (rand < 0.85) return "Moderate";
  return "Severe";
}

// Generate injury records
function generateInjuryRecords(): InjuryRecord[] {
  const records: InjuryRecord[] = [];
  let recordId = 1;
  const seasons = [2022, 2023, 2024, 2025];

  // Generate players for each team (roughly 53 per team, but we'll track injuries for about 25-30 per team per season)
  const playersPerTeamPerSeason = 28;
  const injuryRatePerPlayer = 0.35; // 35% chance a player has an injury in a season

  seasons.forEach(season => {
    NFL_TEAMS.forEach(team => {
      const numInjuries = Math.floor(playersPerTeamPerSeason * injuryRatePerPlayer) + Math.floor(Math.random() * 5);
      
      for (let i = 0; i < numInjuries; i++) {
        const position = getRandomItem(POSITIONS);
        const positionGroup = POSITION_GROUPS[position as keyof typeof POSITION_GROUPS];
        const playerName = generatePlayerName();
        const playerId = `${team.abbreviation}-${season}-P${i}`;
        
        // Determine injury type with weighted distribution
        const injuryTypes: InjuryType[] = ["Concussion", "Shoulder", "LEX Sprain", "LEX Strain", "ACL", "Hamstring", "Ankle", "Knee", "Back", "Foot", "Hand", "Quad", "Hip", "Groin"];
        const injuryWeights = [0.15, 0.12, 0.08, 0.08, 0.05, 0.15, 0.12, 0.08, 0.06, 0.04, 0.03, 0.02, 0.01, 0.01];
        
        let rand = Math.random();
        let injuryType: InjuryType = "Ankle";
        let cumulativeWeight = 0;
        
        for (let j = 0; j < injuryTypes.length; j++) {
          cumulativeWeight += injuryWeights[j];
          if (rand <= cumulativeWeight) {
            injuryType = injuryTypes[j];
            break;
          }
        }
        
        const severity = getWeightedSeverity();
        const week = Math.floor(Math.random() * 18) + 1; // Weeks 1-18
        const injuryDate = getRandomDate(season, week - 1, week);
        
        // Calculate recovery time based on injury type and severity
        const profile = injuryRecoveryProfiles[injuryType];
        const baseDays = profile.severityWeight[severity];
        const variation = Math.floor(Math.random() * 14) - 7; // +/- 7 days variation
        const daysOut = Math.max(profile.minDays, Math.min(profile.maxDays, baseDays + variation));
        
        // Determine if player has returned
        const today = new Date();
        const expectedReturnDate = new Date(injuryDate.getTime() + daysOut * 24 * 60 * 60 * 1000);
        const hasReturned = expectedReturnDate < today && Math.random() > 0.15; // 85% actually return on time
        
        let returnDate: Date | null = null;
        let status: InjuryStatus = "Out";
        
        if (hasReturned) {
          // Add some variation to actual return date
          const returnVariation = Math.floor(Math.random() * 7) - 3; // +/- 3 days
          returnDate = new Date(expectedReturnDate.getTime() + returnVariation * 24 * 60 * 60 * 1000);
          status = "Recovered";
        } else if (expectedReturnDate < today) {
          // Injury is overdue, might be limited
          status = Math.random() > 0.5 ? "Limited" : "Out";
        } else {
          status = "Out";
        }
        
        // Session type distribution (most injuries in games and practice)
        const sessionTypes: SessionType[] = ["Games", "Practice", "Conditioning", "Recovery", "Strength Training", "Film Study"];
        const sessionWeights = [0.45, 0.35, 0.10, 0.03, 0.05, 0.02];
        
        rand = Math.random();
        cumulativeWeight = 0;
        let sessionTypeAtInjury: SessionType = "Practice";
        
        for (let j = 0; j < sessionTypes.length; j++) {
          cumulativeWeight += sessionWeights[j];
          if (rand <= cumulativeWeight) {
            sessionTypeAtInjury = sessionTypes[j];
            break;
          }
        }
        
        const isRecurring = Math.random() < 0.15; // 15% are recurring injuries
        
        records.push({
          id: `INJ-${recordId++}`,
          playerId,
          playerName,
          teamId: team.id,
          teamName: team.name,
          teamAbbr: team.abbreviation,
          position,
          positionGroup,
          injuryType,
          injuryDate,
          returnDate,
          expectedReturnDate,
          daysOut,
          status,
          severity,
          sessionTypeAtInjury,
          season,
          week,
          description: `${severity} ${injuryType} injury`,
          isRecurring,
        });
      }
    });
  });

  return records;
}

// Generate the dataset
export const INJURY_RECORDS = generateInjuryRecords();

// Helper functions to query the data
export function getInjuriesByTeam(teamId: number): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.teamId === teamId);
}

export function getInjuriesBySeason(season: number): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.season === season);
}

export function getInjuriesByType(injuryType: InjuryType): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.injuryType === injuryType);
}

export function getInjuriesByStatus(status: InjuryStatus): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.status === status);
}

export function getInjuriesByDateRange(startDate: Date, endDate: Date): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => 
    record.injuryDate >= startDate && record.injuryDate <= endDate
  );
}

export function getInjuriesBySessionType(sessionType: SessionType): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.sessionTypeAtInjury === sessionType);
}

export function getInjuriesByPosition(position: string): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.position === position);
}

export function getInjuriesByPositionGroup(positionGroup: string): InjuryRecord[] {
  return INJURY_RECORDS.filter(record => record.positionGroup === positionGroup);
}
