import { Circle} from "../utilities/enums/rollout"

const matriculation = {
  show: false,

  circle: Circle.blue,
  text:"Matriculated (Abitur)",
  startYear: 1989
}

const programmingTraining = {
  show: false,

  circle: Circle.green,
  text:"Programmer Training",
  startYear: 1991,
  endYear: 1992
}

const missionary = {
  show: false,

  circle: Circle.blue,
  text:"Missionary",
  startYear: 1993,
  endYear: 1997
}

const softwareDeveloperOakfields = {
  show: false,
  circle: Circle.blue,
  text:"Software Developer at Oakfieldfarms South Africa",
  startYear: 1998,
  endYear: 2001
}

interface Timeline {
    show: boolean;
    circle: Circle;
    text: string;
    startYear: number;
    endYear?: number
  }

export const timeline: Timeline[] = [
  matriculation,
  programmingTraining,
  missionary,
  softwareDeveloperOakfields
];
