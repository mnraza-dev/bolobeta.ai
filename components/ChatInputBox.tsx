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
import { Atom, Cpu, Globe, Mic, Paperclip, SearchCheckIcon } from 'lucide-react'

const ChatInputBox = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-6'>
      <div className="flex items-center ">
        <span className="text-[#008189] text-6xl font-medium">Bolo</span>
        <span className="text-6xl font-thin">Beta.ai</span>
      </div>

      <div className='max-w-2xl flex justify-between items-end p-2 w-full border rounded-xl border-gray-600'>
        <Tabs defaultValue="search" className="w-[260px] bg-transparent">

          <TabsContent value="search">
            <Input type='text' className='outline-none p-4 border-none w-full focus:#fff' placeholder='Ask Anything' />

          </TabsContent>
          <TabsContent value="research">
            <Input type='text' className='outline-none p-4 border-none w-full focus:#fff' placeholder='Research Anything' />

          </TabsContent>
          <TabsList className="grid w-full gap-2   grid-cols-2">
            <TabsTrigger className='bg-transparent rounded-full text-primary ' value="search"><SearchCheckIcon /> Search</TabsTrigger>
            <TabsTrigger className='bg-transparent  rounded-full text-primary ' value="research"><Atom /> Research</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className='flex items-center gap-2 mb-2'>
          <Cpu   className='text-primary rounded-full  hover:text-gray-800 bg-gray-200 p-[4px]  cursor-pointer' size={22} />
          <Globe   className='text-primary rounded-full hover:text-gray-800 bg-gray-200 p-[4px]  cursor-pointer' size={22} />
          <Paperclip   className='text-primary rounded-full  hover:text-gray-800 bg-gray-200 p-[4px] cursor-pointer' size={22} />
          <Mic   className='text-primary rounded-full hover:text-gray-800 bg-gray-200 p-[4px]  cursor-pointer' size={22} />
        </div>
      </div>


    </div>
  )
}

export default ChatInputBox