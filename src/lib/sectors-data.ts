import { Building2, HeartPulse, Hotel, Landmark } from 'lucide-react';

import type { Sector } from '@/lib/types';

export const sectors: Sector[] = [
  {
    slug: 'government',
    title: 'Government Sector Solutions',
    kicker: 'Trusted Partner for Government Operations',
    description: 'Comprehensive Facility & Support Services for Government Sector. Managing government facilities requires a high level of discipline, compliance, and operational efficiency. At DK Enterprise, we provide integrated services tailored specifically for government offices, public infrastructure, and institutional facilities. Our expertise covers facility management, security services, and environmental support, ensuring that all aspects of operations are handled professionally and efficiently.\n\nWe understand the importance of maintaining clean, safe, and well-managed public spaces. Our trained workforce, structured processes, and compliance-driven approach enable us to deliver consistent service quality across large-scale government projects. From daily maintenance and sanitation to security and waste management, we ensure seamless operations that meet regulatory standards and public expectations.',
    image: '/assets/images/generated/sector_government_hero_v2_unique.png',
    thumbnailImage: '/assets/images/generated/sector_government_indian.png',
    icon: Landmark,
    heroDescription:
      'Reliable, compliant, and efficient services designed to support government institutions and public infrastructure. DK Enterprise delivers structured solutions that ensure smooth operations, safety, and high standards of hygiene across all government facilities.',
    stats: [
      { label: 'Government & Institutional Projects', value: 50, suffix: '+' },
      { label: 'Commercial & Corporate Spaces Managed', value: 200, suffix: '+' },
      { label: 'Compliance-Focused Operations', value: 100, suffix: '%' },
      { label: 'Client Satisfaction Rate', value: 90, suffix: '%' },
    ],
    features: [
      {
        title: 'Integrated Facility Management for Government',
        description:
          'We provide complete facility management services to ensure government buildings and public infrastructure operate smoothly. Our solutions focus on maintaining hygiene, managing essential services, and supporting daily operations with efficiency and reliability.\n\nOur team handles housekeeping, technical maintenance, and support services to ensure a clean, organized, and well-maintained environment across all government facilities.',
        image: '/assets/images/generated/sector_government_ifm_unique.png',
        bullets: ['Housekeeping', 'Technical maintenance', 'Support services'],
        cta: 'Explore Facility Management',
      },
      {
        title: 'Security Services for Government',
        description:
          'Security is a critical requirement for government institutions. We provide disciplined and professional security services designed to protect public assets and manage controlled access across government premises.\n\nOur trained personnel ensure proper monitoring, crowd management, and safety protocols, maintaining a secure and well-managed environment at all times.',
        image: '/assets/images/generated/sector_government_security_unique.png',
        bullets: ['Monitoring', 'Crowd management', 'Safety protocols'],
        cta: 'View Security Services',
      },
      {
        title: 'Environmental Support for Government',
        description:
          'Maintaining hygiene and sustainability across public spaces is essential for community well-being. Our environmental support services focus on efficient waste management, sanitation, and compliance with environmental standards.\n\nWe help government bodies maintain clean and hygienic environments through structured processes and responsible waste handling practices.',
        image: '/assets/images/generated/sector_government_environmental_unique.png',
        bullets: ['Waste management', 'Sanitation', 'Public hygiene'],
        cta: 'Discover Environmental Services',
      },
    ],
    advantages: [
      'Compliance-focused service delivery',
      'Trained and disciplined workforce',
      'Experience in handling large-scale operations',
      'Focus on hygiene, safety, and efficiency',
      'Reliable and timely execution',
    ],
    closingCTA: {
      title: 'Supporting Government Infrastructure with Excellence',
      description: 'Partner with DK Enterprise for dependable services that ensure smooth operations, safety, and efficiency across government facilities.',
      buttonText: 'Contact us today to discuss your requirements.',
    }
  },
  {
    slug: 'commercial',
    title: 'Commercial Sector Solutions',
    kicker: 'Your Reliable Partner for Commercial Operations',
    description: 'Integrated Services for Modern Commercial Spaces. Commercial environments demand efficiency, cleanliness, and seamless operations to maintain productivity and a professional image. At DK Enterprise, we provide comprehensive solutions tailored for offices, corporate buildings, retail spaces, and business hubs. Our services include integrated facility management, security services, and environmental support, all designed to keep your workspace organized, safe, and fully functional.\n\nWe understand that a well-maintained environment directly impacts employee performance and customer experience. Our trained team and structured processes ensure consistent service delivery, minimal downtime, and a high standard of hygiene and safety. From daily operations to preventive maintenance, we manage every aspect of your facility with precision and care.',
    image: '/assets/images/generated/sector_commercial_hero_v2_unique.png',
    thumbnailImage: '/assets/images/generated/sector_commercial_indian.png',
    icon: Building2,
    heroDescription:
      'Efficient, reliable, and scalable services designed to support modern businesses and commercial spaces. DK Enterprise ensures smooth day-to-day operations so you can focus on growth and productivity.',
    stats: [
      { label: 'Commercial & Corporate Spaces Managed', value: 200, suffix: '+' },
      { label: 'Government & Institutional Projects', value: 50, suffix: '+' },
      { label: 'Compliance-Focused Operations', value: 100, suffix: '%' },
      { label: 'Client Satisfaction Rate', value: 90, suffix: '%' },
    ],
    features: [
      {
        title: 'Integrated Facility Management for Commercial Spaces',
        description:
          'We provide end-to-end facility management services to maintain clean, organized, and efficient workplaces. Our solutions ensure that your office or commercial property operates smoothly without interruptions.\n\nFrom housekeeping and technical maintenance to support staff services, we handle all operational needs so your team can focus on business activities.',
        image: '/assets/images/generated/sector_commercial_ifm_unique.png',
        bullets: ['Housekeeping', 'Technical maintenance', 'Support staff'],
        cta: 'Explore Facility Management',
      },
      {
        title: 'Security Services for Commercial Spaces',
        description:
          'Protect your business assets, employees, and visitors with our professional security services. We provide reliable guarding and monitoring solutions to ensure a safe and controlled work environment.\n\nOur services include access control, visitor management, and surveillance support to prevent risks and maintain security at all times.',
        image: '/assets/images/generated/sector_commercial_security_unique.png',
        bullets: ['Access control', 'Visitor management', 'Surveillance'],
        cta: 'View Security Services',
      },
      {
        title: 'Environmental Support for Commercial Spaces',
        description:
          'A clean and sustainable workspace enhances productivity and creates a positive impression. Our environmental support services focus on waste management, hygiene, and eco-friendly practices.\n\nWe ensure proper waste disposal, recycling, and cleanliness standards to maintain a professional and environmentally responsible workplace.',
        image: '/assets/images/generated/sector_commercial_environmental_unique.png',
        bullets: ['Waste disposal', 'Recycling', 'Workplace hygiene'],
        cta: 'Discover Environmental Services',
      },
    ],
    advantages: [
      'Customized solutions for commercial spaces',
      'Trained and professional workforce',
      'Focus on efficiency and minimal downtime',
      'High standards of hygiene and safety',
      'Reliable and timely service delivery',
    ],
    closingCTA: {
      title: 'Enhance Your Workplace Efficiency',
      description: 'Partner with DK Enterprise for commercial sector solutions that ensure smooth operations, safety, and productivity.',
      buttonText: 'Contact us today to get started.',
    }
  },
  {
    slug: 'hotel-hospitality',
    title: 'Hotel & Hospitality Sector Solutions',
    kicker: 'Enhancing Hospitality Experience with Reliable Services',
    description: 'Complete Facility & Support Services for Hospitality Excellence. In the hospitality industry, guest experience is directly influenced by cleanliness, safety, and service quality. At DK Enterprise, we provide integrated solutions designed specifically for hotels, resorts, and hospitality properties. Our services include integrated facility management, security services, and environmental support to ensure smooth operations and high standards across all areas.\n\nWe understand the importance of maintaining a welcoming and well-managed environment. From guest rooms and lobbies to back-end operations, our trained team ensures every space is clean, organized, and efficiently maintained. With a strong focus on hygiene, attention to detail, and timely service, we help hospitality businesses deliver a seamless and premium experience to their guests.',
    image: '/assets/images/generated/sector_hospitality_hero_v2_unique.png',
    thumbnailImage: '/assets/images/generated/sector_hospitality_indian.png',
    icon: Hotel,
    heroDescription:
      'Delivering clean, safe, and well-managed environments that enhance guest experience and operational efficiency. DK Enterprise supports hotels, resorts, and hospitality businesses with reliable and professional services.',
    stats: [
      { label: 'Hospitality Properties Served', value: 30, suffix: '+' },
      { label: 'Commercial & Corporate Spaces Managed', value: 200, suffix: '+' },
      { label: 'Compliance-Focused Operations', value: 100, suffix: '%' },
      { label: 'Client Satisfaction Rate', value: 90, suffix: '%' },
    ],
    features: [
      {
        title: 'Integrated Facility Management for Hospitality',
        description:
          'We provide comprehensive facility management services to maintain high standards of cleanliness and operational efficiency across hospitality properties. Our solutions ensure that every area—from guest rooms to common spaces—is well-maintained and presentable.\n\nOur team manages housekeeping, technical maintenance, and support services to ensure smooth operations and consistent service quality.',
        image: '/assets/images/generated/sector_hospitality_ifm_unique.png',
        bullets: ['Housekeeping', 'Technical maintenance', 'Lobby care'],
        cta: 'Explore Facility Management',
      },
      {
        title: 'Security Services for Hospitality',
        description:
          'Ensuring guest safety is a top priority in the hospitality sector. We provide professional security services that maintain a safe and secure environment without disturbing the guest experience.\n\nOur trained personnel manage entry points, monitor activities, and handle crowd control during events, ensuring safety and smooth operations at all times.',
        image: '/assets/images/generated/sector_hospitality_security_unique.png',
        bullets: ['Entry monitoring', 'Crowd control', 'Guest safety'],
        cta: 'View Security Services',
      },
      {
        title: 'Environmental Support for Hospitality',
        description:
          'Cleanliness and sustainability play a vital role in modern hospitality. Our environmental support services help maintain hygiene while adopting eco-friendly practices.\n\nWe manage waste disposal, sanitation, and cleanliness processes to ensure a healthy and pleasant environment for guests and staff.',
        image: '/assets/images/generated/sector_hospitality_environmental_unique.png',
        bullets: ['Waste disposal', 'Sanitation', 'Eco-friendly practices'],
        cta: 'Discover Environmental Services',
      },
    ],
    advantages: [
      'Focus on hygiene and guest experience',
      'Trained and professional staff',
      'Attention to detail and timely execution',
      'Customized solutions for hospitality industry',
      'Reliable and efficient service delivery',
    ],
    closingCTA: {
      title: 'Create Exceptional Guest Experiences',
      description: 'Partner with DK Enterprise to ensure your hospitality operations run smoothly while delivering a clean, safe, and premium environment.',
      buttonText: 'Contact us today to learn more.',
    }
  },
  {
    slug: 'health-care',
    title: 'Healthcare Sector Solutions',
    kicker: 'Reliable Partner for Healthcare Operations',
    description: 'Specialized Facility & Support Services for Healthcare Environments. Healthcare facilities require the highest level of hygiene, safety, and compliance to ensure patient well-being and smooth operations. At DK Enterprise, we provide comprehensive solutions tailored specifically for hospitals, clinics, and medical institutions. Our services include integrated facility management, security services, and environmental support, all designed to meet strict healthcare standards.\n\nWe understand the sensitivity of healthcare environments and the importance of maintaining infection control, proper waste management, and uninterrupted operations. Our trained workforce follows industry protocols and best practices to ensure a clean, safe, and well-managed environment for patients, medical staff, and visitors. With a focus on precision, compliance, and reliability, we support healthcare facilities in delivering quality care without operational challenges.',
    image: '/assets/images/generated/sector_healthcare_hero_v2_unique.png',
    thumbnailImage: '/assets/images/generated/sector_healthcare_indian.png',
    icon: HeartPulse,
    heroDescription:
      'Safe, hygienic, and compliant services designed for hospitals, clinics, and healthcare facilities. DK Enterprise ensures high standards of cleanliness, safety, and operational efficiency in critical environments.',
    stats: [
      { label: 'Healthcare Facilities Supported', value: 25, suffix: '+' },
      { label: 'Government & Institutional Projects', value: 50, suffix: '+' },
      { label: 'Compliance-Focused Operations', value: 100, suffix: '%' },
      { label: 'Client Satisfaction Rate', value: 90, suffix: '%' },
    ],
    features: [
      {
        title: 'Integrated Facility Management for Healthcare',
        description:
          'We provide specialized facility management services to maintain hygiene, infrastructure, and daily operations within healthcare facilities. Our solutions are designed to meet strict medical standards and ensure a safe environment.\n\nFrom housekeeping and technical maintenance to support staff services, we ensure that all areas are clean, functional, and well-maintained at all times.',
        image: '/assets/images/generated/sector_healthcare_ifm_unique.png',
        bullets: ['Housekeeping', 'Technical maintenance', 'Support staff'],
        cta: 'Explore Facility Management',
      },
      {
        title: 'Security Services for Healthcare',
        description:
          'Healthcare facilities require well-managed security to ensure patient safety and smooth operations. We provide professional security services that focus on controlled access, visitor management, and emergency handling.\n\nOur trained personnel ensure that sensitive areas are protected and that operations run without disruptions.',
        image: '/assets/images/generated/sector_healthcare_security_unique.png',
        bullets: ['Controlled access', 'Visitor management', 'Emergency handling'],
        cta: 'View Security Services',
      },
      {
        title: 'Environmental Support for Healthcare',
        description:
          'Maintaining a hygienic and compliant environment is critical in healthcare. Our environmental support services focus on sanitization, biomedical waste management, and infection control.\n\nWe follow strict protocols to ensure safe handling and disposal of medical waste, helping healthcare facilities maintain compliance and safety standards.',
        image: '/assets/images/generated/sector_healthcare_environmental_unique.png',
        bullets: ['Sanitization', 'Biomedical waste management', 'Infection control'],
        cta: 'Discover Environmental Services',
      },
    ],
    advantages: [
      'Strict adherence to healthcare standards',
      'Trained and skilled workforce',
      'Focus on infection control and safety',
      'Reliable and consistent service delivery',
      'Customized solutions for healthcare facilities',
    ],
    closingCTA: {
      title: 'Supporting Safe and Efficient Healthcare Environments',
      description: 'Partner with DK Enterprise for healthcare sector solutions that ensure hygiene, compliance, and smooth operations.',
      buttonText: 'Contact us today to get started.',
    }
  },
];
