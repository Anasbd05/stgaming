import { ImagePlus, Images, Paintbrush, ShieldCheck, ShoppingBag, SwatchBook, Zap } from "lucide-react";
import {Twitter , Linkedin ,Instagram} from 'lucide-react'
import anime from "./animesetup.jpeg" 
import lava from "./lava.jpeg"
import minimalist from "./minimalist.jpeg"
import industrial from "./industrial.jpeg"
import rgb from "./rgb.jpeg"
import natural from "./natural.jpeg"
import cyberpunk from "./cyberpunk.jpeg"
import darkmode from "./darkmode.jpeg"
import futuristic from "./Futuristic.jpeg" 

const features = [
    {
        id : 1 ,
        title: "Designs",
        icon: <Paintbrush className="w-10 h-10 border text-secondary border-accent p-2 rounded-lg " /> ,
        paragraph: "Instantly create personalized gaming room setups."
    },
    {
        id : 2 ,
        title: "Themes",
        icon: <SwatchBook className="w-10 h-10 border text-secondary border-accent p-2 rounded-lg " /> ,
        paragraph: "Choose from various styles like futuristic, RGB, minimal, and more."
    },
    {
        id : 3 ,
        title: "Visuals",
        icon: <ShieldCheck className="w-10 h-10 border text-secondary border-accent p-2 rounded-lg " /> ,
        paragraph: "See your dream setup with realistic, detailed renders."
    },
    {
        id : 4 ,
        title: "Speed",
        icon: <Zap className="w-10 h-10 border text-secondary border-accent p-2 rounded-lg " /> ,
        paragraph: "Get results in seconds with AI-powered efficiency."
    }
];

export default features;

export const reviews = [
    {
        name: "Alex Johnson",
        username: "alex_j",
        profileLink: "#",
        comment: "Amazing AI! Transformed my boring room into a dream gaming setup in seconds.",
        socialMedia :<Instagram className=' text-red-400' />

    },
    {
        name: "Sarah Miller",
        username: "sarah_m",
        profileLink: "#",
        comment: "Love the designs! Would be great to have more customization options.",
        socialMedia : <Linkedin className=" text-sky-500"/>
    },
    {
        name: "David Lee",
        username: "david_l",
        profileLink: "#",
        comment: "Super easy to use! Now I know exactly how to set up my gaming space.",
        socialMedia : <Twitter className=' text-blue-500' />
        
    },
    {
        name: "Emma Roberts",
        username: "emma_r",
        profileLink: "#",
        comment: "Great tool! Some themes could use more detail, but overall fantastic.",
        socialMedia : <Linkedin className=" text-sky-500"/>
    },
    {
        name: "Chris Thompson",
        username: "chris_t",
        profileLink: "#",
        comment: "Blown away by the AI-generated setups! Looks like something out of a pro studio.",
        socialMedia : <Linkedin className=" text-sky-500"/>
    },
    {
        name: "Sophia Kim",
        username: "sophia_k",
        profileLink: "#",
        comment: "Really cool AI! Just wish the free version had more features.",
        socialMedia :<Twitter className=' text-blue-500' />

    },
    {
        name: "Jake Peterson",
        username: "jake_p",
        profileLink: "#",
        comment: "This saved me so much time! AI nailed my dream gaming setup perfectly.",
        socialMedia :<Twitter className=' text-blue-500' />

    },
    {
        name: "Olivia Harris",
        username: "olivia_h",
        profileLink: "#",
        comment: "The visuals are stunning! Helped me plan my entire gaming corner.",
        socialMedia :<Instagram className=' text-red-400' />

    },
    {
        name: "Michael Davis",
        username: "michael_d",
        profileLink: "#",
        comment: "Pretty good! A few minor tweaks would make it perfect.",
        socialMedia :<Twitter className=' text-blue-500' />

    },
    {
        name: "Liam Wilson",
        username: "liam_w",
        profileLink: "#",
        comment: "AI-generated setups are 🔥. My new gaming space looks incredible!",
        socialMedia :<Instagram className=' text-red-400' />

    },
    {
        name: "Ella Smith",
        username: "ella_s",
        profileLink: "#",
        comment: "Very useful tool! Some themes could use more variety.",
        socialMedia :<Instagram className=' text-red-400' />

    },
    {
        name: "Noah Green",
        username: "noah_g",
        profileLink: "#",
        comment: "Exceeded my expectations! My setup looks 10x better now.",
        socialMedia :<Instagram className=' text-red-400' />

    },
    {
        name: "Mia Carter",
        username: "mia_c",
        profileLink: "#",
        comment: "A must-have for gamers! AI makes designing so effortless.",
        socialMedia : <Linkedin className=" text-sky-500"/>
    },
    {
        name: "Ethan Vance",
        username: "ethan_v",
        profileLink: "#",
        comment: "Really cool app, but I’d love to see more lighting options.",
        socialMedia :<Twitter className=' text-blue-500' />

    },
    {
        name: "Ava Bennett",
        username: "ava_b",
        profileLink: "#",
        comment: "Absolutely love it! Helped me visualize my dream battlestation.",
        socialMedia : <Linkedin className=" text-sky-500"/>
    },
    {
        name: "Daniel Fisher",
        username: "daniel_f",
        profileLink: "#",
        comment: "Best AI tool for gaming setups! Super smooth and easy to use.",
        socialMedia :<Twitter className=' text-blue-500' />

    }
];

export const pricingPlans = [
    {
        title: "Basic",
        price: "$12",
        YearlyPrice: "$99",
        duration: "/month",
        durationYearly: "year",
        features: [
            "AI-powered gaming room designs",
            "Access to all themes",
            "High-quality renders",
            "Regular updates",
            "Cancel anytime"
        ],
        bestFor: "Gamers who want fresh setups every month.",
        buttonText: "Choose Monthly",
    },
    {
        title: "One-Time",
        price: "$199",
        duration: "/lifetime",
        features: [
            "Lifetime access to all features",
            "One-time payment, no renewal",
            "All future updates included",
            "Exclusive perks for lifetime users",
        ],
        bestFor: "Gamers who love endless setup changes.",
        buttonText: "Get Lifetime Access",
    },
    {
        title: "Enterprise",
        price: "Custom",
        features: [
            "Unlimited AI-generated designs",
            "Custom branding & integrations",
            "Dedicated account manager",
            "Priority support & feature requests",
        ],
        bestFor: "Businesses and content creators.",
        buttonText: "Contact Us",
    }
];
export const faqs = [
    {
        question: "How does the AI transform my gaming setup?",
        answer: "Our AI analyzes your room and generates high-quality designs based on your preferences, such as themes, lighting, and layout."
    },
    {
        question: "Do I need any special equipment to use this?",
        answer: "No special equipment is needed! Just upload a photo of your space, and our AI will handle the rest."
    },
    {
        question: "Can I customize the AI-generated designs?",
        answer: "Yes! You can tweak colors, themes, and elements to match your personal style."
    },
    {
        question: "How long does it take to generate a design?",
        answer: "Your new gaming setup is ready in seconds, thanks to our powerful AI engine."
    },
    {
        question: "What themes are available?",
        answer: "We offer a variety of themes, including futuristic, RGB, minimal, cyberpunk, and more."
    },
    {
        question: "Is there a free trial?",
        answer: "We currently do not offer a free trial, but you can explore example designs before purchasing."
    },
    {
        question: "What’s the difference between the monthly and lifetime plans?",
        answer: "The monthly plan gives you continuous access with updates, while the lifetime plan is a one-time payment for unlimited use."
    },
    {
        question: "Can I use this for commercial projects?",
        answer: "The Enterprise plan is designed for businesses, offering unlimited designs, branding options, and priority support."
    },
    {
        question: "What happens if I cancel my subscription?",
        answer: "You'll lose access to AI-generated designs and premium features, but you can resubscribe anytime."
    },
    {
        question: "How do I contact support?",
        answer: "You can reach out via our support page, and we’ll get back to you as soon as possible."
    }
];

export const styles = [
    {
        title: "Futuristic",
        image: futuristic,
        bestFor: "Tech Enthusiasts"
    },
    {
        title: "RGB Overload",
        image: rgb,
        bestFor: "Gamers"
    },
    {
        title: "Minimal",
        image: minimalist,
        bestFor: "Minimalists"
    },
    {
        title: "Cyberpunk",
        image: cyberpunk,
        bestFor: "Urban Creatives"
    },
    {
        title: "Natural",
        image: natural,
        bestFor: "Nature Lovers"
    },
    {
        title: "Dark Mode",
        image: darkmode,
        bestFor: "Night Owls"
    },
    {
        title: "Lava & Fire",
        image: lava,
        bestFor: "Bold Souls"
    },
    {
        title: "Industrial",
        image: industrial,
        bestFor: "Simplicity Seekers"
    },
    {
        title: "Anime",
        image: anime,
        bestFor: "Anime Fans"
    }
];
export const sidebarLinks = [
    { 
        name: "New Setup", 
        link: "/dashboard" ,
        icon : <ImagePlus  className="text-gray-300 w-6 h-6" />
    },
    { 
        name: "My Gallery", 
        link: "/dashboard/my-gallery" ,
        icon : <Images className="text-gray-300 w-6 h-6" />
    },
    { 
        name: "Recommendation", 
        link: "/dashboard/recommendation",
        icon : <ShoppingBag className="text-gray-300 w-6 h-6" />
     }
  ];

//   products

import chair from "./chair.jpg";
import chair2 from "./chair2.jpg";
import chair3 from "./chair3.jpg";
import desk from "./desk.jpg";
import desk2 from "./desk2.jpg";
import PC_computer from "./Pcomputer.jpg";
import PC_computer2 from "./Pcomputer2.jpg";
import headphone from "./headphone.jpg";
import headphone2 from "./headphone2.jpg";
import headphone3 from "./headphone3.jpg";
import hexagone from "./Hexagon.jpg";
import hexagone2 from "./Hexagon2.jpg";
import monitor from "./monitor.jpg";
import monitor2 from "./monitor2.jpg";

export const products = [
  {
    id: 1,
    title: "Ergonomic Chair",
    price: 149.99,
    shortDesc: "Comfortable and adjustable ergonomic chair.",
    image: chair,
  },
  {
    id: 3,
    title: "Premium Office Chair",
    price: 199.99,
    shortDesc: "High-quality leather office chair for professionals.",
    image: chair3,
  },
  {
    id: 4,
    title: "Wooden Desk",
    price: 249.99,
    shortDesc: "Spacious and stylish wooden desk.",
    image: desk,
  },
  {
    id: 5,
    title: "Minimalist Desk",
    price: 199.99,
    shortDesc: "Sleek and modern desk for small spaces.",
    image: desk2,
  },
  {
    id: 6,
    title: "Gaming PC",
    price: 1299.99,
    shortDesc: "High-performance gaming PC with RGB lighting.",
    image: PC_computer,
  },
  {
    id: 7,
    title: "Wireless Headphones",
    price: 99.99,
    shortDesc: "Noise-canceling wireless headphones with deep bass.",
    image: headphone,
  },
  {
    id: 8,
    title: "Hexagonal LED Panels",
    price: 59.99,
    shortDesc: "Customizable LED panels for unique lighting.",
    image: hexagone,
  },
  {
    id: 9,
    title: "Gaming Pc",
    price: 1599.99,
    shortDesc: "Powerful desktop built for gaming and content creation.",
    image: PC_computer2,
  },
  {
    id: 10,
    title: "Executive Chair",
    price: 179.99,
    shortDesc: "Luxurious executive chair for maximum comfort.",
    image: chair2,
  },
  {
    id: 11,
    title: "4K Monitor",
    price: 399.99,
    shortDesc: "Ultra HD monitor for crystal-clear visuals.",
    image: monitor,
  },
  {
    id: 12,
    title: "Gaming Headset",
    price: 129.99,
    shortDesc: "Immersive gaming headset with surround sound.",
    image: headphone2,
  },
  {
    id: 13,
    title: "Hexagonal RGB Lights",
    price: 69.99,
    shortDesc: "Vibrant RGB lights to enhance your setup.",
    image: hexagone2,
  },
  {
    id: 14,
    title: "Curved Monitor",
    price: 349.99,
    shortDesc: "34-inch ultra-wide curved monitor for multitasking.",
    image: monitor2,
  },
  {
    id: 15,
    title: "Studio Headphones",
    price: 149.99,
    shortDesc: "Professional studio headphones with high fidelity sound.",
    image: headphone3,
  },
];


export const Privacy_Policy = [
        {
            "id": 1,
            "title": "2. How We Use Your Information",
            "description": "We use the collected data to:",
            "paragraphs": [
                { "id": 1, "text": "Provide and improve our AI room transformation service." },
                { "id": 2, "text": "Authenticate users and enhance security." },
                { "id": 3, "text": "Process payments and manage subscriptions." },
                { "id": 4, "text": "Offer customer support and troubleshoot issues." },
                { "id": 5, "text": "Analyze trends and optimize our platform." },
                { "id": 6, "text": "Send updates and promotional content (users can opt out anytime)." }
            ]
        },
        {
            "id": 2,
            "title": "3. Data Sharing and Security",
            "description": "We prioritize your privacy and only share data under necessary conditions.",
            "paragraphs": [
                { "id": 1, "text": "Third-Party Services: We may share data with payment processors, AI providers, and cloud storage services, ensuring they meet security standards." },
                { "id": 2, "text": "Legal Compliance: We may disclose data if required by law or to protect our platform against fraud or threats." },
                { "id": 3, "text": "Data Protection: Your data is stored securely using encryption, and access is restricted to authorized personnel only." }
            ]
        },
        {
            "id": 3,
            "title": "4. User Rights and Choices",
            "description": "You have control over your data and can exercise the following rights:",
            "paragraphs": [
                { "id": 1, "text": "Access, update, or delete your account information." },
                { "id": 2, "text": "Opt-out of marketing communications at any time." },
                { "id": 3, "text": "Request data deletion, subject to legal obligations." },
                { "id": 4, "text": "Manage cookie preferences through browser settings." }
            ]
        },
        {
            "id": 4,
            "title": "5. Cookies and Tracking Technologies",
            "description": "We use cookies and similar technologies to improve service functionality and user experience.",
            "paragraphs": [
                { "id": 1, "text": "Store user preferences and session information." },
                { "id": 2, "text": "Track usage patterns to optimize performance." },
                { "id": 3, "text": "Provide a seamless and personalized experience." }
            ]
        },
        {
            "id": 5,
            "title": "6. Changes to This Policy",
            "description": "We may update this Privacy Policy periodically. If significant changes occur, we will notify users via email or an in-app notice.",
            "paragraphs": [
                { "id": 1, "text": "We encourage users to review this policy regularly." },
                { "id": 2, "text": "Continued use of our service after updates implies acceptance of the new terms." }
            ]
        },
        {
            "id": 6,
            "title": "7. Contact Us",
            "description": "If you have any questions or concerns about this Privacy Policy, feel free to contact us.",
            "paragraphs": [
                { "id": 1, "text": "Email: anastrying05@gmail.com" },
                { "id": 2, "text": "Website: https://setugame.com" }
            ]
        }
];
export const terms = [
    {
        id:1 ,
        title : "1. Acceptance of Terms" ,
        desc : "By accessing and using [Your SaaS Name] (the Service), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Service."
    },
    {
        id:2 ,
        title : "2. Description of Service" ,
        desc : "[Your SaaS Name] is an online platform that provides [brief description of what your SaaS does]. The Service is provided as is without any guarantees of availability, performance, or suitability for a particular purpose."
    },
    {
        id:3 ,
        title : "3. User Responsibilities" ,
        paragraphs : [
            "You must be at least 18 years old to use this Service.",
            "You agree not to use the Service for any unlawful or unauthorized purposes.",
            "You are responsible for maintaining the security of your account and all activity under your account.",
        ]
    },
    {
        id:4 ,
        title : "4. Subscription and Payments" ,
        paragraphs : [
            "Certain features of the Service may require a paid subscription.",
            "Payments are processed through [payment provider, e.g., Stripe].",
            "No refunds are provided unless required by law.",
        ]
    },
    {
        id:5 ,
        title : "5. Intellectual Property" ,
        desc :"All content and software related to the Service are the property of [Your Name] and are protected by copyright and intellectual property laws."
    },
    {
        id:6 ,
        title : "6. Limitations of Liability" ,
        desc : "To the maximum extent permitted by law, [Your Name] is not liable for any indirect, incidental, or consequential damages resulting from your use of the Service."
    },
    {
        id:7 ,
        title : "7. Termination" ,
        desc : "I reserve the right to suspend or terminate access to the Service at my discretion if a user violates these Terms."
    },
    {
        id:8 ,
        title : "8. Changes to Terms" ,
        desc : "To the maximum extent permitted by law, [Your Name] is not liable for any indirect, incidental, or consequential damages resulting from your use of the Service."
    },
    {
        id:9 ,
        title : "9. Contact" ,
        desc : "For any questions regarding these Terms, contact me at [anastrying05@gmail.com]."
    },

]