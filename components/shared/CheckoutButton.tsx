"use client"

import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import { SignedOut, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({ event }: {event: IEvent }) => {
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;

    const hasEventFinished = new Date(event.endDateTime) < new Date();
  return (
    <div className='flex items-center gap-3'>
        {hasEventFinished ? (
            <p className='p-2 text-red-400'>Sorry, tickets are no longer available.</p>
        ): (
            <>
            <SignedOut>
                <Button asChild className='' size='lg'>
                    <Link 
                        href='/sign-in'
                    >
                        Get Tickets
                    </Link>
                </Button>
                <Checkout event={event} userId={userId} />
            </SignedOut>
            </>
        )}
        
    </div>
  )
}

export default CheckoutButton