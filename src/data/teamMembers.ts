export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  category: "drivers" | "leadership" | "engineering" | "alumni";
  // Extended details for profile page
  fullBio: string;
  achievements: string[];
  stats?: {
    races?: number;
    wins?: number;
    podiums?: number;
    championships?: number;
    poles?: number;
    fastLaps?: number;
    projects?: number;
    innovations?: number;
  };
  contact: {
    email: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  yearsWithTeam?: string;
}

export const teamMembers: TeamMember[] = [
  // Drivers
  {
    id: "marcus-steel",
    name: "Marcus Steel",
    role: "Lead Driver",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "7 years of championship experience with 12 podium finishes.",
    category: "drivers",
    fullBio: "Marcus Steel is one of the most experienced drivers in the championship, bringing a wealth of knowledge and fierce competitiveness to every race. With over 7 years of professional racing under his belt, he has consistently demonstrated exceptional skill in high-pressure situations. His strategic thinking and precise driving style make him a formidable competitor on any circuit. Marcus has been with the team for the past 4 seasons and continues to push the boundaries of performance.",
    achievements: [
      "3-time Championship Runner-up",
      "12 Podium Finishes",
      "5 Race Wins",
      "Fastest Lap Record Holder (3 circuits)",
      "Rookie of the Year 2017",
      "Most Improved Driver 2019"
    ],
    stats: {
      races: 87,
      wins: 12,
      podiums: 32,
      championships: 0,
      poles: 18,
      fastLaps: 25
    },
    contact: {
      email: "marcus.steel@overdriveteam.com",
      linkedin: "marcus-steel",
      instagram: "@marcussteel_racing",
      twitter: "@steel_marcus"
    },
    yearsWithTeam: "2019-Present"
  },
  {
    id: "sofia-ramirez",
    name: "Sofia Ramirez",
    role: "Performance Driver",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Rising star with exceptional technical skills and precision driving.",
    category: "drivers",
    fullBio: "Sofia Ramirez represents the next generation of motorsport excellence. Known for her exceptional technical skills and surgical precision on the track, Sofia has quickly established herself as one of the most promising talents in the championship. Her data-driven approach to racing, combined with natural talent, has earned her multiple accolades in a remarkably short time. Sofia joined the team in 2021 and has already made a significant impact.",
    achievements: [
      "2021 Rookie of the Year",
      "Youngest Race Winner in Team History",
      "6 Podium Finishes in First Season",
      "Best Qualifying Average (2022)",
      "Most Overtakes in a Season (2023)",
      "Outstanding Technical Feedback Award"
    ],
    stats: {
      races: 45,
      wins: 5,
      podiums: 14,
      championships: 0,
      poles: 8,
      fastLaps: 12
    },
    contact: {
      email: "sofia.ramirez@overdriveteam.com",
      linkedin: "sofia-ramirez-racing",
      instagram: "@sofia_ramirez_racing",
      twitter: "@ramirez_sofia"
    },
    yearsWithTeam: "2021-Present"
  },
  
  // Leadership
  {
    id: "james-chen",
    name: "James Chen",
    role: "Team Principal",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "15+ years of motorsport leadership and strategic excellence.",
    category: "leadership",
    fullBio: "James Chen is the visionary leader behind Team OverDrive's success. With over 15 years of motorsport leadership experience, he has built a reputation for strategic excellence and team building. His holistic approach to racing operations has transformed the team into a championship-contending outfit. James's ability to inspire and coordinate diverse talents creates an environment where excellence thrives.",
    achievements: [
      "Led Team to 3 Championship Contests",
      "Founding Team Principal (2015)",
      "Most Improved Team Award (2018, 2021)",
      "Leader of the Year Award (2022)",
      "Built Championship-Winning Team Culture",
      "Strategic Innovation Award (3x recipient)"
    ],
    stats: {
      championships: 0,
      projects: 1
    },
    contact: {
      email: "james.chen@overdriveteam.com",
      linkedin: "james-chen-team-principal",
      twitter: "@chen_james_team"
    },
    yearsWithTeam: "2015-Present"
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Master tactician behind our race-winning strategies.",
    category: "leadership",
    fullBio: "David Martinez is the master tactician responsible for the team's race-winning strategies. His keen analytical mind and ability to read race dynamics in real-time have made him indispensable to the team's success. With a background in data science and years of racing expertise, David develops innovative strategies that maximize performance and minimize risk. His pit wall decisions have directly contributed to numerous podium finishes.",
    achievements: [
      "Best Strategy Call Award (5x)",
      "Perfect Pit Strategy Execution (2022)",
      "Won Races Through Strategic Brilliance",
      "Data Analytics Excellence Award",
      "Built Advanced Strategy Systems",
      "Most Accurate Race Predictions"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "david.martinez@overdriveteam.com",
      linkedin: "david-martinez-strategy",
      twitter: "@martinez_strategy"
    },
    yearsWithTeam: "2017-Present"
  },
  
  // Engineering
  {
    id: "elena-volkov",
    name: "Elena Volkov",
    role: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Pioneering aerodynamics specialist with groundbreaking innovations.",
    category: "engineering",
    fullBio: "Elena Volkov is a pioneering aerodynamics specialist whose groundbreaking innovations have pushed the boundaries of car performance. With a background in aerospace engineering and a passion for racing, Elena brings cutting-edge aerodynamic concepts to the team. Her work on drag reduction and downforce optimization has been instrumental in the team's competitive edge. Elena's dedication to excellence and innovative problem-solving make her one of the most respected engineers in the paddock.",
    achievements: [
      "Revolutionary Aero Package Development",
      "Award-Winning Innovations (3x)",
      "Published Research on Racing Aerodynamics",
      "Fastest Development Cycle Achievement",
      "Zero-Defect Design Excellence",
      "International Engineering Excellence Award"
    ],
    stats: {
      projects: 12,
      innovations: 8
    },
    contact: {
      email: "elena.volkov@overdriveteam.com",
      linkedin: "elena-volkov-engineer",
      twitter: "@volkov_engineering"
    },
    yearsWithTeam: "2018-Present"
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    role: "Performance Analyst",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Data-driven approach to maximizing car and driver performance.",
    category: "engineering",
    fullBio: "Lisa Thompson is the performance analyst whose data-driven insights maximize both car and driver performance. Her expertise in telemetry analysis and predictive modeling has been crucial to the team's continuous improvement. Lisa's ability to translate complex data into actionable strategies helps drivers extract every ounce of performance while ensuring reliability. She has developed proprietary analytics tools that have become industry standard.",
    achievements: [
      "Developed Advanced Telemetry System",
      "Performance Optimization Award (3x)",
      "Published Paper on Racing Analytics",
      "Created Predictive Performance Models",
      "Best Data Visualization (Industry Award)",
      "Zero Setup Errors in 2023 Season"
    ],
    stats: {
      projects: 9,
      innovations: 6
    },
    contact: {
      email: "lisa.thompson@overdriveteam.com",
      linkedin: "lisa-thompson-analyst",
      twitter: "@thompson_performance"
    },
    yearsWithTeam: "2020-Present"
  },
  
  // Alumni
  {
    id: "robert-hamilton",
    name: "Robert Hamilton",
    role: "Former Lead Driver",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "2018-2022 | 3 Championship titles",
    category: "alumni",
    fullBio: "Robert Hamilton is one of the most decorated drivers in team history. During his tenure from 2018 to 2022, he achieved remarkable success, including 3 championship titles that cemented his legacy. His leadership both on and off the track helped establish Team OverDrive as a championship contender. Robert's technical feedback and driving style were instrumental in car development. After retiring from full-time racing, he continues to contribute to the sport as a consultant and mentor.",
    achievements: [
      "3 Championship Titles (2019, 2020, 2022)",
      "All-Time Race Win Leader",
      "Fastest Lap Record at 5 circuits",
      "Team Captain (2020-2022)",
      "Hall of Fame Inductee",
      "Longest Consecutive Points Scoring Streak"
    ],
    stats: {
      races: 98,
      wins: 27,
      podiums: 54,
      championships: 3,
      poles: 32,
      fastLaps: 41
    },
    contact: {
      email: "robert.hamilton@former.com",
      linkedin: "robert-hamilton",
      twitter: "@hamilton_robert"
    },
    yearsWithTeam: "2018-2022"
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    role: "Former Team Principal",
    image: "https://images.unsplash.com/photo-1552255472-3330e5928013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyJTIwZHJpdmVyJTIwaGVsbWV0fGVufDF8fHx8MTc2MDE0OTM1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "2015-2023 | Led team to championship glory",
    category: "alumni",
    fullBio: "Maria Santos was the founding team principal who led Team OverDrive to championship glory. From 2015 to 2023, she built the team from the ground up, creating a culture of excellence, innovation, and teamwork. Her strategic vision and leadership transformed a startup racing team into a championship-winning organization. Maria's dedication to developing talent and fostering innovation has left an enduring legacy. She now serves as an advisor to the motorsport industry.",
    achievements: [
      "Founded Team OverDrive (2015)",
      "Led Team to First Championship (2019)",
      "Built Championship-Winning Infrastructure",
      "Industry Leader of the Year (2018)",
      "Established Team Culture & Values",
      "Strategic Vision Award (3x)"
    ],
    stats: {
      championships: 1,
      projects: 1
    },
    contact: {
      email: "maria.santos@former.com",
      linkedin: "maria-santos-principal",
      twitter: "@santos_maria"
    },
    yearsWithTeam: "2015-2023"
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

export function getTeamMembersByCategory(category: TeamMember["category"]): TeamMember[] {
  return teamMembers.filter(member => member.category === category);
}

