export interface Project {
  title: string;
  about: string;
  image: string;
  links: ProjectLink[];
}

export interface ProjectLink {
  type: "Website" | "iOS" | "Android" | "Github";
  url: string;
}

export interface Certificate {
  image: string;
  title: string;
  url: string;
}

export interface Skill {
  title: string;
  percentage: number;
}

export interface Experience {
  title: string;
  company: string;
  url: string;
  responsibilities: string[];
}
