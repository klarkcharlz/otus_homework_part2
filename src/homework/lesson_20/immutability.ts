// Задание 1
export type OriginalTeam = {
    size: number;
    name: string;
    league: string;
};

export type ExpectedTeam = {
    name: string;
    league: string;
    roster: number;
};

export const originalTeamToExpectedTeam = (
    originalTeam: OriginalTeam
): ExpectedTeam => {
    return {
    name: "New York Badgers",
    league: originalTeam.league,
    roster: 25,
  }
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (originalArray: ReadonlyArray<number>): SomeArray => {
    return ["two", 3, 4, 5];
};

// Задание 3

export type Team = {
    name: string;
    captain: {
        name: string;
        age: number;
    };
};

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
    const newTeam = Object.assign({}, originalTeam);
    newTeam.captain.age ++;
    return newTeam;
}
