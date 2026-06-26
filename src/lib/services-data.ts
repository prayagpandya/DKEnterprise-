import {
  Building,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Settings,
} from 'lucide-react';

import type { Service } from '@/lib/types';

export const services: Service[] = [
  {
    slug: 'integrated-facility-management',
    title: 'Integrated Facility Management',
    kicker: 'Integrated Facility Management Services',
    description: 'Smart Facility Management for Seamless Operations. Integrated Facility Management (IFM) is more than just maintenance—it is about creating a well-managed, efficient, and productive environment for your business. At DK Enterprise, we offer complete facility management solutions that cover everything from daily housekeeping and technical maintenance to security and environmental support. Our approach focuses on delivering consistent quality, reducing operational challenges, and improving overall efficiency.\n\nWe understand that every facility has unique requirements. Whether it is a government building, commercial space, hospital, or hospitality property, our team ensures smooth day-to-day operations with a strong focus on safety, hygiene, and compliance. With our structured processes and trained professionals, we help businesses maintain their infrastructure while allowing them to focus on their core activities.',
    image: '/assets/images/generated/service_ifm_indian.png',
    thumbnailImage: '/assets/images/generated/service_ifm_indian.png',
    icon: Wrench,
    heroDescription:
      'Comprehensive, reliable, and efficient facility management solutions designed to keep your operations running smoothly. At DK Enterprise, we provide end-to-end integrated facility management services that combine skilled manpower, advanced processes, and industry expertise to maintain clean, safe, and fully functional environments across all types of facilities.',
    stats: [
      { label: 'Industry Experience', value: 10, suffix: '+ Years' },
      { label: 'Sites Managed', value: 100, suffix: '+' },
      { label: 'Trained Workforce', value: 500, suffix: '+' },
      { label: 'Client Retention', value: 95, suffix: '%' },
    ],
    included: [
      'Experienced and professional team',
      'Customized service solutions',
      'Focus on quality and compliance',
      'Timely execution and support',
      'Cost-effective operations',
    ],
    sections: [
      {
        title: 'Government Facilities Management',
        description:
          'Managing government facilities requires strict compliance, discipline, and consistent service delivery. At DK Enterprise, we provide structured and reliable facility management services tailored for public infrastructure. Our team ensures that government buildings, offices, and public spaces remain clean, safe, and efficiently maintained at all times.',
        image: '/assets/images/service_ifm_gov.png',
      },
      {
        title: 'Commercial Facility Management',
        description:
          'A well-maintained workplace directly impacts productivity and employee satisfaction. Our commercial facility management services are designed to create clean, organized, and efficient office environments. We take care of daily operations, maintenance, and support services so businesses can focus on growth.',
        image: '/assets/images/service_ifm_com.png',
      },
      {
        title: 'Hotel & Hospitality Facility Management',
        description:
          'In the hospitality industry, cleanliness and service quality directly impact guest experience. We provide specialized facility management solutions for hotels, resorts, and hospitality businesses to maintain high standards of hygiene, comfort, and operational efficiency.',
        image: '/assets/images/service_ifm_hos.png',
      },
      {
        title: 'Healthcare Facility Management',
        description:
          'Healthcare facilities require the highest level of hygiene, safety, and compliance. Our specialized facility management services for hospitals and clinics are designed to meet strict healthcare standards. We ensure proper sanitization, waste handling, and maintenance of critical infrastructure.',
        image: '/assets/images/service_ifm_hea.png',
      },
    ],
    keyFeatures: [
      { title: 'Experienced Team', description: 'Trained professionals for diverse facility needs.', icon: Users },
      { title: 'Compliance Focus', description: 'Strict adherence to regulatory and safety standards.', icon: ShieldCheck },
      { title: 'Customized Solutions', description: 'Tailored services for unique facility requirements.', icon: Settings },
      { title: 'Cost Effective', description: 'Optimized operations for better value and efficiency.', icon: Sparkles },
    ],
  },
  {
    slug: 'security-services',
    title: 'Security Services',
    kicker: 'Professional Security Services',
    description: 'Trusted Security Solutions for Complete Protection. Security is a critical part of every organization, and having the right system in place ensures safety, control, and peace of mind. At DK Enterprise, we provide professional security services tailored to meet the needs of different sectors, including government, commercial, hospitality, and healthcare. Our approach combines trained security personnel, advanced monitoring practices, and structured protocols to deliver reliable protection.\n\nWe understand that every facility has unique security requirements. From managing access control and monitoring premises to handling emergencies and ensuring round-the-clock surveillance, our team is equipped to handle all aspects of security operations. With a focus on prevention, quick response, and continuous monitoring, we help businesses and institutions operate in a safe and secure environment.',
    image: '/assets/images/generated/service_security_indian.png',
    thumbnailImage: '/assets/images/generated/service_security_indian.png',
    icon: ShieldCheck,
    heroDescription:
      'Reliable, trained, and responsive security solutions designed to protect your people, property, and operations. At DK Enterprise, we deliver end-to-end security services with a strong focus on safety, discipline, and real-time monitoring.',
    stats: [
      { label: 'Industry Experience', value: 10, suffix: '+ Years' },
      { label: 'Sites Managed', value: 100, suffix: '+' },
      { label: 'Trained Workforce', value: 500, suffix: '+' },
      { label: 'Operational Support', value: 24, suffix: '/7' },
    ],
    included: [
      'Trained and verified security personnel',
      '24/7 monitoring and quick response',
      'Customized security solutions',
      'Strong focus on safety and discipline',
      'Reliable and professional service delivery',
    ],
    sections: [
      {
        title: 'Government Security Services',
        description:
          'Government facilities require disciplined and highly structured security systems to ensure public safety and asset protection. We provide professional security services tailored for government buildings, offices, and public infrastructure with a strong focus on compliance and control.',
        image: '/assets/images/service_sec_gov.png',
      },
      {
        title: 'Commercial Security Services',
        description:
          'Protect your workplace, employees, and assets with our comprehensive commercial security solutions. We provide reliable guarding and monitoring services designed to ensure smooth and secure day-to-day operations for offices, corporate buildings, and business spaces.',
        image: '/assets/images/service_sec_com.png',
      },
      {
        title: 'Hotel & Hospitality Security',
        description:
          'In the hospitality industry, security plays a key role in delivering a safe and comfortable guest experience. We provide specialized security services for hotels, resorts, and hospitality properties, ensuring both guest safety and smooth operations.',
        image: '/assets/images/service_sec_hos.png',
      },
      {
        title: 'Healthcare Security Services',
        description:
          'Healthcare facilities require sensitive and well-managed security systems to ensure patient safety and smooth operations. We provide specialized security services for hospitals and clinics with a focus on control, safety, and emergency readiness.',
        image: '/assets/images/service_sec_health.png',
      },
    ],
    keyFeatures: [
      { title: 'Trained Personnel', description: 'Professionally trained and verified security staff.', icon: Users },
      { title: '24/7 Monitoring', description: 'Continuous surveillance and real-time response.', icon: ShieldCheck },
      { title: 'Access Control', description: 'Managed entry and visitor tracking protocols.', icon: ClipboardCheck },
      { title: 'Risk Management', description: 'Proactive identification and mitigation of threats.', icon: Building },
    ],
  },
  {
    slug: 'environmental-support',
    title: 'Environmental Support',
    kicker: 'Environmental Support Services',
    description: 'Sustainable Environmental Solutions for Cleaner Operations. Environmental support is an essential part of modern facility management, ensuring that workplaces remain clean, safe, and compliant with regulatory standards. At DK Enterprise, we offer comprehensive environmental support services that cover waste management, sanitation, and sustainable practices across various sectors including government, commercial, hospitality, and healthcare.\n\nOur approach focuses on responsible waste handling, efficient cleaning systems, and environmentally conscious processes. We help organizations reduce their environmental impact while maintaining high standards of hygiene and operational efficiency. With trained staff, structured workflows, and compliance-driven execution, we ensure that your facility operates in a clean and sustainable environment.',
    image: '/assets/images/generated/service_environmental_indian.png',
    thumbnailImage: '/assets/images/generated/service_environmental_indian.png',
    icon: Leaf,
    heroDescription:
      'Efficient, compliant, and eco-friendly solutions designed to maintain hygiene, safety, and sustainability across your facility. At DK Enterprise, we provide complete environmental support services that help organizations manage waste, maintain cleanliness, and meet environmental standards with ease.',
    stats: [
      { label: 'Industry Experience', value: 10, suffix: '+ Years' },
      { label: 'Sites Managed', value: 100, suffix: '+' },
      { label: 'Trained Workforce', value: 500, suffix: '+' },
      { label: 'Client Retention', value: 95, suffix: '%' },
    ],
    included: [
      'Eco-friendly and sustainable practices',
      'Compliance with environmental standards',
      'Trained and professional workforce',
      'Efficient waste management systems',
      'Consistent service quality',
    ],
    sections: [
      {
        title: 'Government Environmental Services',
        description:
          'We provide structured environmental support services for government facilities and public infrastructure, ensuring proper sanitation and waste management. Our solutions are designed to handle large-scale operations while maintaining compliance with environmental regulations.',
        image: '/assets/images/gov_env.png',
      },
      {
        title: 'Commercial Environmental Services',
        description:
          'A clean and organized workplace contributes to better productivity and employee well-being. Our commercial environmental services focus on maintaining hygienic office spaces with efficient waste management and sustainable practices.',
        image: '/assets/images/comm_env.png',
      },
      {
        title: 'Hotel & Hospitality Environmental Services',
        description:
          'In hospitality, maintaining cleanliness and hygiene is essential for guest satisfaction. We provide specialized environmental support services that help hotels and hospitality businesses maintain high standards while adopting eco-friendly practices.',
        image: '/assets/images/hotel_env.png',
      },
      {
        title: 'Healthcare Environmental Services',
        description:
          'Healthcare facilities require strict environmental control and hygiene standards. We offer specialized environmental support services for hospitals and clinics, focusing on safe waste handling, sanitization, and compliance.',
        image: '/assets/images/health_env.png',
      },
    ],
    keyFeatures: [
      { title: 'Eco-Friendly', description: 'Sustainable practices and green cleaning products.', icon: Leaf },
      { title: 'Compliance', description: 'Adherence to environmental and health regulations.', icon: ShieldCheck },
      { title: 'Waste Management', description: 'Efficient segregation and disposal systems.', icon: Globe2 },
      { title: 'Quality Hygiene', description: 'High standards of sanitization and cleanliness.', icon: Sparkles },
    ],
  },
];
