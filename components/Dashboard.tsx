import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { LucideIcon } from 'lucide-react'

interface DashboardCardProps {
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>;
}

export default function Dashboard({title, count, icon}: DashboardCardProps) {
    return (
        <Card className='bg-slate-300'>
            <CardHeader>
                <CardTitle className='text-4xl'>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-5 justify-center items-center">
                    {icon}
                    <h3 className='text-3xl'>
                        {count}
                    </h3>
                </div>
            </CardContent>
        </Card>
    )
}
