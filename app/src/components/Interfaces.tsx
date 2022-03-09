// this file actually might not be necessary.
// bc in CardGrid.tsx I had to use AllAnimalsQuery type instead of any of this
// but maybe useful for general interfaces in the future?

export interface ApiStatus {
  status: "error" | "idle" | "loading" | "success";
}

export interface Animal {
  type: string;
  name: string;
  ing: string;
}

export interface AnimalData {
  animals: [Animal];
}
