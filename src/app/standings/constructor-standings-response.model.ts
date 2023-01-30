export class ConstructorStandingsResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    StandingsTable: {
      season: string;
      StandingsLists: Array<{
        season: string;
        round: string;
        ConstructorStandings: Array<{
          position: string;
          positionText: string;
          points: string;
          wins: string;
          Constructor: {
            constructorId: string;
            url: string;
            name: string;
            nationality: string;
          };
        }>;
      }>;
    };
  };
}
