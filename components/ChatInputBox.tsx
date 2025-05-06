import React from 'react'
import { Input } from './ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from '@radix-ui/react-label'
import { Button } from './ui/button'

const ChatInputBox = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-6'>
      <div className="flex items-center ">
        <span className="text-[#008189] text-6xl font-medium">Bolo</span>
        <span className="text-6xl font-thin">Beta.ai</span>
      </div>

      <div className='max-w-2xl p-2 w-full  border rounded-lg border-gray-600'>
        <Tabs defaultValue="search" className="w-[260px]">
         
          <TabsContent value="search">
          <Input type='text' className='outline-none p-4 border-none w-full focus:#fff' placeholder='Ask Anything' />

          </TabsContent>
          <TabsContent value="research">
          <Input type='text' className='outline-none p-4 border-none w-full focus:#fff' placeholder='Research Anything' />

          </TabsContent>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="research">Reserach</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

    </div>
  )
}

export default ChatInputBox