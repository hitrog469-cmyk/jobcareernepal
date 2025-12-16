export type Job = {
  id: number;
  title: string;
  company: string;
  city: string;
  remote?: boolean;
  salaryMin: number;
  salaryMax: number;
  type: "intern" | "entry" | "mid" | "senior" | "any";
  verified: boolean;
  tags: string[];
  exp: number;              // years experience
  reportsTo?: string;
  teaser: string;           // short summary
  description: string;      // long description
  applyUrl: string;         // official site link
};
