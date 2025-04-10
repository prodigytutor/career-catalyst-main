"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from "@/convex/_generated/api"
import { CoachingExpert } from '@/services/Options';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { UserButton } from '@stackframe/stack';
import { Button } from '@/components/ui/button';

const RecordRTC = dynamic(() => import('recordrtc'), { ssr: false });

const DiscussionRoom = () => {
  const { roomId } = useParams();
  const [expert, setExpert] = useState(null);
  const discussionRoomData = useQuery(api.discussionRoom.getDiscussionRoom, { id: roomId });
  const [enableMicrophone, setEnableMicrophone] = useState(false);
  const recorder = useRef(null);

  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null);


  let silenceTimeout = 2000;
  console.log("discussionRoomData", discussionRoomData)
  useEffect(() => {
    const expert = CoachingExpert.find((expert) => expert.name === discussionRoomData?.expertName)
    console.log("expert", expert)
    setExpert(expert); 
  }, [discussionRoomData])
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      mediaRecorder.onstop = () => {
        // Handle the recorded audio data here, e.g., upload to a server or play it.
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        // Do something with audioUrl or audioBlob
        setAudioChunks([]);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const ConnectToServer = () => {
     startRecording();
    setEnableMicrophone(true);
  }
  const disconnect = (e) => {
    e.preventDefault();
    console.log("disconnect")
    stopRecording();
  }
  // const ConnectToServer = () => {
  //   if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  //     navigator.mediaDevices.getUserMedia({ audio: true })
  //       .then((stream) => {
  //         recorder.current = new RecordRTC(stream, {
  //           type: 'audio',
  //           mimeType: 'audio/webm',
  //           recorderType: RecordRTC.StereoAudioRecorder,
  //           timeSlice: 250,
  //           desiredSampRate: 16000,
  //           numberOfAudioChannels: 1,
  //           bufferSize: 4096,
  //           audioBitsPerSecond: 128000,
  //           ondataavailable: async (blob) => {
  //             if (silenceTimeout) clearTimeout(silenceTimeout);

  //             const buffer = await blob.arrayBuffer();

  //             console.log(buffer);

  //             silenceTimeout = window.setTimeout(() => {
  //               console.log('User stopped talking');
  //             }, 2000);
  //           },
  //         });

  //         const startRecording = () => {
  //           if (recorder.current) {
  //             recorder.current.startRecording();
  //           }
  //         };
  //         startRecording();
  //         setEnableMicrophone(true);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }
  // const disconnect = (e) => {
  //   e.preventDefault();
  //   console.log("disconnect")
  //   if (recorder.current) {
  //     recorder.current.pauseRecording(() => {
  //       const blob = recorder.current.getBlob();
  //       // Do something with the blob, like upload it to a server or save it locally
  //       console.log(blob);
  //     });
  //     recorder.current=null;
  //   }
  //   setEnableMicrophone(false);
  // }

  return (
    <div className='mt-5 flex flex-col justify-between bg-gray-50'>
      <h2 className='text-lg font-bold'>{discussionRoomData?.coachingOptions}</h2>
      <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2 h-[60vh] bg-secondary border rounded-4xl flex flex-col items-center justify-center relative'>
          <div className='mt-12 h-[60vh] bg-secondary items-center justify-center'>
            <Image src={expert?.avatar || "/t3.jpg"} alt={expert?.name || "Expert Avatar"} width={200} height={200} className="rounded-full object-cover" />
            <h2 className='text-gray-500'>{expert?.name}</h2>
            <div className='p-5 bg-gray-200 px-10 rounded-lg absolute bottom-10 right-10'>
              <UserButton />
            </div>
          </div>
          <div>
            {!enableMicrophone ? <Button variant="outline" className='mt-5 flex items-center justify-center' onClick={ConnectToServer}>
              Join Discussion Room
            </Button>
            : <Button variant="destructive" className='mt-5 flex items-center justify-center' onClick={disconnect}>
              Leave Discussion Room
            </Button>} 
          </div>
        </div>
        <div>
          <div className='h-[60vh] bg-secondary border rounded-4xl flex flex-col items-center justify-center relative'>
            <h2>Chat Section</h2>
          </div>
          <h2 className='mr-5'>At the end of your conversation we will automatically generate feedback/notes from your conversation.</h2>
        </div>
      </div>
    </div>
  )
}

export default DiscussionRoom;

