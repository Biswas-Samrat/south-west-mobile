export interface Area {
  name: string;
  postcodes?: string[];
}

/** [CONFIRM] full list of covered towns */
export const AREAS: Area[] = [
  { name: "Weston-super-Mare", postcodes: ["BS22", "BS23", "BS24"] },
  { name: "Worle" },
  { name: "Uphill" },
  { name: "Kewstoke" },
  { name: "Locking" },
  { name: "Hutton" },
  { name: "Banwell" },
  { name: "Sandford" },
  { name: "Winscombe" },
  { name: "Bleadon" },
  { name: "Congresbury" },
  { name: "Yatton" },
  { name: "Clevedon" },
  { name: "Burnham-on-Sea" },
  { name: "Highbridge" },
];
