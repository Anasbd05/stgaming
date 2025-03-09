import {DollarSign, ImagePlus, Images, LogOut, Paintbrush, ShieldCheck, ShoppingBag, SwatchBook, Zap } from "lucide-react";
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
