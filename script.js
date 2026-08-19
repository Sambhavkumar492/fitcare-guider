
/* ============================================
   FitCare Guide - Main JavaScript
   ============================================ */

'use strict';

// ============================================
// DATA
// ============================================

const doctorsData = [
    {
        name: 'Dr J M Dua',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-02/dr-j-m-dua_0.jpg',
        qualification: 'MD, MBBS',
        specialization: 'General Physician',
        experience: '52 years',
        hospital: 'Indraprastha Apollo Hospitals',
        address: 'Sarita Vihar, Delhi Mathura Road, New Delhi – 110076',
        fee: '3000',
        days: 'Mon - Sat',
        hours: '10:00 AM - 6:30 PM',
        phone: '+91 8062784054',
        about: 'Dr J M Dua is a highly experienced general physician dedicated to providing comprehensive primary care with a focus on preventive medicine and patient education.'
    },
    {
        name: 'Dr. N Sastri',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-03/dr-n-sastri.jpg',
        qualification: 'MD, MS (Cardiology)',
        specialization: 'Cardiologist',
        experience: '47 years',
        hospital: 'Indraprastha Apollo Hospitals',
        address: 'Sarita Vihar, Delhi Mathura Road, New Delhi – 110076',
        fee: '2500',
        days: 'Mon - Fri',
        hours: '11:00 AM - 3:00 PM',
        phone: '+91 8069049768',
        about: 'Dr. N Sastri is a renowned cardiologist specializing in interventional cardiology, heart failure management, and preventive cardiovascular care.'
    },
    {
        name: 'Dr Surendra VHH',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-03/dr-surendra-vhh.jpg',
        qualification: 'MD, DVD',
        specialization: 'Dermatologist',
        experience: '40 years',
        hospital: 'Apollo Hospitals, Bannerghatta Road',
        address: ' IIM, 154/11, Bannerghatta Rd, opposite Krishnaraju Layout, Krishnaraju Layout, Amalodbhavi Naga, Panduranga Nagar, Bengaluru, Karnataka 560076',
        fee: '1000',
        days: 'Mon - Sat',
        hours: '10:00 AM - 7:00 PM',
        phone: '+ 91 8062784054',
        about: 'Dr Surendra VHH is a board-certified dermatologist with expertise in medical, surgical, and cosmetic dermatology for all skin types.'
    },
    {
        name: 'Dr Jairam Chandra Pingle',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-02/dr.-jairam-chandra-pingle.jpg',
        qualification: 'MBBS, MS (Ortho)',
        specialization: 'Orthopedics',
        experience: '50 years',
        hospital: 'Apollo Hospitals, Hyderabad',
        address: 'Road No. 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
        fee: '1500',
        days: 'Mon - Sat',
        hours: '9:30 AM - 12:30 PM',
        phone: '+91 4023607777',
        about: 'Dr Jairam Chandra Pingle specializes in joint replacement surgery, sports medicine, and minimally invasive orthopedic procedures.'
    },
    {
        name: 'Dr Subhashini Prabhakar',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-02/dr-subhashini-prabhakar.jpg',
        qualification: 'MD, MBBS (Neurology)',
        specialization: 'Neurologist',
        experience: '46 years',
        hospital: 'Apollo Hospitals, Hyderabad',
        address: 'Road No. 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Jubilee Hills, Hyderabad, Telangana 500033',
        fee: '1500',
        days: 'Mon - Sat',
        hours: '11:30 AM - 1:45 PM',
        phone: '+91 80 6297 0198',
        about: 'Dr Subhashini Prabhakar is a neurologist specializing in headache disorders, stroke management, epilepsy, and neurodegenerative diseases.'
    },
    {
        name: 'Dr R N Srivastava',
        photo: 'https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-02/dr-r-n-srivastava.jpg',
        qualification: 'MD, DCH',
        specialization: 'Pediatrician',
        experience: '50 years',
        hospital: 'Indraprastha Apollo Hospitals',
        address: 'Sarita Vihar, Delhi Mathura Road, New Delhi – 110076',
        fee: '2500',
        days: 'Wed - Sat',
        hours: '10:00 AM - 12:00 PM',
        phone: '+91 8929723773',
        about: 'Dr R N Srivastava is a compassionate pediatrician dedicated to the health and wellbeing of children from infancy through adolescence.'
    }
];

const specialitiesData = [
    { name: 'General Physician', icon: 'fa-user-md', link: 'https://imsanz.org.au/Web/Web/About-Us/What-is-a-General-Physician.aspx' },
    { name: 'Cardiologist', icon: 'fa-heart', link: 'https://en.wikipedia.org/wiki/Cardiology' },
    { name: 'Dermatologist', icon: 'fa-hand', link: 'https://en.wikipedia.org/wiki/Dermatology' },
    { name: 'Orthopedic', icon: 'fa-bone', link: 'https://en.wikipedia.org/wiki/Category:Orthopedics' },
    { name: 'Neurologist', icon: 'fa-brain', link: 'https://en.wikipedia.org/wiki/Neurology' },
    { name: 'Psychiatrist', icon: 'fa-smile', link: 'https://en.wikipedia.org/wiki/Psychiatrist' },
    { name: 'Psychologist', icon: 'fa-comments', link: 'https://en.wikipedia.org/wiki/Psychologist' },
    { name: 'Dentist', icon: 'fa-tooth', link: 'https://en.wikipedia.org/wiki/Dentist' },
    { name: 'ENT', icon: 'fa-ear', link: 'https://en.wikipedia.org/wiki/Ent' },
    { name: 'Eye Specialist', icon: 'fa-eye', link: 'https://en.wikipedia.org/wiki/Eye_care_professional' },
    { name: 'Pediatrician', icon: 'fa-baby', link: 'https://en.wikipedia.org/wiki/Pediatrics' },
    { name: 'Gynecologist', icon: 'fa-venus', link: 'https://en.wikipedia.org/wiki/Gynaecology' },
    { name: 'Physiotherapist', icon: 'fa-walking', link: 'https://simple.wikipedia.org/wiki/Physiotherapy' },
    { name: 'Dietitian', icon: 'fa-apple-alt', link: 'https://en.wikipedia.org/wiki/Dietitian' },
    { name: 'Nutritionist', icon: 'fa-carrot', link: 'https://en.wikipedia.org/wiki/Nutritionist' },
    { name: 'Endocrinologist', icon: 'fa-dna', link: 'https://en.wikipedia.org/wiki/Endocrinology' },
    { name: 'Pulmonologist', icon: 'fa-lungs', link: 'https://en.wikipedia.org/wiki/Pulmonology' },
    { name: 'Nephrologist', icon: 'fa-kidney', link: 'https://en.wikipedia.org/wiki/Nephrology' },
    { name: 'Oncologist', icon: 'fa-ribbon', link: 'https://en.wikipedia.org/wiki/Oncology' },
    { name: 'Urologist', icon: 'fa-bladder', link: 'https://en.wikipedia.org/wiki/Urology' }
];

const fitnessData = [
    { name: 'Weight Loss', icon: 'fa-weight', desc: 'Effective strategies and workouts for healthy weight loss.', link: 'https://en.wikipedia.org/wiki/Weight_loss' },
    { name: 'Weight Gain', icon: 'fa-arrow-up', desc: 'Safe and sustainable weight gain programs.', link: 'https://en.wikipedia.org/wiki/Weight_gain' },
    { name: 'Muscle Building', icon: 'fa-dumbbell', desc: 'Strength training routines for muscle growth.', link: 'https://en.wikipedia.org/wiki/Muscle_hypertrophy' },
    { name: 'Home Workout', icon: 'fa-home', desc: 'No-equipment workouts you can do at home.', link: 'https://www.healthline.com/health/fitness-exercise/at-home-workouts' },
    { name: 'Gym Workout', icon: 'fa-building', desc: 'Comprehensive gym workout plans.', link: 'https://en.wikipedia.org/wiki/Gym' },
    { name: 'HIIT', icon: 'fa-bolt', desc: 'High-intensity interval training for maximum results.', link: 'https://en.wikipedia.org/wiki/High-intensity_interval_training' },
    { name: 'Yoga', icon: 'fa-spa', desc: 'Yoga poses and sequences for mind-body wellness.', link: 'https://en.wikipedia.org/wiki/Yoga' },
    { name: 'Stretching', icon: 'fa-arrows-alt', desc: 'Flexibility and stretching routines.', link: 'https://en.wikipedia.org/wiki/Stretching' },
    { name: 'Cardio', icon: 'fa-heartbeat', desc: 'Cardiovascular exercises for heart health.', link: 'https://en.wikipedia.org/wiki/Cardio' },
    { name: 'Running', icon: 'fa-running', desc: 'Running plans for beginners to advanced.', link: 'https://en.wikipedia.org/wiki/Running' },
    { name: 'Walking', icon: 'fa-shoe-prints', desc: 'Walking programs for all fitness levels.', link: 'https://en.wikipedia.org/wiki/Walking' }
];

const nutritionData = [
    { name: 'Healthy Foods', icon: 'fa-leaf', desc: 'Nutrient-rich foods for optimal health.', link: 'https://en.wikipedia.org/wiki/Healthy_diet' },
    { name: 'Protein Foods', icon: 'fa-drumstick-bite', desc: 'High-protein foods for muscle and repair.', link: 'https://en.wikipedia.org/wiki/High-protein_diet' },
    { name: 'Vegetarian Diet', icon: 'fa-seedling', desc: 'Plant-based nutrition for vegetarians.', link: 'https://en.wikipedia.org/wiki/Vegetarian_nutrition' },
    { name: 'Weight Loss Diet', icon: 'fa-fire', desc: 'Meal plans for healthy weight management.', link: 'https://en.wikipedia.org/wiki/Dieting' },
    { name: 'Weight Gain Diet', icon: 'fa-arrow-up', desc: 'Calorie-dense foods for healthy weight gain.', link: 'https://en.wikipedia.org/wiki/Weight_gain' },
    { name: 'Healthy Breakfast', icon: 'fa-sun', desc: 'Nutritious breakfast ideas to start your day.', link: 'https://en.wikipedia.org/wiki/Breakfast' },
    { name: 'Healthy Lunch', icon: 'fa-cloud-sun', desc: 'Balanced lunch options for sustained energy.', link: 'https://en.wikipedia.org/wiki/Lunch' },
    { name: 'Healthy Dinner', icon: 'fa-moon', desc: 'Light and nutritious dinner recipes.', link: 'https://en.wikipedia.org/wiki/Healthy_Dining' },
    { name: 'Healthy Snacks', icon: 'fa-cookie', desc: 'Smart snacking options for between meals.', link: 'https://en.wikipedia.org/wiki/Snack' },
    { name: 'Hydration', icon: 'fa-tint', desc: 'Importance of hydration and tips to drink more water.', link: 'https://en.wikipedia.org/wiki/Hydration' }
];

const libraryData = [
    { category: 'Diabetes', title: 'Understanding Diabetes: Types, Symptoms & Management', desc: 'Comprehensive guide to diabetes including type 1, type 2, and gestational diabetes management.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop', link: 'http://my.clevelandclinic.org/health/diseases/7104-diabetes' },
    { category: 'Heart Disease', title: 'Heart Disease Prevention: A Complete Guide', desc: 'Learn about risk factors, prevention strategies, and lifestyle changes for heart health.', image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&h=250&fit=crop', link: 'https://www.mayoclinic.org/diseases-conditions/heart-disease/in-depth/heart-disease-prevention/art-20046502' },
    { category: 'Blood Pressure', title: 'Managing Blood Pressure Naturally', desc: 'Effective lifestyle modifications and dietary changes to control hypertension.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop', link: 'https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/in-depth/high-blood-pressure/art-20046974' },
    { category: 'Mental Health', title: 'Mental Health Awareness: Breaking the Stigma', desc: 'Understanding mental health conditions and the importance of seeking help.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop', link: 'https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/mental-health/art-20046477' },
    { category: 'Obesity', title: 'Obesity: Causes, Risks & Healthy Weight Management', desc: 'Evidence-based approaches to understanding and managing obesity.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop', link: 'https://baker.edu.au/health-hub/health-explainers/obesity' },
    { category: 'Asthma', title: 'Asthma Management: Living Well with Asthma', desc: 'Tips for managing asthma symptoms and preventing attacks.', image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&h=250&fit=crop', link: 'https://www.who.int/news-room/feature-stories/detail/dont-let-asthma-hold-you-back-5-ways-to-make-sure-that-you-are-in-control-of-your-asthma' },
    { category: 'Cancer Awareness', title: 'Cancer Awareness: Early Detection Saves Lives', desc: 'Understanding common cancers, screening guidelines, and prevention tips.', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=250&fit=crop', link: 'https://www.skincancer.org/early-detection/' },
    { category: 'Sleep', title: 'Sleep Hygiene: How to Get Better Sleep', desc: 'Practical tips for improving sleep quality and establishing healthy sleep patterns.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop', link: 'https://www.thebridgelab.org/mental-wellness-resources/sleep' },
    { category: 'Stress', title: 'Stress Management: Techniques for a Calmer Life', desc: 'Effective stress reduction techniques including mindfulness and relaxation.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop', link: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368' }
];

const blogData = [
    {
        title: '10 Superfoods You Should Include in Your Daily Diet',
        desc: 'Discover nutrient-packed superfoods that can boost your immune system and improve overall health.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop',
        date: 'Jan 15, 2026',
        author: 'FitCare Team',
        link: 'https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463'
    },
    {
        title: 'The Ultimate Guide to Starting a Home Workout Routine',
        desc: 'Everything you need to know to start exercising at home with minimal equipment.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
        date: 'Jan 12, 2026',
        author: 'FitCare Team',
        link: 'https://www.lukecoutinho.com/blogs/fitness-routines-at-home/'
    },
    {
        title: 'Understanding Your Cholesterol Levels: A Patient Guide',
        desc: 'Learn what cholesterol numbers mean and how to maintain healthy levels through diet and lifestyle.',
        image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=400&h=250&fit=crop',
        date: 'Jan 10, 2026',
        author: 'FitCare Team',
        link: 'https://my.clevelandclinic.org/health/articles/11920-cholesterol-numbers-what-do-they-mean'
    },
    {
        title: '5 Simple Yoga Poses for Beginners to Reduce Stress',
        desc: 'Easy yoga poses that can help you relax, reduce anxiety, and improve flexibility.',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
        date: 'Jan 8, 2026',
        author: 'FitCare Team',
        link: 'https://www.yoglove.in/post/5-yoga-practices-for-beginners'
    },
    {
        title: 'The Importance of Hydration: How Much Water Should You Drink?',
        desc: 'Understanding your body\'s hydration needs and tips for drinking more water throughout the day.',
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=250&fit=crop',
        date: 'Jan 5, 2026',
        author: 'FitCare Team',
        link: 'https://www.health.harvard.edu/staying-healthy/how-much-water-should-you-drink'
    },
    {
        title: 'Managing Diabetes Through Diet and Exercise',
        desc: 'Practical strategies for controlling blood sugar levels with proper nutrition and physical activity.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
        date: 'Jan 3, 2026',
        author: 'FitCare Team',
        link: 'https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/art-20047963'
    }
];

const faqData = [
    {
        question: 'Is the medical information on this website reliable?',
        answer: 'Yes, our content is researched and reviewed for accuracy. However, it is for educational purposes only and should not replace professional medical advice. Always consult a qualified healthcare provider for personal medical concerns.'
    },
    {
        question: 'Can I book appointments with doctors through this website?',
        answer: 'No, we do not offer online appointment booking. We provide doctor information for your convenience. Please contact the clinic directly using the phone number listed on the doctor\'s profile to schedule an appointment.'
    },
    {
        question: 'Do you charge any fees for using this website?',
        answer: 'No, FitCare Guide is completely free to use. We do not charge any fees for accessing health information, using calculators, or viewing doctor directories. There are no hidden charges or subscription fees.'
    },
    {
        question: 'How often is the health information updated?',
        answer: 'We regularly review and update our content to ensure it reflects current medical guidelines and research. However, medical knowledge evolves rapidly, so always consult your healthcare provider for the most current advice.'
    },
    {
        question: 'Can I trust the doctor information provided?',
        answer: 'The doctor profiles are for demonstration purposes. We strive to provide accurate information, but we recommend verifying details by contacting the clinic directly before visiting. We do not guarantee the availability or accuracy of third-party information.'
    },
    {
        question: 'How can I use the health calculators?',
        answer: 'Simply enter your details in the calculator forms and click calculate. Our calculators provide estimates based on standard formulas. These are for informational purposes and should not be used as medical diagnoses.'
    },
    {
        question: 'Is my personal information safe on this website?',
        answer: 'We do not store any personal information. Our calculators run entirely in your browser, and no data is sent to any server. We respect your privacy and do not use tracking cookies for marketing purposes.'
    },
    {
        question: 'How can I contact the FitCare Guide team?',
        answer: 'You can reach us through the contact form on our website, or email us directly at info@fitcareguide.com. We welcome your questions, suggestions, and feedback.'
    }
];

// ============================================
// DOM ELEMENTS
// ============================================

const loader = document.getElementById('loader');
const backToTop = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchClose = document.getElementById('searchClose');
const heroSearchInput = document.getElementById('heroSearch');
const heroSearchBtn = document.getElementById('heroSearchBtn');
const doctorsGrid = document.getElementById('doctorsGrid');
const specialitiesGrid = document.getElementById('specialitiesGrid');
const fitnessGrid = document.getElementById('fitnessGrid');
const nutritionGrid = document.getElementById('nutritionGrid');
const libraryGrid = document.getElementById('libraryGrid');
const libraryCategories = document.getElementById('libraryCategories');
const blogGrid = document.getElementById('blogGrid');
const faqContainer = document.getElementById('faqContainer');
const newsletterForm = document.getElementById('newsletterForm');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');

// ============================================
// LOADER
// ============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 800);
});

// ============================================
// DARK MODE
// ============================================

function initDarkMode() {
    const savedTheme = localStorage.getItem('fitcare-theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (savedTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
}

function toggleDarkMode() {
    const hasDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (hasDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('fitcare-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('fitcare-theme', 'dark');
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// ============================================
// MOBILE MENU
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// SEARCH BAR
// ============================================

searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        setTimeout(() => searchInput.focus(), 100);
    }
});

searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
        searchInput.value = '';
    }
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            setTimeout(() => searchInput.focus(), 100);
        }
    }
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

// Search keyword synonyms mapping for intelligent search
const searchSynonyms = {
    'doctor': ['doctor', 'physician', 'medical', 'healthcare', 'specialist', 'clinic', 'md', 'mbbs'],
    'general physician': ['general physician', 'general doctor', 'primary care', 'family doctor', 'gp', 'physician'],
    'cardiologist': ['cardiologist', 'heart doctor', 'heart specialist', 'cardiology', 'heart', 'cardiac'],
    'dermatologist': ['dermatologist', 'skin doctor', 'skin specialist', 'dermatology', 'skin'],
    'dentist': ['dentist', 'dental', 'teeth', 'tooth', 'oral'],
    'physiotherapist': ['physiotherapist', 'physiotherapy', 'physical therapy', 'back pain', 'rehab', 'rehabilitation', 'physio'],
    'nutritionist': ['nutritionist', 'nutrition', 'diet', 'dietitian', 'dietician', 'healthy eating', 'meal plan', 'food'],
    'dietitian': ['dietitian', 'dietician', 'nutritionist', 'nutrition', 'diet', 'meal plan'],
    'fitness trainer': ['fitness trainer', 'personal trainer', 'trainer', 'fitness coach', 'workout coach'],
    'gym': ['gym', 'gymnasium', 'fitness center', 'workout', 'exercise', 'weight training', 'strength training'],
    'yoga': ['yoga', 'yogic', 'meditation', 'mindfulness', 'stretching'],
    'fitness': ['fitness', 'exercise', 'workout', 'training', 'gym', 'cardio', 'strength', 'weight training', 'hiit'],
    'weight training': ['weight training', 'weightlifting', 'strength training', 'muscle building', 'bodybuilding', 'gym'],
    'sports medicine': ['sports medicine', 'sports injury', 'sports doctor', 'athletic', 'orthopedic'],
    'orthopedic': ['orthopedic', 'orthopaedic', 'bone', 'joint', 'fracture', 'sports medicine'],
    'neurologist': ['neurologist', 'neurology', 'brain', 'nerve', 'headache', 'migraine', 'stroke'],
    'pediatrician': ['pediatrician', 'paediatrician', 'children doctor', 'child doctor', 'kids doctor', 'pediatrics'],
    'psychiatrist': ['psychiatrist', 'psychiatry', 'mental health', 'depression', 'anxiety'],
    'psychologist': ['psychologist', 'psychology', 'counseling', 'counselling', 'therapy', 'therapist'],
    'ent': ['ent', 'ear nose throat', 'ear', 'nose', 'throat', 'sinus'],
    'eye specialist': ['eye specialist', 'ophthalmologist', 'eye doctor', 'vision', 'eyesight'],
    'gynecologist': ['gynecologist', 'gynaecologist', 'women health', 'obstetrician', 'pregnancy'],
    'endocrinologist': ['endocrinologist', 'endocrinology', 'hormone', 'thyroid', 'diabetes'],
    'pulmonologist': ['pulmonologist', 'pulmonology', 'lung', 'respiratory', 'breathing', 'asthma'],
    'nephrologist': ['nephrologist', 'nephrology', 'kidney', 'renal'],
    'oncologist': ['oncologist', 'oncology', 'cancer', 'tumor', 'tumour'],
    'urologist': ['urologist', 'urology', 'urinary', 'bladder'],
    'weight loss': ['weight loss', 'lose weight', 'slimming', 'fat loss', 'diet'],
    'weight gain': ['weight gain', 'gain weight', 'bulking', 'mass gain'],
    'muscle building': ['muscle building', 'muscle gain', 'muscle growth', 'strength training', 'bodybuilding'],
    'home workout': ['home workout', 'home exercise', 'no equipment', 'at home'],
    'gym workout': ['gym workout', 'gym', 'workout plan', 'gym routine'],
    'hiit': ['hiit', 'high intensity', 'interval training', 'cardio'],
    'cardio': ['cardio', 'cardiovascular', 'aerobic', 'heart health', 'running', 'walking'],
    'running': ['running', 'jogging', 'sprint', 'marathon'],
    'walking': ['walking', 'walk', 'stroll', 'hiking'],
    'stretching': ['stretching', 'flexibility', 'mobility', 'warm up', 'cool down'],
    'healthy foods': ['healthy foods', 'healthy eating', 'nutritious', 'superfoods', 'balanced diet'],
    'protein': ['protein', 'high protein', 'protein foods', 'muscle repair'],
    'vegetarian': ['vegetarian', 'vegan', 'plant based', 'meatless'],
    'breakfast': ['breakfast', 'morning meal', 'brunch'],
    'lunch': ['lunch', 'midday meal', 'afternoon meal'],
    'dinner': ['dinner', 'evening meal', 'supper'],
    'snacks': ['snacks', 'snacking', 'appetizer', 'between meals'],
    'hydration': ['hydration', 'water intake', 'drink water', 'fluid'],
    'diabetes': ['diabetes', 'blood sugar', 'glucose', 'insulin', 'diabetic'],
    'heart disease': ['heart disease', 'heart health', 'cardiac', 'cardiovascular', 'heart attack'],
    'blood pressure': ['blood pressure', 'hypertension', 'high blood pressure', 'bp'],
    'mental health': ['mental health', 'mental wellness', 'psychological', 'emotional health'],
    'obesity': ['obesity', 'overweight', 'bmi', 'body mass index'],
    'asthma': ['asthma', 'breathing difficulty', 'wheezing', 'respiratory'],
    'cancer': ['cancer', 'oncology', 'tumor', 'tumour', 'malignancy'],
    'sleep': ['sleep', 'insomnia', 'rest', 'sleep hygiene'],
    'stress': ['stress', 'anxiety', 'relaxation', 'mindfulness', 'calm'],
    'cholesterol': ['cholesterol', 'lipid', 'fat levels', 'ldl', 'hdl'],
    'superfoods': ['superfoods', 'nutrient dense', 'antioxidants', 'healthy foods']
};

// Doctor location coordinates (approximate, for demo purposes - not real locations)
const doctorLocations = {
    'Dr J M Dua': { lat: 28.6139, lng: 77.2090 },   // New Delhi
    'Dr. Michael Chen': { lat: 40.7580, lng: -73.9855 },    // New York
    'Dr. Emily Rodriguez': { lat: 40.7061, lng: -74.0087 }, // New York
    'Dr. James Wilson': { lat: 40.7484, lng: -73.9857 },    // New York
    'Dr. Priya Sharma': { lat: 40.7549, lng: -73.9840 },    // New York
    'Dr. Robert Kim': { lat: 40.7614, lng: -73.9776 }       // New York
};

// Search results DOM elements
const searchResultsSection = document.getElementById('searchResultsSection');
const searchResultsTitle = document.getElementById('searchResultsTitle');
const searchResultsSubtitle = document.getElementById('searchResultsSubtitle');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const heroSearchSuggestions = document.getElementById('heroSearchSuggestions');
const searchSuggestions = document.getElementById('searchSuggestions');

// Build search index from all data
function buildSearchIndex() {
    const index = [];

    // Doctors
    doctorsData.forEach(doc => {
        index.push({
            type: 'Doctor',
            title: doc.name,
            subtitle: doc.specialization,
            desc: doc.about,
            section: 'doctors',
            icon: 'fa-user-md',
            link: '#doctors',
            data: doc,
            keywords: [doc.name, doc.specialization, doc.hospital, doc.qualification, doc.about].join(' ').toLowerCase()
        });
    });

    // Specialities
    specialitiesData.forEach(spec => {
        index.push({
            type: 'Speciality',
            title: spec.name,
            subtitle: 'Medical Speciality',
            desc: 'Explore this medical speciality and find the right expert for your needs.',
            section: 'specialities',
            icon: spec.icon,
            link: spec.link || '#specialities',
            data: spec,
            keywords: spec.name.toLowerCase()
        });
    });

    // Fitness
    fitnessData.forEach(item => {
        index.push({
            type: 'Fitness',
            title: item.name,
            subtitle: 'Fitness Guide',
            desc: item.desc,
            section: 'fitness',
            icon: item.icon,
            link: item.link || '#fitness',
            data: item,
            keywords: [item.name, item.desc].join(' ').toLowerCase()
        });
    });

    // Nutrition
    nutritionData.forEach(item => {
        index.push({
            type: 'Nutrition',
            title: item.name,
            subtitle: 'Nutrition Guide',
            desc: item.desc,
            section: 'nutrition',
            icon: item.icon,
            link: item.link || '#nutrition',
            data: item,
            keywords: [item.name, item.desc].join(' ').toLowerCase()
        });
    });

    // Library
    libraryData.forEach(item => {
        index.push({
            type: 'Health Article',
            title: item.title,
            subtitle: item.category,
            desc: item.desc,
            section: 'library',
            icon: 'fa-notes-medical',
            link: item.link || '#library',
            data: item,
            keywords: [item.title, item.category, item.desc].join(' ').toLowerCase()
        });
    });

    // Blog
    blogData.forEach(item => {
        index.push({
            type: 'Blog',
            title: item.title,
            subtitle: item.author,
            desc: item.desc,
            section: 'blog',
            icon: 'fa-blog',
            link: item.link || '#blog',
            data: item,
            keywords: [item.title, item.desc, item.author].join(' ').toLowerCase()
        });
    });

    return index;
}

const searchIndex = buildSearchIndex();

// Get related search terms based on synonyms
function getRelatedTerms(query) {
    const terms = new Set();
    const q = query.toLowerCase().trim();

    // Check if query matches any synonym group
    for (const [key, synonyms] of Object.entries(searchSynonyms)) {
        if (synonyms.some(syn => q.includes(syn) || syn.includes(q))) {
            terms.add(key);
            synonyms.forEach(s => terms.add(s));
        }
    }

    // Also add the query itself
    terms.add(q);

    return terms;
}

// Check if a result matches the search query
function matchesQuery(result, queryTerms) {
    const keywords = result.keywords;
    for (const term of queryTerms) {
        if (keywords.includes(term)) {
            return true;
        }
    }
    return false;
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Format distance for display
function formatDistance(km) {
    if (km < 1) {
        return Math.round(km * 1000) + ' m away';
    }
    return km.toFixed(1) + ' km away';
}

// Check if query is a "near me" search
function isNearMeSearch(query) {
    return /near\s*me|nearby|closest|nearest|around\s*me/i.test(query);
}

// Get user location for "near me" searches
function getUserLocation(callback) {
    if (!navigator.geolocation) {
        callback(null, 'Geolocation is not supported by this browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            callback({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }, null);
        },
        (error) => {
            callback(null, 'Location access was not granted. Please allow location access to find nearby services.');
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
}

// Render search results
function renderSearchResults(results, query, userLocation) {
    searchResultsSection.style.display = 'block';
    searchResultsTitle.textContent = 'Search Results for "' + query + '"';
    searchResultsSubtitle.textContent = results.length + ' result(s) found';

    if (results.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <h3>No results found</h3>
                <p>No results found. Try searching for doctors, fitness, gyms, nutrition, yoga or specialists.</p>
            </div>
        `;
        return;
    }

    // Sort by distance if user location is available
    if (userLocation) {
        results.forEach(result => {
            if (result.type === 'Doctor' && doctorLocations[result.title]) {
                const loc = doctorLocations[result.title];
                result.distance = calculateDistance(userLocation.lat, userLocation.lng, loc.lat, loc.lng);
            }
        });
        results.sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
    }

    searchResultsGrid.innerHTML = results.map(result => {
        const distanceHtml = result.distance !== undefined
            ? `<span class="search-result-distance"><i class="fas fa-map-marker-alt"></i> ${formatDistance(result.distance)}</span>`
            : '';

        const metaHtml = result.type === 'Doctor' && result.data
            ? `<div class="search-result-meta"><i class="fas fa-hospital"></i> ${result.data.hospital}</div>`
            : result.subtitle
                ? `<div class="search-result-meta"><i class="fas fa-tag"></i> ${result.subtitle}</div>`
                : '';

        return `
            <div class="search-result-card">
                <span class="search-result-type"><i class="fas ${result.icon}"></i> ${result.type}</span>
                <h3 class="search-result-title">${result.title}</h3>
                ${metaHtml}
                <p class="search-result-desc">${result.desc}</p>
                ${distanceHtml}
                <a href="${result.link}" class="search-result-link" target="${result.link.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer">
                    View Details <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
    }).join('');

    // Scroll to results
    searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Main search function
function performSearch(query) {
    if (!query.trim()) return;

    const searchTerm = query.toLowerCase().trim();
    const isNearMe = isNearMeSearch(searchTerm);
    const cleanQuery = searchTerm.replace(/near\s*me|nearby|closest|nearest|around\s*me/g, '').trim();
    const queryTerms = getRelatedTerms(cleanQuery || searchTerm);

    // Filter results
    let results = searchIndex.filter(result => matchesQuery(result, queryTerms));

    // If no results with synonyms, try direct keyword matching
    if (results.length === 0) {
        results = searchIndex.filter(result => {
            const keywords = result.keywords;
            return queryTerms.size > 0 && Array.from(queryTerms).some(term => keywords.includes(term));
        });
    }

    // Handle "near me" searches
    if (isNearMe) {
        // Filter to doctors only for near me searches (they have location data)
        const doctorResults = results.filter(r => r.type === 'Doctor');

        if (doctorResults.length > 0) {
            getUserLocation((location, error) => {
                if (location) {
                    renderSearchResults(doctorResults, query, location);
                } else {
                    // Location denied - show message but still show doctor results
                    searchResultsSection.style.display = 'block';
                    searchResultsTitle.textContent = 'Search Results for "' + query + '"';
                    searchResultsSubtitle.textContent = doctorResults.length + ' result(s) found';
                    searchResultsGrid.innerHTML = `
                        <div class="search-location-message">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>${error || 'Location access was not granted. Please allow location access to find nearby services.'}</p>
                        </div>
                        ${doctorResults.map(result => `
                            <div class="search-result-card">
                                <span class="search-result-type"><i class="fas ${result.icon}"></i> ${result.type}</span>
                                <h3 class="search-result-title">${result.title}</h3>
                                <div class="search-result-meta"><i class="fas fa-hospital"></i> ${result.data.hospital}</div>
                                <p class="search-result-desc">${result.desc}</p>
                                <a href="${result.link}" class="search-result-link">View Details <i class="fas fa-arrow-right"></i></a>
                            </div>
                        `).join('')}
                    `;
                    searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        } else if (results.length > 0) {
            // No doctors found but other results exist - show them with location message
            searchResultsSection.style.display = 'block';
            searchResultsTitle.textContent = 'Search Results for "' + query + '"';
            searchResultsSubtitle.textContent = results.length + ' result(s) found';
            searchResultsGrid.innerHTML = `
                <div class="search-location-message">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Location-based sorting is only available for doctor listings. Showing all relevant results.</p>
                </div>
                ${results.map(result => `
                    <div class="search-result-card">
                        <span class="search-result-type"><i class="fas ${result.icon}"></i> ${result.type}</span>
                        <h3 class="search-result-title">${result.title}</h3>
                        <div class="search-result-meta"><i class="fas fa-tag"></i> ${result.subtitle || 'Relevant result'}</div>
                        <p class="search-result-desc">${result.desc}</p>
                        <a href="${result.link}" class="search-result-link" target="${result.link.startsWith('#') ? '_self' : '_blank'}" rel="noopener noreferrer">
                            View Details <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                `).join('')}
            `;
            searchResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            renderSearchResults([], query, null);
        }
    } else {
        renderSearchResults(results, query, null);
    }

    // Close search bar if open
    searchBar.classList.remove('active');
    searchInput.value = '';
    heroSearchInput.value = '';

    // Hide suggestions
    heroSearchSuggestions.classList.remove('show');
    searchSuggestions.classList.remove('show');
}

// ============================================
// AUTOCOMPLETE SUGGESTIONS
// ============================================

// Build suggestion list from all data
function getSuggestions(query) {
    if (!query.trim()) return [];

    const q = query.toLowerCase().trim();
    const suggestions = [];
    const seen = new Set();

    // Add speciality names
    specialitiesData.forEach(spec => {
        if (spec.name.toLowerCase().includes(q) && !seen.has(spec.name)) {
            seen.add(spec.name);
            suggestions.push({ text: spec.name, type: 'Speciality', icon: spec.icon });
        }
    });

    // Add fitness names
    fitnessData.forEach(item => {
        if (item.name.toLowerCase().includes(q) && !seen.has(item.name)) {
            seen.add(item.name);
            suggestions.push({ text: item.name, type: 'Fitness', icon: item.icon });
        }
    });

    // Add nutrition names
    nutritionData.forEach(item => {
        if (item.name.toLowerCase().includes(q) && !seen.has(item.name)) {
            seen.add(item.name);
            suggestions.push({ text: item.name, type: 'Nutrition', icon: item.icon });
        }
    });

    // Add doctor specializations
    doctorsData.forEach(doc => {
        if (doc.specialization.toLowerCase().includes(q) && !seen.has(doc.specialization)) {
            seen.add(doc.specialization);
            suggestions.push({ text: doc.specialization, type: 'Doctor', icon: 'fa-user-md' });
        }
    });

    // Add library categories
    libraryData.forEach(item => {
        if (item.category.toLowerCase().includes(q) && !seen.has(item.category)) {
            seen.add(item.category);
            suggestions.push({ text: item.category, type: 'Health Article', icon: 'fa-notes-medical' });
        }
    });

    // Add common search terms
    const commonTerms = [
        'Doctor', 'Doctors near me', 'General Physician', 'Cardiologist', 'Dermatologist',
        'Dentist', 'Physiotherapist', 'Nutritionist', 'Dietitian', 'Fitness Trainer',
        'Gym', 'Yoga', 'Fitness', 'Weight training', 'Sports medicine',
        'Heart doctor', 'Skin doctor', 'Back pain', 'Exercise', 'Diet',
        'Weight loss', 'Weight gain', 'Muscle building', 'Home workout',
        'Cardio', 'Running', 'Walking', 'Healthy foods', 'Protein',
        'Vegetarian', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Hydration',
        'Diabetes', 'Heart disease', 'Blood pressure', 'Mental health',
        'Obesity', 'Asthma', 'Cancer', 'Sleep', 'Stress', 'Cholesterol'
    ];

    commonTerms.forEach(term => {
        if (term.toLowerCase().includes(q) && !seen.has(term)) {
            seen.add(term);
            suggestions.push({ text: term, type: 'Search', icon: 'fa-search' });
        }
    });

    return suggestions.slice(0, 8);
}

// Render suggestions dropdown
function renderSuggestions(suggestions, container, input) {
    if (suggestions.length === 0) {
        container.classList.remove('show');
        return;
    }

    // Store suggestions on the container for keyboard navigation
    container._suggestions = suggestions;

    container.innerHTML = suggestions.map((s, i) => `
        <div class="search-suggestion-item" data-index="${i}">
            <i class="fas ${s.icon}"></i>
            <span>${s.text}</span>
            <span class="suggestion-type">${s.type}</span>
        </div>
    `).join('');

    container.classList.add('show');

    // Add click handlers
    container.querySelectorAll('.search-suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            input.value = suggestions[parseInt(item.dataset.index)].text;
            container.classList.remove('show');
            performSearch(input.value);
        });
    });
}

// Handle input for autocomplete
function handleSearchInput(input, container) {
    const query = input.value;
    const suggestions = getSuggestions(query);
    renderSuggestions(suggestions, container, input);
}

// Keyboard navigation for suggestions
function handleSuggestionKeydown(e, input, container) {
    const items = container.querySelectorAll('.search-suggestion-item');
    if (items.length === 0) return;

    const suggestions = container._suggestions || [];

    let currentIndex = -1;
    items.forEach((item, i) => {
        if (item.classList.contains('active')) {
            currentIndex = i;
        }
    });

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (e.key === 'Enter') {
        if (currentIndex >= 0 && suggestions[currentIndex]) {
            e.preventDefault();
            input.value = suggestions[currentIndex].text;
            container.classList.remove('show');
            performSearch(input.value);
            return;
        }
    } else if (e.key === 'Escape') {
        container.classList.remove('show');
        return;
    }

    items.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
    });
}

// Event listeners for search inputs
heroSearchInput.addEventListener('input', () => {
    handleSearchInput(heroSearchInput, heroSearchSuggestions);
});

searchInput.addEventListener('input', () => {
    handleSearchInput(searchInput, searchSuggestions);
});

heroSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(heroSearchInput.value);
    } else {
        handleSuggestionKeydown(e, heroSearchInput, heroSearchSuggestions);
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(searchInput.value);
    } else {
        handleSuggestionKeydown(e, searchInput, searchSuggestions);
    }
});

heroSearchBtn.addEventListener('click', () => {
    performSearch(heroSearchInput.value);
});

// Close suggestions on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hero-search-box') && !e.target.closest('.search-bar')) {
        heroSearchSuggestions.classList.remove('show');
        searchSuggestions.classList.remove('show');
    }
});

// ============================================
// STICKY NAVBAR & BACK TO TOP
// ============================================

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar shadow
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top
    if (currentScroll > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollPos = window.pageYOffset + navbar.offsetHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// LOAD DOCTORS
// ============================================

function loadDoctors() {
    doctorsGrid.innerHTML = doctorsData.map(doc => `
        <div class="doctor-card glassmorphism">
            <img src="${doc.photo}" alt="${doc.name}" class="doctor-photo" loading="lazy">
            <h3 class="doctor-name">${doc.name}</h3>
            <p class="doctor-qualification">${doc.qualification}</p>
            <p class="doctor-specialization">${doc.specialization}</p>
            <p class="doctor-experience">${doc.experience} experience</p>
            <div class="doctor-details">
                <p><i class="fas fa-hospital"></i> ${doc.hospital}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${doc.address}</p>
                <p><i class="fas fa-money-bill-wave"></i> Fee: ${doc.fee}</p>
                <p><i class="fas fa-calendar-alt"></i> ${doc.days}</p>
                <p><i class="fas fa-clock"></i> ${doc.hours}</p>
                <p><i class="fas fa-phone"></i> ${doc.phone}</p>
            </div>
            <p class="doctor-about">"${doc.about}"</p>
            <div class="doctor-actions">
                <a href="https://maps.google.com/?q=${encodeURIComponent(doc.address)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i class="fas fa-map-marked-alt"></i> Google Maps</a>
                <a href="tel:${doc.phone.replace(/\s/g, '')}" class="btn btn-primary"><i class="fas fa-phone"></i> Call Now</a>
            </div>
            <p style="font-size:0.8rem;color:var(--text-muted);margin-top:12px;"><i class="fas fa-info-circle"></i> Please contact the clinic directly for appointments.</p>
        </div>
    `).join('');
}

// ============================================
// LOAD SPECIALITIES
// ============================================

function loadSpecialities() {
    specialitiesGrid.innerHTML = specialitiesData.map(spec => {
        const cardContent = `
            <div class="speciality-icon"><i class="fas ${spec.icon}"></i></div>
            <h3 class="speciality-name">${spec.name}</h3>
        `;
        if (spec.link) {
            return `<a href="${spec.link}" target="_blank" rel="noopener noreferrer" class="speciality-card glassmorphism">${cardContent}</a>`;
        }
        return `<div class="speciality-card glassmorphism">${cardContent}</div>`;
    }).join('');
}

// ============================================
// LOAD FITNESS
// ============================================

function loadFitness() {
    fitnessGrid.innerHTML = fitnessData.map(item => {
        const cardContent = `
            <div class="service-icon"><i class="fas ${item.icon}"></i></div>
            <h3 class="service-title">${item.name}</h3>
            <p class="service-desc">${item.desc}</p>
        `;
        if (item.link) {
            return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="fitness-card glassmorphism">${cardContent}</a>`;
        }
        return `<div class="fitness-card glassmorphism">${cardContent}</div>`;
    }).join('');
}

// ============================================
// LOAD NUTRITION
// ============================================

function loadNutrition() {
    nutritionGrid.innerHTML = nutritionData.map(item => {
        const cardContent = `
            <div class="service-icon"><i class="fas ${item.icon}"></i></div>
            <h3 class="service-title">${item.name}</h3>
            <p class="service-desc">${item.desc}</p>
        `;
        if (item.link) {
            return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="nutrition-card glassmorphism">${cardContent}</a>`;
        }
        return `<div class="nutrition-card glassmorphism">${cardContent}</div>`;
    }).join('');
}

// ============================================
// LOAD HEALTH LIBRARY
// ============================================

let activeCategory = 'All';

function getUniqueCategories() {
    const cats = ['All', ...new Set(libraryData.map(item => item.category))];
    return cats;
}

function loadLibraryCategories() {
    const categories = getUniqueCategories();
    libraryCategories.innerHTML = categories.map(cat => `
        <button class="library-cat-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    document.querySelectorAll('.library-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.library-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.category;
            loadLibraryGrid();
        });
    });
}

function loadLibraryGrid() {
    const filtered = activeCategory === 'All'
        ? libraryData
        : libraryData.filter(item => item.category === activeCategory);

    libraryGrid.innerHTML = filtered.map(item => {
        const cardContent = `
            <img src="${item.image}" alt="${item.title}" class="library-card-image" loading="lazy">
            <div class="library-card-body">
                <span class="library-card-category">${item.category}</span>
                <h3 class="library-card-title">${item.title}</h3>
                <p class="library-card-desc">${item.desc}</p>
                <span class="library-card-link">Read More <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        if (item.link) {
            return `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="library-card glassmorphism">${cardContent}</a>`;
        }
        return `<div class="library-card glassmorphism">${cardContent}</div>`;
    }).join('');
}

// ============================================
// LOAD BLOG
// ============================================

function loadBlog() {
    blogGrid.innerHTML = blogData.map(post => {
        const cardContent = `
            <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy">
            <div class="blog-card-body">
                <div class="blog-card-meta">
                    <span><i class="fas fa-calendar"></i> ${post.date}</span>
                    <span><i class="fas fa-user"></i> ${post.author}</span>
                </div>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-desc">${post.desc}</p>
                <span class="blog-card-link">Read Full Article <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        if (post.link) {
            return `<a href="${post.link}" target="_blank" rel="noopener noreferrer" class="blog-card glassmorphism">${cardContent}</a>`;
        }
        return `<div class="blog-card glassmorphism">${cardContent}</div>`;
    }).join('');
}

// ============================================
// LOAD FAQ
// ============================================

function loadFaq() {
    faqContainer.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" aria-expanded="false" data-index="${index}">
                <span>${item.question}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(f => {
                f.classList.remove('active');
                f.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ============================================
// CALCULATORS
// ============================================

// BMI Calculator
document.getElementById('calcBmi').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('bmiWeight').value);
    const height = parseFloat(document.getElementById('bmiHeight').value) / 100;

    if (!weight || !height || weight <= 0 || height <= 0) {
        showToast('Please enter valid weight and height values.');
        return;
    }

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(1);

    document.getElementById('bmiValue').textContent = bmiRounded;

    let category, color, percent;
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#f59e0b';
        percent = 25;
    } else if (bmi < 25) {
        category = 'Normal Weight';
        color = '#22C55E';
        percent = 50;
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f97316';
        percent = 75;
    } else {
        category = 'Obese';
        color = '#ef4444';
        percent = 100;
    }

    document.getElementById('bmiLabel').textContent = category;
    const barFill = document.getElementById('bmiBarFill');
    barFill.style.width = percent + '%';
    barFill.style.background = color;
});

// BMR Calculator
document.getElementById('calcBmr').addEventListener('click', () => {
    const age = parseInt(document.getElementById('bmrAge').value);
    const weight = parseFloat(document.getElementById('bmrWeight').value);
    const height = parseFloat(document.getElementById('bmrHeight').value);
    const gender = document.getElementById('bmrGender').value;

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        showToast('Please enter valid age, weight, and height values.');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById('bmrValue').textContent = Math.round(bmr);
});

// Daily Calories Calculator
document.getElementById('calcCalories').addEventListener('click', () => {
    const age = parseInt(document.getElementById('calAge').value);
    const weight = parseFloat(document.getElementById('calWeight').value);
    const height = parseFloat(document.getElementById('calHeight').value);
    const gender = document.getElementById('calGender').value;
    const activity = parseFloat(document.getElementById('calActivity').value);

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        showToast('Please enter valid age, weight, and height values.');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const calories = Math.round(bmr * activity);
    document.getElementById('caloriesValue').textContent = calories;
});

// Water Intake Calculator
document.getElementById('calcWater').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('waterWeight').value);
    const activity = parseFloat(document.getElementById('waterActivity').value);

    if (!weight || weight <= 0) {
        showToast('Please enter a valid weight.');
        return;
    }

    const baseWater = weight * 0.033;
    const activityWater = activity * 0.5;
    const totalWater = baseWater + activityWater;

    document.getElementById('waterValue').textContent = totalWater.toFixed(1);
});

// Protein Calculator
document.getElementById('calcProtein').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('proteinWeight').value);
    const goal = parseFloat(document.getElementById('proteinGoal').value);

    if (!weight || weight <= 0) {
        showToast('Please enter a valid weight.');
        return;
    }

    const protein = Math.round(weight * goal);
    document.getElementById('proteinValue').textContent = protein;
});

// ============================================
// NEWSLETTER FORM
// ============================================

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if (email) {
        showToast('Thank you for subscribing! Check your email for confirmation.');
        newsletterForm.reset();
    }
});

// ============================================
// CONTACT FORM
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (name && email && subject && message) {
        showToast('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        showToast('Please fill in all fields.');
    }
});

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

toastClose.addEventListener('click', () => {
    toast.classList.remove('show');
});

// ============================================
// SCROLL ANIMATIONS (Intersection Observer)
// ============================================

function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .doctor-card, .speciality-card, .fitness-card, .nutrition-card, .library-card, .blog-card, .calculator-card, .faq-item, .about-text, .stat-card, .contact-info, .contact-form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    initDarkMode();
    loadDoctors();
    loadSpecialities();
    loadFitness();
    loadNutrition();
    loadLibraryCategories();
    loadLibraryGrid();
    loadBlog();
    loadFaq();
    initScrollAnimations();
}

document.addEventListener('DOMContentLoaded', init);
