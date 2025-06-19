import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async() => {

    const user = await currentUser()
    if(user) redirect("/home")
        
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
                <div className="my-auto">
                    <h1 className="mt-6 max-w-[17ch] text-4xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
                        Your AI Mental Wellness Companion
                    </h1>
                    <p className="mt-6 max-w-[60ch] text-lg">
                        Calm Mind is an AI-powered mental health tool to help you improve your emotional well-being
                    </p>
                    <Link href={"/sign-in"} className="mt-12 flex items-center gap-4">
                        <Button size="lg" className="rounded-full text-base">
                            Get Started <ArrowUpRight className="!h-5 !w-5" />
                        </Button>
                    </Link>
                </div>
                <Image src={"/images/logo2.webp"} alt={"logo"} width={500} height={500} className="w-full aspect-video object-contain lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-4rem)] bg-accent rounded-xl" />
            </div>
        </div>
    );
};

export default page;
