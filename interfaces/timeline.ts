import { Circle } from "~/utilities/enums/rollout";

export interface Timeline {
    show: boolean;
    circle: Circle;
    heading: string;
    description?: string;
    startYear: number;
    endYear?: number
  }