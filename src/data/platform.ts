import {
  Activity,
  Cpu,
  Globe2,
  ShieldCheck,
  Terminal,
  TrendingUp,
} from "lucide-react";

export const platformFeatures = [
  {
    slug: "compute",
    icon: Cpu,
    title: "Elastic compute",
    description:
      "Spin up compute in seconds and scale it back down automatically. Pay for what's running, not what's idle.",
    longDescription:
      "Compute on ApexByte is provisioned from a single command or API call, not a multi-step console wizard. Instances start in seconds, and idle capacity is scaled back down automatically instead of sitting on your bill. You choose the resource profile your workload actually needs rather than picking from a confusing matrix of instance families.",
    capabilities: [
      "Provision compute via CLI, API, or dashboard",
      "Automatic scale-down when traffic drops",
      "Per-second billing, no reserved minimums",
      "Resource profiles sized for typical app and API workloads",
    ],
    audience:
      "For teams running web apps, APIs, or background workers that need compute without managing a fleet of servers by hand.",
  },
  {
    slug: "edge-network",
    icon: Globe2,
    title: "Global edge network",
    description:
      "Deploy close to your users across regions by default, without configuring a CDN separately.",
    longDescription:
      "Every deployment on ApexByte is distributed across our edge network by default — there's no separate CDN to configure or cache rules to get right before your users in another region get a fast response. Static assets and edge-eligible routes are served from the nearest point of presence automatically.",
    capabilities: [
      "Deployed across 12 edge regions by default",
      "Automatic routing to the nearest region",
      "No separate CDN configuration required",
      "Edge caching for static assets out of the box",
    ],
    audience:
      "For products with users in more than one region who need consistent latency without owning a CDN setup.",
  },
  {
    slug: "observability",
    icon: Activity,
    title: "Real-time observability",
    description:
      "Latency, error rates, and resource usage visible the moment you deploy — no extra agent to install.",
    longDescription:
      "Metrics and logs are part of the platform itself, not a third-party tool you bolt on after something breaks. The moment a deployment goes live, you can see latency, error rates, and resource usage for it — no agent to install, no separate billing relationship with a monitoring vendor.",
    capabilities: [
      "Request latency and error rate dashboards per deployment",
      "Structured log search without a separate log pipeline",
      "Resource usage graphs for compute and storage",
      "Alerting on error rate and latency thresholds",
    ],
    audience:
      "For teams who want to know something is wrong before a customer tells them, without standing up a separate observability stack.",
  },
  {
    slug: "cli-workflow",
    icon: Terminal,
    title: "CLI-first workflow",
    description:
      "Everything in the dashboard is scriptable. Deploy, roll back, and inspect logs without leaving your terminal.",
    longDescription:
      "Anything you can do in the dashboard, you can do from the command line — deploy, roll back a bad release, tail logs, or inspect resource usage without switching contexts. The CLI is treated as a first-class interface, not an afterthought bolted onto a web UI.",
    capabilities: [
      "Deploy and roll back from the command line",
      "Live log tailing without leaving your terminal",
      "Scriptable for CI/CD pipelines",
      "Dashboard and CLI stay in sync — no separate state",
    ],
    audience:
      "For developers and teams who'd rather automate their deployment workflow than click through a UI every time.",
  },
  {
    slug: "autoscaling",
    icon: TrendingUp,
    title: "Automatic scaling",
    description:
      "Traffic spikes are handled automatically based on real load, not a manual instance count you forgot to raise.",
    longDescription:
      "Scaling decisions are based on real load — request volume, CPU, and memory pressure — rather than a fixed instance count that someone has to remember to raise before a launch and lower afterward. Traffic spikes are absorbed automatically, and capacity comes back down once load drops.",
    capabilities: [
      "Scales based on live request volume and resource load",
      "No manual instance count to maintain",
      "Handles traffic spikes without pre-provisioning",
      "Scales back down automatically to control cost",
    ],
    audience:
      "For products with unpredictable or seasonal traffic that can't afford to be down during a spike or overpaying during a lull.",
  },
  {
    slug: "security",
    icon: ShieldCheck,
    title: "Security by default",
    description:
      "Encrypted storage, isolated networking, and access control are on from the first deploy, not an add-on tier.",
    longDescription:
      "Security isn't a higher pricing tier on ApexByte — encrypted storage, isolated networking between projects, and access control are part of every deployment from the start. You can tighten things further as you grow, but the defaults are already set to something reasonable.",
    capabilities: [
      "Encryption at rest for storage and databases",
      "Isolated networking between projects by default",
      "Role-based access control for team members",
      "Audit log of deployments and access changes",
    ],
    audience:
      "For teams handling customer data who need sane security defaults without configuring everything by hand.",
  },
];

export const reasons = [
  {
    number: "01",
    title: "Deploy in seconds, not hours",
    description:
      "A single command takes you from code to a live, edge-distributed deployment — no ticket, no provisioning wait.",
  },
  {
    number: "02",
    title: "Pay for what you use",
    description:
      "Usage-based pricing that scales down with you too. No minimum commitment to get production-grade infrastructure.",
  },
  {
    number: "03",
    title: "Observability built in",
    description:
      "Metrics and logs are part of the platform, not a third-party integration you have to wire up after launch.",
  },
  {
    number: "04",
    title: "Support from engineers",
    description:
      "When something breaks, you reach a team that runs the platform — not a script reading from a knowledge base.",
  },
];
