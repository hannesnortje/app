import { Circle} from "../utilities/enums/rollout"
import { Timeline } from "~/interfaces/timeline"

const matriculation = {
  show: false,
  circle: Circle.green,
  heading:"Matriculated (Abitur)",
  description: "I matriculated December 1989 in South Africa",
  startYear: 1989
}

const programmingTraining = {
  show: false,
  circle: Circle.blue,
  heading:"Programmer Training",
  description: "The years 1991 to 1992 I completed my training as Software Developer at the department of Central Statical Services in Pretoria, South Africa",
  startYear: 1991,
  endYear: 1992
}

const missionary = {
  show: false,
  circle: Circle.green,
  heading:"Missionary",
  startYear: 1993,
  endYear: 1997
}

const softwareDeveloperOakfields = {
  show: false,
  circle: Circle.blue,
  heading:"Software Developer at Oakfieldfarms South Africa",
  description: "I planned, developed and executed the whole digitalization of an extensive wedding venue from analogue",
  startYear: 1998,
  endYear: 2001
}

const pastorTeacher = {
  show: false,
  circle: Circle.green,
  heading:"Miscellaneous",
  description: "Pastor in England, English teacher in Germany",
  startYear: 2003,
  endYear: 2008
}

const softwareDeveloperEC = {
  show: false,
  circle: Circle.blue,
  heading:"Software Developer at 'Entschieden für Christus“ (EC) e.V.'",
  description: "I planned, developed and executed the whole digitalization of an extensive sponsorship program in India with 30 hostels from analogue",
  startYear: 2008,
  endYear: 2010
}

const softwareConsultant = {
  show: false,
  circle: Circle.blue,
  heading:"Software Consultant for 'Entschieden für Christus“ (EC) e.V.'",
  description: "MySQL database development and migration from MSSQL. Migration from Microsoft to Open Source.",
  startYear: 2010,
  endYear: 2016
}

const docent = {
  show: false,
  circle: Circle.green,
  heading:"Miscellaneous",
  description: "Leadership trainer, teacher, and external examiner for the University of South Africa (Ms and Ds).",
  startYear: 2016,
  endYear: 2020
}

const softwareDeveloperDAA = {
  show: false,
  circle: Circle.blue,
  heading:"Software Developer at Deutsche Angestellten-Akademie",
  description: "I developed a pbx waiting queue app in both in C++ with Qt5 and in vanilla JavaScript",
  startYear: 2020,
  endYear: 2021
}

const softwareDeveloperSHIFT = {
  show: false,
  circle: Circle.blue,
  heading:"Software Developer at SHIFT GmbH",
  description: "Development of the ONCE-Framework in Agile Scrumming. Development, documentation, and the training of OOP with Bash. JavaScript, TypeScript und Nuxt3 training and development. Conceptualizing and development of virtual machines in VirtualBox for different development environments. Conceptualizing and development of Nuxt3 starter templates. Conceptualizing and development of a Strapi backend. Development of Nuxt3 components connecting with Backends (RESTful Api and GraphQL)",
  startYear: 2021,
  endYear: 2023
}

export const timeline: Timeline[] = [
  matriculation,
  programmingTraining,
  missionary,
  softwareDeveloperOakfields,
  pastorTeacher,
  softwareDeveloperEC,
  softwareConsultant,
  docent,
  softwareDeveloperDAA,
  softwareDeveloperSHIFT
];
