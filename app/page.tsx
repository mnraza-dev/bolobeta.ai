import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import React from 'react'

const Home = () => {
  return (
    <div className='p-8 flex gap-2'>
      <Label>
        Home
      </Label>
      <Button variant={"default"} size={"lg"}>
        Hello
      </Button>
    </div>
  )
}

export default Home