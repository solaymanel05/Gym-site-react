import one from "../../assets/images/one.png";
import two from "../../assets/images/two.png";
import three from "../../assets/images/three.png";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/five.jpg";

import testone from "../../assets/images/testone.jpg";
import testtwo from "../../assets/images/testtwo.jpg";
import testthree from "../../assets/images/testthree.jpg";

import galone from "../../assets/images/galone.jpg";
import galtwo from "../../assets/images/galtwo.jpg";
import galthree from "../../assets/images/galthree.jpg";
import galfour from "../../assets/images/galfour.jpg";
import galfive from "../../assets/images/galfive.jpg";
import galsix from "../../assets/images/galsix.jpg";

import pircingone from "../../assets/images/pricone.jpg";
import pircingtwo from "../../assets/images/prictwo.jpg";
import pircingthree from "../../assets/images/pricthree.jpg";

import blogOne from "../../assets/images/ageofsport.jpg";
import blogTwo from "../../assets/images/foodhealth.jpg";
import blogThree from "../../assets/images/mind.jpg";
import blogFour from "../../assets/images/yoga.jpg";
import blogFive from "../../assets/images/weight.jpg";

import strong from "../../assets/images/ssd.jpg";



const DataCardOne = [
  {
    img: one,
    name: "Jack brand",
    type: "Personal Trainer",
  },
  {
    img: two,
    name: "bill Gric",
    type: "Fitness Trainer",
  },
  {
    img: three,
    name: "Sara luis",
    type: "Yoga Trainer",
  },
];

export default DataCardOne;

export const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    text: "This fitness program changed my life! I've never felt better.",
    image: testone,
    designation: "Software Engineer",
  },
  {
    id: 2,
    name: "John Smith",
    text: "The trainers are amazing and the workouts are really effective.",
    image: testtwo,
    designation: "Graphic Designer",
  },
  {
    id: 3,
    name: "Sara Lee",
    text: "I love the community and the support I get from the team.",
    image: testthree,
    designation: "Marketing Manager",
  },
];

export const galleryImages = [
  { id: 1, img: galone, alt: "Image 1" },
  { id: 2, img: galtwo, alt: "Image 2" },
  { id: 3, img: galthree, alt: "Image 3" },
  { id: 4, img: galfour, alt: "Image 4" },
  { id: 5, img: galfive, alt: "Image 5" },
  { id: 6, img: galsix, alt: "Image 6" },
];

export const pricingData = [
  {
    name: "Basic Plan",
    price: "$20",
    features: [
      "Access to all gym equipment",
      "1 personal training session",
      "Free Wi-Fi",
    ],
    image: pircingone,
  },
  {
    name: "Standard Plan",
    price: "$40",
    features: [
      "Access to all gym equipment",
      "5 personal training sessions",
      "Free Wi-Fi",
    ],
    image: pircingtwo,
  },
  {
    name: "Premium Plan",
    price: "$60",
    features: [
      "Access to all gym equipment",
      "Unlimited personal training sessions",
      "Free Wi-Fi",
    ],
    image: pircingthree,
  },
];

export const blogData = [
  {
    title: "10 Tips for a Healthy Lifestyle",
    date: "June 1, 2024",
    summary: "Learn the top 10 tips for maintaining a healthy lifestyle.",
    link: "/blog/10-tips-for-a-healthy-lifestyle",
  },
  {
    title: "The Benefits of Regular Exercise",
    date: "May 25, 2024",
    summary:
      "Discover the many benefits of regular exercise for your body and mind.",
    link: "/blog/benefits-of-regular-exercise",
  },
  {
    title: "How to Stay Motivated to Workout",
    date: "May 20, 2024",
    summary:
      "Staying motivated to workout can be challenging. Here are some tips to help you stay on track.",
    link: "/blog/how-to-stay-motivated-to-workout",
  },
];

export const images = [
  galfive,
  pircingone,
  testone,
  testtwo,
  pircingthree,
  galfour,
  galsix,
  testthree,
  pircingone,
];

export const schedule = [
  {
    day: "monday",
    classes: [{ class: "Yoga", time: "10:00 AM", trainer: "Alice" }],
  },
  {
    day: "monday",
    classes: [{ class: "Pilates", time: "11:00 AM", trainer: "Bob" }],
  },
  {
    day: "wednesday",
    classes: [{ class: "Boxing", time: "12:00 PM", trainer: "Charlie" }],
  },
  {
    day: "thursday",
    classes: [{ class: "Dance", time: "01:00 PM", trainer: "David" }],
  },
  {
    day: "wednesday",
    classes: [{ class: "Strength", time: "02:00 PM", trainer: "Eve" }],
  },
  {
    day: "saturday",
    classes: [{ class: "Cardio", time: "03:00 PM", trainer: "Frank" }],
  },
  {
    day: "friday",
    classes: [{ class: "Rest", time: "All Day", trainer: "None" }],
  },
  {
    day: "monday",
    classes: [{ class: "Yoga", time: "10:00 AM", trainer: "Alice" }],
  },
  {
    day: "sunday",
    classes: [{ class: "Pilates", time: "11:00 AM", trainer: "Bob" }],
  },
  {
    day: "tuesday",
    classes: [{ class: "Boxing", time: "12:00 PM", trainer: "Charlie" }],
  },
  {
    day: "thursday",
    classes: [{ class: "Dance", time: "01:00 PM", trainer: "David" }],
  },
  {
    day: "monday",
    classes: [{ class: "Strength", time: "02:00 PM", trainer: "Eve" }],
  },
  {
    day: "saturday",
    classes: [{ class: "Cardio", time: "03:00 PM", trainer: "Frank" }],
  },
  {
    day: "sunday",
    classes: [{ class: "Rest", time: "All Day", trainer: "None" }],
  },
  {
    day: "monday",
    classes: [{ class: "Strength", time: "02:00 PM", trainer: "Eve" }],
  },
  {
    day: "saturday",
    classes: [{ class: "Cardio", time: "03:00 PM", trainer: "Frank" }],
  },
  {
    day: "sunday",
    classes: [{ class: "Rest", time: "All Day", trainer: "None" }],
  },
];
export const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export const blogs = [
  {
    id: 1,
    img: blogFour, // replace with your image path
    altText: "Blog",
    date: "juin 4, 2024",
    author: "Admin",
    category: "Yoga",
    title: "Yoga: A Journey to Inner Peace and Physical Strength",
    content: `Discover the transformative power of yoga. From enhancing flexibility and strength to promoting mental clarity and relaxation, yoga offers a holistic approach to wellness. Explore various yoga styles, poses, and techniques to start or deepen your practice.`,
  },
  {
    id: 2,
    img: blogTwo, // replace with your image path
    altText: "Blog",
    date: "January 11, 2024",
    author: "Admin",
    category: "fitness",
    title: "Comprehensive Fitness: Building a Stronger, Healthier You",
    content: ` Dive into the world of fitness with tailored workout plans, expert tips, and motivational strategies. Whether you're a beginner or a seasoned athlete, learn how to achieve your fitness goals, improve endurance, and enhance overall health through structured exercise routines.`,
  },
  {
    id: 3,
    img: blogFive, // replace with your image path
    altText: "Blog",
    date: "March 29, 2024",
    author: "Admin",
    category: "weight",
    title: "Health and Fitness: Achieving Weight Loss the Right Way",
    content: `Learn sustainable methods for weight loss that prioritize health and well-being. From balanced diets and effective exercise routines to understanding the science behind metabolism, find out how to lose weight without compromising your health.`,
  },
  {
    id: 4,
    img:blogOne, // replace with your image path
    altText: "Blog",
    date: "March 21, 2024",
    author: "Admin",
    category: "Mind",
    title: "Mental Wellness: Fitness for a Healthy Mind",
    content: ` Explore the vital connection between physical activity and mental health. Understand how regular exercise can reduce stress, improve mood, boost cognitive function, and promote overall mental well-being`,
  },
  {
    id: 5,
    img: blogThree , // replace with your image path
    altText: "Blog",
    date: "April 17, 2024",
    author: "Admin",
    category: "Fit",
    title: "Nourishing Your Body: The Role of Healthy Food in Fitness",
    content: ` Discover the importance of nutrition in achieving your fitness goals. Learn about balanced diets, superfoods, and meal planning to fuel your body for workouts and recovery. Embrace a healthy eating lifestyle to complement your fitness routine.`,
  },
  // Add more blog objects here if needed
];




 export const recentPosts = [
  {
    date: 'March 21, 2024',
    title: 'Mental Wellness: Fitness for a Healthy Mind',
    image: blogOne,
  },
  {
    date: 'January 11, 2024',
    title: 'Comprehensive Fitness: Building a Stronger, Healthier You',
    image: blogTwo,
  },
  {
    date: 'April 17, 2024',
    title: 'Nourishing Your Body: The Role of Healthy Food in Fitness',
    image: blogThree,
  },
  {
    date: 'June 4, 2024',
    title: 'Yoga: A Journey to Inner Peace and Physical Strength',
    image: blogFour,
  },
];


export const classesImages = [
  {
    id: 1,
    img: pircingone, // Replace with your actual image path
    alt: 'Image 1',
    title: 'Crossfit',
    buttonText: 'join now',
    date: 'March 21, 2024',
  },
  {
    id: 2,
    img: galfive, // Replace with your actual image path
    alt: 'Image 2',
    title: 'Power Lifting',
    buttonText: 'join now',
    date: 'January 11, 2024',
  },
  {
    id: 3,
    img: strong, // Replace with your actual image path
    alt: 'Image 3',
    title: 'Workout',
    buttonText: 'join now',
    date: 'April 17, 2024',
  },
  {
    id: 4,
    img: five, // Replace with your actual image path
    alt: 'Image 4',
    title: 'Boxing',
    buttonText: 'join now',
    date: 'June 4, 2024',
  },
  {
    id: 5,
    img: galfour, // Replace with your actual image path
    alt: 'Image 4',
    title: 'Meditation',
    buttonText: 'join now',
    date: 'June 4, 2024',
  },
  {
    id: 6,
    img: four, // Replace with your actual image path
    alt: 'Image 4',
    title: 'bodyBuilding',
    buttonText: 'join now',
    date: 'June 4, 2024',
  },
];