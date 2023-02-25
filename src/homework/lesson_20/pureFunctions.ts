// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  let topIndex = 0;
  for(let i = 1; i < teams.length; i++){
      if(teams[i].score > teams[topIndex].score){
          topIndex = i;
      }
  }
  return teams[topIndex].name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
    // @ts-ignore
    return '?' + new URLSearchParams(qsObj).toString();
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const urlParams = new URLSearchParams(qs);
  const entries = urlParams.entries();
  const result: QsObj = {}
    // @ts-ignore
  for(const [key, value] of entries) {
        result[key] = value;
  }
  return result;
};
