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
    id: "saahil-rajesh",
    name: "Saahil Rajesh",
    role: "Team Lead",
    image: "/alumni/saahil-rajesh.jpg",
    bio: "Former team lead who led the team to success.",
    category: "alumni",
    fullBio: "Saahil Rajesh was a driving force behind Team OverDrive's success during his tenure. With exceptional leadership skills and a passion for motorsport, Saahil was instrumental in guiding the team forward. His strategic vision and commitment to excellence helped establish the team as a competitive force in racing. Saahil's ability to inspire and unite the team created an environment where everyone could thrive.",
    achievements: [
      "Team Leadership Excellence",
      "Strategic Vision Implementation",
      "Built Strong Team Culture",
      "Led Team Growth and Development",
      "Innovation in Team Management",
      "Outstanding Leadership Award"
    ],
    stats: {
      championships: 0,
      projects: 1
    },
    contact: {
      email: "saahil.rajesh@former.com",
      linkedin: "saahil-rajesh",
      instagram: "@saahil_rajesh"
    },
    yearsWithTeam: "2020-2023"
  },
  {
    id: "vishnu-sudeep",
    name: "Vishnu Sudeep",
    role: "Manager",
    image: "/alumni/vishnu-sudeep.jpg",
    bio: "Former manager who excelled in team coordination and management.",
    category: "alumni",
    fullBio: "Vishnu Sudeep brought exceptional management skills to Team OverDrive during his tenure. As the team manager, Vishnu oversaw operations, coordinated activities, and ensured smooth team functioning. His organizational abilities and attention to detail were crucial in managing complex team logistics. Vishnu's commitment to excellence and team coordination significantly contributed to the team's operational success.",
    achievements: [
      "Excellent Team Management",
      "Operational Excellence Award",
      "Strategic Coordination Mastery",
      "Streamlined Team Processes",
      "Outstanding Organizational Skills",
      "Team Management Innovation"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "vishnu.sudeep@former.com",
      linkedin: "vishnu-sudeep",
      instagram: "@vishnu_sudeep"
    },
    yearsWithTeam: "2021-2023"
  },
  {
    id: "jerin-job",
    name: "Jerin Job",
    role: "Co Manager",
    image: "/alumni/jerin-job.jpg",
    bio: "Former co-manager who supported team operations with dedication.",
    category: "alumni",
    fullBio: "Jerin Job served as the Co Manager of Team OverDrive, working closely with the management team to ensure efficient operations. Jerin's collaborative approach and problem-solving skills were essential in addressing team challenges. With a focus on team support and operational excellence, Jerin helped maintain the high standards that define Team OverDrive.",
    achievements: [
      "Team Support Excellence",
      "Operational Coordination Award",
      "Effective Problem Solving",
      "Team Collaboration Leadership",
      "Process Improvement Initiatives",
      "Outstanding Co-Management Skills"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "jerin.job@former.com",
      linkedin: "jerin-job",
      instagram: "@jerin_job"
    },
    yearsWithTeam: "2021-2023"
  },
  {
    id: "savio-sebastian-komath",
    name: "Savio Sebastian Komath",
    role: "Vice Captain",
    image: "/alumni/savio-sebastian.jpg",
    bio: "Former vice captain who led with passion and supported team excellence.",
    category: "alumni",
    fullBio: "Savio Sebastian Komath held the position of Vice Captain, playing a crucial role in team leadership and coordination. Savio's leadership style combined passion for motorsport with a strong commitment to team success. His ability to support both management and team members made him an invaluable part of Team OverDrive's leadership structure. Savio's dedication and collaborative spirit inspired the entire team.",
    achievements: [
      "Vice Captain Leadership Excellence",
      "Team Coordination Mastery",
      "Inspirational Leadership",
      "Team Support and Development",
      "Leadership Recognition Award",
      "Outstanding Team Contribution"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "savio.komath@former.com",
      linkedin: "savio-sebastian-komath",
      instagram: "@savio_komath"
    },
    yearsWithTeam: "2021-2023"
  },
  {
    id: "vineeth-krishna",
    name: "Mr. Vineeth Krishna P",
    role: "Faculty Advisor",
    image: "/alumni/vineeth-krishna.jpg",
    bio: "Assistant Professor Department of Mechanical Engineering.",
    category: "alumni",
    fullBio: "Vineeth Krishna served as Faculty Advisor to Team OverDrive, bringing academic expertise and professional guidance to the team. With deep knowledge of engineering principles and practical application, Vineeth helped bridge the gap between theory and practice. His mentorship was instrumental in developing team members' technical skills and ensuring the team maintained high academic and technical standards.",
    achievements: [
      "Academic Excellence in Guidance",
      "Technical Mentorship Award",
      "Innovation in Engineering Education",
      "Student Development Excellence",
      "Outstanding Faculty Support",
      "Technical Knowledge Transfer"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "vineethkp@rajagiritech.edu.in",
      linkedin: "vineeth-krishna-p",
      instagram: "@vineeth_krishna"
    },
    yearsWithTeam: "2020-2023"
  },
  {
    id: "john-paul",
    name: "Mr. John Paul C. D.",
    role: "Faculty Advisor",
    image: "/alumni/john-paul.jpg",
    bio: "Assistant Professor Department of Mechanical Engineering ",
    category: "alumni",
    fullBio: "John Paul was a Faculty Advisor for Team OverDrive, providing essential academic and technical guidance. His expertise and mentorship helped team members develop both technical skills and professional competencies. John's support was crucial in helping the team navigate academic requirements while pursuing excellence in motorsport. His commitment to student success and team development was evident in the team's achievements.",
    achievements: [
      "Faculty Guidance Excellence",
      "Student Mentorship Award",
      "Academic Support Innovation",
      "Technical Knowledge Contribution",
      "Outstanding Advisor Recognition",
      "Team Development Support"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "johnp@rajagiritech.edu.in",
      linkedin: "john-paul-35a5bb1b3",
      instagram: "@john_paul"
    },
    yearsWithTeam: "2020-2023"
  },
  {
    id: "jerin-thankachan",
    name: "Mr. Jerin Thankachan",
    role: "Faculty Advisor",
    image: "/alumni/jerin-thankachan.png",
    bio: "Technical Assistant, Department of Mechanical Engineering ",
    category: "alumni",
    fullBio: "John Paul was a Technical Assistant Faculty Advisor for Team OverDrive, providing essential academic and technical guidance. His expertise and mentorship helped team members develop both technical skills and professional competencies. John's support was crucial in helping the team navigate academic requirements while pursuing excellence in motorsport. His commitment to student success and team development was evident in the team's achievements.",
    achievements: [
      "Faculty Guidance Excellence",
      "Student Mentorship Award",
      "Academic Support Innovation",
      "Technical Knowledge Contribution",
      "Outstanding Advisor Recognition",
      "Team Development Support"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "johnp@rajagiritech.edu.in",
      linkedin: " john-paul-35a5bb1b3",
      instagram: "@john_paul"
    },
    yearsWithTeam: "2020-2023"
  },
  {
    id: "faris-sayed-muhammed",
    name: "Faris Sayed Muhammed",
    role: "Mentor",
    image: "/alumni/faris-sayed.jpg",
    bio: "Former mentor who shared expertise and guided team members toward excellence.",
    category: "alumni",
    fullBio: "Faris Sayed Muhammed served as a Mentor to Team OverDrive, bringing valuable experience and expertise to guide team members. His mentorship was instrumental in helping team members develop their skills, overcome challenges, and achieve their goals. Faris's commitment to sharing knowledge and supporting growth made a significant impact on the team's development and success.",
    achievements: [
      "Excellence in Mentorship",
      "Knowledge Sharing Award",
      "Team Member Development",
      "Technical Guidance Excellence",
      "Outstanding Mentor Recognition",
      "Leadership in Team Growth"
    ],
    stats: {
      projects: 1,
      innovations: 1
    },
    contact: {
      email: "faris.muhammed@former.com",
      linkedin: "faris-sayed-muhammed",
      instagram: "@faris_muhammed"
    },
    yearsWithTeam: "2021-2023"
  },
];

export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id);
}

export function getTeamMembersByCategory(category: TeamMember["category"]): TeamMember[] {
  return teamMembers.filter(member => member.category === category);
}

