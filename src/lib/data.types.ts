export interface Project {
  title: string;
  about: string;
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
