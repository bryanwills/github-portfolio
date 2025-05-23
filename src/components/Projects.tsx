import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "JarvisAI Personal Assistant",
        description: "A full-stack web app that will integrate AI with various connected services as a personal assistant.",
        tech: "React",
        link: "#",
    },
    {
        title: "Shorty a URL shortening service",
        description: "A URL shortner in TypeScript, NextJS, TailwindCSS, and PrismaDB for Code Louisville class",
        tech: "NextJS",
        link: "https://github.com/bryanwills/shorty",
    },
    {
        title: "Coin Dashboard",
        description: "Inventory CRUD app with a dashboard Web UI to track coins from a coin colletion.",
        tech: "TypeScript",
        link: "https://github.com/bryanwills/coin-dashboard",
    },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "NextJS": "bg-purple-500",
    "TypeScript": "bg-yellow-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}