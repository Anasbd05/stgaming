import {Paintbrush, ShieldCheck, SwatchBook, Zap } from "lucide-react";

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
