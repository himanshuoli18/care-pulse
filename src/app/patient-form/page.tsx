import Image from "next/image";
import Link from "next/link";

import PatientForm from "@/components/forms/PatientForm";

const Form = () => {
    return (

        // TODO: OTP Verification

        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <div className=' px-6 lg:px-8'>
                        <div className='mt-16 flow-root sm:mt-24'>
                            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                                <Image
                                    src="/assets/icons/logo-full.svg"
                                    height={1000}
                                    width={1000}
                                    alt="patient"
                                    className="mb-12 h-10 w-fit invert"
                                />

                                <PatientForm />

                                <div className="text-14-regular mt-20 flex justify-between">
                                    <p className="justify-items-end text-dark-600 xl:text-left">
                                        © 2024 CarePluse
                                    </p>
                                    <Link href="/?admin=true" className="text-rose-500 font-bold">
                                        Admin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Image
                src="/assets/images/onboarding-img.png"
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[50%]"
            />
        </div>
    );
};

export default Form