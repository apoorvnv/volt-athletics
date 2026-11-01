export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: 'strength' | 'hiit' | 'coaching' | 'hypertrophy' | 'wellness' | 'mobility';
  description: string;
  difficulty: 'All Levels' | 'Intermediate' | 'Advanced' | 'High Intensity';
  duration: string;
  caloriesBurn: string;
  image: string;
  focus: string[];
  weeklyPlan: string[];
  trainerName: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  certifications: string[];
  image: string;
  experienceYears: number;
  socials: {
    instagram: string;
    linkedin: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  popular?: boolean;
  features: string[];
  highlightBadge?: string;
}

export interface ClassSession {
  id: string;
  name: string;
  category: 'Strength' | 'HIIT' | 'Functional' | 'Mobility' | 'Core';
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  duration: string;
  trainer: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  spotsTotal: number;
  spotsLeft: number;
  room: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  period: string;
  achievement: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Facilities' | 'Heavy Iron' | 'Conditioning' | 'Community';
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export const PROGRAMS: Program[] = [
  {
    id: 'strength-conditioning',
    title: 'Strength & Conditioning',
    subtitle: 'Compound movement mastery & maximal power development',
    category: 'strength',
    description:
      'Engineered for athletes striving for genuine raw power and structured progressive overload. Focuses on squat, bench press, deadlift, and Olympic lifts supplemented with velocity-based accessory work.',
    difficulty: 'Intermediate',
    duration: '60–75 mins',
    caloriesBurn: '550–700 kcal',
    image: '/src/assets/images/program_strength_conditioning_1793566986888.jpg',
    focus: ['Barbell Mastery', 'Neuromuscular Efficiency', 'Explosive Power', 'Core Bracing'],
    weeklyPlan: [
      'Day 1: Heavy Lower Body (Squat focus + posterior chain)',
      'Day 2: Upper Body Power (Bench press + weighted pull-ups)',
      'Day 3: Active Recovery & Kinetic Mobility',
      'Day 4: Deadlift Volume & Explosive Triple Extension',
      'Day 5: Overhead Pressing & Athletic Accessories',
    ],
    trainerName: 'Marcus Vance',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: '1-on-1 biomechanical coaching & bespoke programming',
    category: 'coaching',
    description:
      'Tailored fitness architectures curated by master trainers. Every rep, tempo, rest interval, and nutrition recommendation is calibrated specifically to your body type, goals, and schedule.',
    difficulty: 'All Levels',
    duration: '60 mins',
    caloriesBurn: '450–650 kcal',
    image: '/src/assets/images/about_gym_facility_1793566985788.jpg',
    focus: ['Individual Assessment', 'Form Optimization', 'Targeted Progression', 'Lifestyle Integration'],
    weeklyPlan: [
      'Comprehensive Movement & Mobility Screening',
      'Custom Biomechanical Strength Plan',
      'Weekly Nutritional & Recovery Audits',
      'Deload & Peak Performance Periodization',
    ],
    trainerName: 'Elena Rostova & Team',
  },
  {
    id: 'hiit-functional',
    title: 'HIIT & Functional Training',
    subtitle: 'High-density anaerobic intervals & athletic endurance',
    category: 'hiit',
    description:
      'Heart-rate elevated circuits utilizing battle ropes, ski-ergs, assault bikes, plyo boxes, and kettlebells to incinerate calories and forge relentless cardiovascular resilience.',
    difficulty: 'High Intensity',
    duration: '45–50 mins',
    caloriesBurn: '600–850 kcal',
    image: '/src/assets/images/program_hiit_functional_1793566988097.jpg',
    focus: ['Metabolic Conditioning', 'Anaerobic Threshold', 'Functional Agility', 'Grit & Stamina'],
    weeklyPlan: [
      'Interval Tabata Power Circuits',
      'EMOM (Every Minute on the Minute) Conditioning',
      'Hyrox & Strongman Functional Rounds',
      'Partner Pacer Drills & Turf Sprints',
    ],
    trainerName: 'Damon Cole',
  },
  {
    id: 'muscle-building',
    title: 'Hypertrophy & Muscle Building',
    subtitle: 'High mechanical tension & precise volume accumulation',
    category: 'hypertrophy',
    description:
      'Scientifically sequenced hypertrophy training focusing on time under tension, peak contraction, and optimal volume thresholds to build dense, functional muscle mass.',
    difficulty: 'Intermediate',
    duration: '60 mins',
    caloriesBurn: '400–600 kcal',
    image: '/src/assets/images/gallery_calibrated_plates_1793567043163.jpg',
    focus: ['Hypertrophy Science', 'Mind-Muscle Connection', 'Isolation & Cables', 'Structural Balance'],
    weeklyPlan: [
      'Push Focus: Chest, Anterior Delts, Triceps',
      'Pull Focus: Lat Width, Mid-Back Density, Biceps',
      'Legs: Quad Sweep, Hamstring Curls, Calves',
      'Upper Hybrid Volume & Arm Specialization',
    ],
    trainerName: 'Marcus Vance',
  },
  {
    id: 'weight-management',
    title: 'Weight Management & MetCon',
    subtitle: 'Sustainable metabolic acceleration and body recomposition',
    category: 'wellness',
    description:
      'A holistic approach integrating resistance training, energy-system intervals, and caloric balance coaching designed to shed fat while preserving lean athletic muscle tissue.',
    difficulty: 'All Levels',
    duration: '50 mins',
    caloriesBurn: '500–750 kcal',
    image: '/src/assets/images/gallery_sled_push_1793567044128.jpg',
    focus: ['Metabolic Rate Elevation', 'Lean Mass Preservation', 'Nutritional Calibration', 'Habit Stacking'],
    weeklyPlan: [
      'Compound Resistance Circuit',
      'Steady State Heart Zone 2 Protocol',
      'Full Body High-Rep Endurance',
      'Weekly Body Composition Scan Tracking',
    ],
    trainerName: 'Priya Nair',
  },
  {
    id: 'mobility-recovery',
    title: 'Mobility & Active Recovery',
    subtitle: 'Myofascial release, joint decompression, and CNS reset',
    category: 'mobility',
    description:
      'Unlock deep rotational hip mobility, thoracic spine extension, and shoulder health. Utilizing PNF stretching, dynamic bands, compression boots, and breathwork to accelerate tissue repair.',
    difficulty: 'All Levels',
    duration: '45 mins',
    caloriesBurn: '200–300 kcal',
    image: '/src/assets/images/program_mobility_recovery_1793566986630.jpg',
    focus: ['Joint Longevity', 'Soft Tissue Release', 'CNS Downregulation', 'Postural Restoration'],
    weeklyPlan: [
      'Hip Capsule Opening & Glute Activation',
      'Scapular Mobility & Thoracic Rotation',
      'Hamstring & Ankle Dorsiflexion Restoration',
      'Contrast Hydrotherapy & Breathwork Integration',
    ],
    trainerName: 'Elena Rostova',
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Strength & Conditioning',
    specialty: 'Powerlifting, Barbell Mechanics & Periodization',
    bio: 'Former collegiate strength coach with 12+ years optimizing maximal force production. Marcus brings an unapologetic focus on technical precision and heavy compound lifts.',
    certifications: ['CSCS (NSCA)', 'USAW Level 2 Senior Coach', 'FMS Level 2 Certified'],
    image: '/src/assets/images/trainer_head_coach_1793567042260.jpg',
    experienceYears: 12,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Director of Mobility & Recovery',
    specialty: 'Kinetic Movement, Injury Prevention & Posture',
    bio: 'Combining athletic gymnastics discipline with sports physiotherapy, Elena specializes in eliminating joint restrictions, improving movement fluidity, and bulletproofing joints.',
    certifications: ['Doctorate of Physical Therapy (Candidate)', 'FRC Mobility Specialist', 'CPT Master Trainer'],
    image: '/src/assets/images/trainer_female_coach_1793567042357.jpg',
    experienceYears: 9,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'damon-cole',
    name: 'Damon Cole',
    role: 'Lead Functional & HIIT Coach',
    specialty: 'Metabolic Conditioning, Hyrox & Sprint Mechanics',
    bio: 'Ex-decathlete known for infectious energy and relentless work ethic. Damon structures functional conditioning protocols that test mental fortitude and anaerobic power.',
    certifications: ['EXOS Performance Specialist', 'NASM-PES', 'CrossFit Level 2 Trainer'],
    image: '/src/assets/images/program_hiit_functional_1793566988097.jpg',
    experienceYears: 8,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Performance Nutrition & Body Recomposition',
    specialty: 'Macro Periodization, Hypertrophy & Metabolism',
    bio: 'Sports nutritionist helping athletes and professionals strip body fat without crashing energy. Priya balances empirical science with realistic lifestyle habits.',
    certifications: ['MSc Sports Science & Nutrition', 'CISSN Sports Nutritionist', 'Precision Nutrition Level 2'],
    image: '/src/assets/images/hero_gym_athlete_1793566985505.jpg',
    experienceYears: 10,
    socials: {
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'Foundational gym access for independent training',
    monthlyPrice: 69,
    annualPricePerMonth: 55,
    features: [
      'Full Gym Floor Access (5 AM - 11 PM)',
      'High-Grade Calibrated Barbell & Dumbbell Equipment',
      'Complimentary Biomechanical Movement Screen',
      'Locker Room, Cold Towels & Rain Showers',
      'Volt Athlete Mobile App for Workout Logging',
    ],
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    tagline: 'Our premier tier for full-spectrum athletic development',
    monthlyPrice: 119,
    annualPricePerMonth: 95,
    popular: true,
    highlightBadge: 'MOST POPULAR',
    features: [
      'All Starter Features Included',
      'Unlimited Group Fitness Classes (Strength, HIIT, Mobility)',
      'Advance 7-Day Class Reservation Window',
      'Monthly InBody 570 Body Composition Scan',
      'Access to Recovery Lounge & Contrast Showers',
      '1 Guest Pass per Month',
    ],
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'Comprehensive coaching, priority access, and recovery perks',
    monthlyPrice: 189,
    annualPricePerMonth: 149,
    features: [
      'All Performance Tier Privileges Included',
      '2 Monthly 1-on-1 Personal Training Sessions',
      'Priority 14-Day Class Reservations & Guaranteed Spot',
      'Personalized Monthly Nutritional Macro Calibration',
      'Full Recovery Suite Access (Normatec & Infrared Sauna)',
      'Unlimited Guest Passes (1 per visit)',
      'VIP Locker & Dedicated Laundry Service',
    ],
  },
];

export const CLASS_SCHEDULE: ClassSession[] = [
  // Monday
  { id: 'mon-1', name: 'Barbell Strength Protocol', category: 'Strength', day: 'Mon', time: '06:00 AM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 16, spotsLeft: 3, room: 'Weight Arena' },
  { id: 'mon-2', name: 'Metabolic Surge HIIT', category: 'HIIT', day: 'Mon', time: '07:30 AM', duration: '45 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 20, spotsLeft: 6, room: 'Turf Lab' },
  { id: 'mon-3', name: 'Core Architecture', category: 'Core', day: 'Mon', time: '12:00 PM', duration: '40 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 18, spotsLeft: 8, room: 'Studio A' },
  { id: 'mon-4', name: 'Heavy Deadlift & Power', category: 'Strength', day: 'Mon', time: '05:30 PM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 14, spotsLeft: 2, room: 'Weight Arena' },
  { id: 'mon-5', name: 'Athletic Conditioning EMOM', category: 'HIIT', day: 'Mon', time: '06:45 PM', duration: '50 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 20, spotsLeft: 4, room: 'Turf Lab' },

  // Tuesday
  { id: 'tue-1', name: 'Full Kinetic Mobility', category: 'Mobility', day: 'Tue', time: '06:30 AM', duration: '50 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 22, spotsLeft: 9, room: 'Studio A' },
  { id: 'tue-2', name: 'Upper Body Hypertrophy', category: 'Strength', day: 'Tue', time: '07:30 AM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 16, spotsLeft: 5, room: 'Weight Arena' },
  { id: 'tue-3', name: 'Kettlebell Flow & Power', category: 'Functional', day: 'Tue', time: '12:15 PM', duration: '45 min', trainer: 'Damon Cole', intensity: 'High', spotsTotal: 18, spotsLeft: 7, room: 'Turf Lab' },
  { id: 'tue-4', name: 'Functional Hyrox Prep', category: 'Functional', day: 'Tue', time: '05:45 PM', duration: '60 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 18, spotsLeft: 1, room: 'Turf Lab' },
  { id: 'tue-5', name: 'Post-Lift Decompression', category: 'Mobility', day: 'Tue', time: '07:00 PM', duration: '45 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 20, spotsLeft: 12, room: 'Studio A' },

  // Wednesday
  { id: 'wed-1', name: 'Leg Day: Squat Mechanics', category: 'Strength', day: 'Wed', time: '06:00 AM', duration: '65 min', trainer: 'Marcus Vance', intensity: 'Extreme', spotsTotal: 16, spotsLeft: 2, room: 'Weight Arena' },
  { id: 'wed-2', name: 'High-Velocity Sprints & Ropes', category: 'HIIT', day: 'Wed', time: '07:30 AM', duration: '45 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 20, spotsLeft: 5, room: 'Turf Lab' },
  { id: 'wed-3', name: 'Shoulder & Thoracic Reset', category: 'Mobility', day: 'Wed', time: '12:00 PM', duration: '45 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 20, spotsLeft: 11, room: 'Studio A' },
  { id: 'wed-4', name: 'Olympic Clean & Jerk Workshop', category: 'Strength', day: 'Wed', time: '05:30 PM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 12, spotsLeft: 3, room: 'Weight Arena' },
  { id: 'wed-5', name: 'Anaerobic Threshold Blast', category: 'HIIT', day: 'Wed', time: '06:45 PM', duration: '45 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 20, spotsLeft: 4, room: 'Turf Lab' },

  // Thursday
  { id: 'thu-1', name: 'Rotational Power & Core', category: 'Core', day: 'Thu', time: '06:30 AM', duration: '45 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 20, spotsLeft: 8, room: 'Studio A' },
  { id: 'thu-2', name: 'Push & Pull Compound Drive', category: 'Strength', day: 'Thu', time: '07:30 AM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 16, spotsLeft: 6, room: 'Weight Arena' },
  { id: 'thu-3', name: 'Functional Sandbag & Sled', category: 'Functional', day: 'Thu', time: '12:15 PM', duration: '45 min', trainer: 'Damon Cole', intensity: 'High', spotsTotal: 16, spotsLeft: 4, room: 'Turf Lab' },
  { id: 'thu-4', name: 'Metabolic Conditioning Circuits', category: 'HIIT', day: 'Thu', time: '05:30 PM', duration: '50 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 20, spotsLeft: 5, room: 'Turf Lab' },
  { id: 'thu-5', name: 'Active Fascia Stretching', category: 'Mobility', day: 'Thu', time: '06:45 PM', duration: '45 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 22, spotsLeft: 10, room: 'Studio A' },

  // Friday
  { id: 'fri-1', name: 'Friday Iron Hour (PR Focus)', category: 'Strength', day: 'Fri', time: '06:00 AM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'Extreme', spotsTotal: 16, spotsLeft: 1, room: 'Weight Arena' },
  { id: 'fri-2', name: 'Endurance Hyrox Simulation', category: 'Functional', day: 'Fri', time: '07:30 AM', duration: '55 min', trainer: 'Damon Cole', intensity: 'High', spotsTotal: 20, spotsLeft: 4, room: 'Turf Lab' },
  { id: 'fri-3', name: 'Midday Power Core', category: 'Core', day: 'Fri', time: '12:00 PM', duration: '35 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 24, spotsLeft: 14, room: 'Studio A' },
  { id: 'fri-4', name: 'Weekend Kickoff HIIT', category: 'HIIT', day: 'Fri', time: '05:30 PM', duration: '45 min', trainer: 'Damon Cole', intensity: 'Extreme', spotsTotal: 22, spotsLeft: 6, room: 'Turf Lab' },

  // Saturday
  { id: 'sat-1', name: 'Volt Saturday Team Grinder', category: 'Functional', day: 'Sat', time: '08:00 AM', duration: '75 min', trainer: 'Marcus & Damon', intensity: 'Extreme', spotsTotal: 28, spotsLeft: 4, room: 'Turf & Arena' },
  { id: 'sat-2', name: 'Barbell Technique Clinic', category: 'Strength', day: 'Sat', time: '09:45 AM', duration: '60 min', trainer: 'Marcus Vance', intensity: 'Medium', spotsTotal: 14, spotsLeft: 3, room: 'Weight Arena' },
  { id: 'sat-3', name: 'Athletic Yoga & Hips', category: 'Mobility', day: 'Sat', time: '11:00 AM', duration: '60 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 24, spotsLeft: 8, room: 'Studio A' },

  // Sunday
  { id: 'sun-1', name: 'Deep Reset & Sound Recovery', category: 'Mobility', day: 'Sun', time: '09:00 AM', duration: '60 min', trainer: 'Elena Rostova', intensity: 'Medium', spotsTotal: 25, spotsLeft: 12, room: 'Studio A' },
  { id: 'sun-2', name: 'Functional Movement Skills', category: 'Functional', day: 'Sun', time: '10:30 AM', duration: '50 min', trainer: 'Damon Cole', intensity: 'High', spotsTotal: 18, spotsLeft: 7, room: 'Turf Lab' },
  { id: 'sun-3', name: 'Open Platform Free Lift', category: 'Strength', day: 'Sun', time: '01:00 PM', duration: '90 min', trainer: 'Marcus Vance', intensity: 'High', spotsTotal: 20, spotsLeft: 10, room: 'Weight Arena' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Julian Hayes',
    role: 'Software Architect & Amateur Powerlifter',
    period: 'Member for 14 Months',
    achievement: '+45 kg Deadlift · Zero Back Pain',
    quote:
      'I spent five years getting stuck at standard commercial gyms. The level of coaching, calibrated equipment, and raw discipline at VOLT transformed my mechanics within 90 days. It is not an ordinary gym; it is an athletic sanctuary.',
    rating: 5,
    avatar: '/src/assets/images/trainer_head_coach_1793567042260.jpg',
  },
  {
    id: 'test-2',
    name: 'Sarah Lindqvist',
    role: 'Creative Director & Marathon Runner',
    period: 'Member for 9 Months',
    achievement: 'Sub 3:30 Marathon · 18% Strength Increase',
    quote:
      'Balancing high-mileage road running with heavy compound lifts was always tricky until Coach Elena and Marcus structured my split. My joint resilience is through the roof and I achieved a PR without burnout.',
    rating: 5,
    avatar: '/src/assets/images/trainer_female_coach_1793567042357.jpg',
  },
  {
    id: 'test-3',
    name: 'Dr. Tariq Morales',
    role: 'Orthopedic Surgeon & Masters Athlete',
    period: 'Member for 2 Years',
    achievement: 'Down 12% Body Fat · Peak Energy',
    quote:
      'As a surgeon, I am hyper-critical of biomechanics and safety. VOLT’s coaching methodology is strictly grounded in evidence-based exercise physiology. The culture here demands consistency without reckless ego.',
    rating: 5,
    avatar: '/src/assets/images/hero_gym_athlete_1793566985505.jpg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Olympic Calibrated Steel & Racks',
    category: 'Heavy Iron',
    image: '/src/assets/images/gallery_calibrated_plates_1793567043163.jpg',
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'High-Tension Heavy Deadlift Arena',
    category: 'Heavy Iron',
    image: '/src/assets/images/program_strength_conditioning_1793566986888.jpg',
    aspect: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Architectural Strength Training Facility',
    category: 'Facilities',
    image: '/src/assets/images/about_gym_facility_1793566985788.jpg',
    aspect: 'landscape',
  },
  {
    id: 'gal-4',
    title: 'Explosive Heavy Sled Turf Drive',
    category: 'Conditioning',
    image: '/src/assets/images/gallery_sled_push_1793567044128.jpg',
    aspect: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'Battle Ropes & High Heart-Rate Drills',
    category: 'Conditioning',
    image: '/src/assets/images/program_hiit_functional_1793566988097.jpg',
    aspect: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Active Mobility & Kinetic Elasticity',
    category: 'Facilities',
    image: '/src/assets/images/program_mobility_recovery_1793566986630.jpg',
    aspect: 'portrait',
  },
];

export const BRAND_PRINCIPLES = [
  {
    number: '01',
    title: 'Uncompromising Standards',
    description: 'We do not cut corners on equipment, coaching certifications, or training hygiene. Every millimeter matters.',
  },
  {
    number: '02',
    title: 'Evidence-Based Programming',
    description: 'No fad workouts or reckless burnout sets. Every cycle is rooted in sports science, progressive overload, and bio-recovery.',
  },
  {
    number: '03',
    title: 'Sustainable Progression',
    description: 'Building durability that lasts decades. We teach proper joint loading and periodization so you never sideline your progress.',
  },
  {
    number: '04',
    title: 'The Volt Community',
    description: 'Surround yourself with individuals who hold themselves accountable. Encouragement without hollow hype.',
  },
];
