import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CoachingExpert } from "@/services/Options"
import Image from "next/image"
import { useState } from "react"

export function UserInputDialog({children, coachingOption}) {
  const [selectedExpert, setSelectedExpert] = useState(null)
  const {topic, setTopic} = useState(null)
  const createDiscussionRoom = useMutation(api.discussionRoom.createNewRoom);

  const onClickNext = async () => {
    const ressult = await createDiscussionRoom({
      coachingOptions: coachingOption?.name,
      topic: topic,
      expertName: selectedExpert,
    });
  }
  
  return (
    <Dialog>
      <DialogTrigger>
        {/* <Button variant="outline">{children}</Button> */}
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{coachingOption.name}</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2 className="">
                Enter topic you wish to master your skills in {coachingOption.name}
              </h2>
              <Textarea placeholder="e.g. React, JavaScript, CSS" className="mt-2" onChange={() => setTopic(e.target.value)}/>
              <h2 className="mt-4">
                Select your AI coach
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-2">
                {CoachingExpert.map((expert, index) => (
                  <div key={index} className="flex flex-col items-center space-x-3" onClick={() => setSelectedExpert(expert.name)}>
                    <Image src={expert.avatar} alt={expert.name} width={100} height={100} 
                    className={`rounded-2xl h-[80px] w-[80px] object-cover hover:scale-105 transition-all cursor-pointer p-1 border-primary
                      ${selectedExpert == expert.name && 'border'}`} />
                    <h2>{expert.name}</h2>
                  </div>
                ))  
                }
              </div>
              <div className="flex gap-5 mt-5 justify-end">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." className="mt-2" />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent> 
     </Dialog>
  )
}
