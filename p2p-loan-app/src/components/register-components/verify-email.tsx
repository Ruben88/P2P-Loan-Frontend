'use client';
import React, { useState } from 'react';
import { useFormStore } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import StepIndicator from '@/components/register-components/step-indicator';
import Image from 'next/image';
import { Loader2, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const VerifyEmail: React.FC = () => {
  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Verify BVN' },
    { number: 3, label: 'Choose Wallet' },
    { number: 4, label: 'Verify Email ' },
  ];
  const { formData, updateFormData, prevStep } = useFormStore();
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDone = async () => {
    localStorage.removeItem('step');
    router.push('/login');
  };

  // const handleBack = () => {
  //   prevStep();
  // };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-[450px]">
        <div className="flex items-center justify-center mt-8">
          <div className="w-full max-w-2xl text-center">
            <StepIndicator />
          </div>
        </div>
        {/* <button className="flex items-center" onClick={handleBack}>
          <Image src="/chevron_back.svg" alt="Back" width={20} height={20} />
          <span className="text-sm">Back</span>
        </button> */}
        <div className="flex flex-col items-center justify-center mt-8">
          <Image src={'/email-icon.svg'} alt="email" width={60} height={100} />
          <h1 className="font-bold text-base">Check Your Email</h1>
          <p className="text-center mt-2 text-sm">
            We've sent a confirmation email to your inbox. Please click the link
            in the email to complete your registration.
          </p>
          {/* <h1 className="mt-4 flex">
            Didn't receive any mail?
            <button>
              <span className="text-blue-400">Click to resend</span>
            </button>
          </h1> */}
          <div className="flex items-center mt-4 gap-2">
            <Button
              onClick={handleDone}
              className="bg-blue-600 hover:bg-blue-800 px-4 h-8 text-sm"
            >
              Go to the login page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
