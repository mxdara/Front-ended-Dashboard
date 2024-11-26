import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps{
    text : string; 
    link : string;
}

export default function BackButton({text, link} : BackButtonProps) {
    return (
            <Link href={link} className="text-grey flex items-center mb-5 font-bold gap-1 hover:underline">
                <ArrowLeftCircle size={24} />{text}
            </Link>
    )
}