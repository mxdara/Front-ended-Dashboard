'use client'

import React from 'react'
import { 
    LineChart, 
    Line , 
    XAxis, 
    YAxis, 
    ResponsiveContainer, 
    CartesianGrid
} from 'recharts'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle, 
    CardDescription, 
} from './ui/card'

import data from '@/data/analytics';

export default function AnalyticsChart() {
  return (
    <>
    <div className='max-w-4xl w-full'>
        <Card className='mt-4 px-2'>
            <CardHeader>
                <CardTitle>Analytics for this year</CardTitle>
                <CardDescription>For this year</CardDescription>
            </CardHeader>
            <CardContent>
                <div style={{width: '100%' , height: 300}}>
                    <ResponsiveContainer>
                        <LineChart width={1100} height={300} data={data}>
                            <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                </div>    
            </CardContent>
        </Card>
    </div>
    </>
  )
}
