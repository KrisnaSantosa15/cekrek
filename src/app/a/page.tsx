"use client";

import Clock from "@/components/elements/Clock";
import useProfile from "@/utils/useProfile";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

export default function HomeAdmin() {
    const { profile, isReady } = useProfile();

    return (
        <>
            <section className="mx-auto max-w-7xl mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="h-32 overflow-hidden p-4 rounded-lg bg-gradient-to-br from-purple-200 to-purple-100 sm:h-64 dark:from-purple-900 dark:to-purple-400">
                    <p className="text-primary -mb-1 dark:text-purple-100">
                        Selamat Datang
                    </p>
                    <p className="text-primary font-semibold tracking-tight text-xl sm:text-3xl dark:text-purple-100">
                        {profile?.name || "Admin"}
                    </p>
                </div>
                <Clock />
            </section>
            <section className="mx-auto max-w-7xl rounded-xl mb-4">
                <div className="items-center justify-between mb-4 sm:flex">
                    <p className="text-header">Aktifitas Terakhir</p>
                    {/* <div className="flex">
                        <label className="input w-full input-bordered rounded-lg flex items-center gap-2 py-2 px-3 text-sm h-fit min-h-fit mt-2 sm:w-fit sm:mt-0">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Search"
                            />
                            <span className="material-symbols-outlined !text-xl !leading-4 opacity-70">
                                search
                            </span>
                        </label>
                    </div> */}
                </div>

                <div className="border border-gray-300 rounded-lg p-3 dark:border-neutral-600">
                    <div>
                        <p className="text-gray-500 font-semibold text-small">
                            29 Juni 2024
                        </p>
                        <div className="divider my-1 dark:after:!bg-neutral-600 dark:before:!bg-neutral-600"></div>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <div className="border border-gray-300 rounded-lg overflow-hidden w-16 dark:border-neutral-600">
                            <AspectRatio
                                ratio={1 / 1}
                                className="w-full h-full"
                            >
                                <Image
                                    src={"/static/images/recommendation.png"}
                                    alt="Recomendation Image"
                                    fill={true}
                                    className="rounded-lg object-cover"
                                    draggable={false}
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Dwi melakukan monitoring</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <div className="border border-gray-300 rounded-lg overflow-hidden w-16 dark:border-neutral-600">
                            <AspectRatio
                                ratio={1 / 1}
                                className="w-full h-full"
                            >
                                <Image
                                    src={"/static/images/recommendation.png"}
                                    alt="Recomendation Image"
                                    fill={true}
                                    className="rounded-lg object-cover"
                                    draggable={false}
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Suyastika melakukan monitoring</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <div className="border border-gray-300 rounded-lg overflow-hidden w-16 dark:border-neutral-600">
                            <AspectRatio
                                ratio={1 / 1}
                                className="w-full h-full"
                            >
                                <Image
                                    src={"/static/images/recommendation.png"}
                                    alt="Recomendation Image"
                                    fill={true}
                                    className="rounded-lg object-cover"
                                    draggable={false}
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Guru Ahmad melakukan monitoring</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 font-semibold text-small">
                            29 Juni 2024
                        </p>
                        <div className="divider my-1 dark:after:!bg-neutral-600 dark:before:!bg-neutral-600"></div>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <div className="border border-gray-300 rounded-lg overflow-hidden w-16 dark:border-neutral-600">
                            <AspectRatio
                                ratio={1 / 1}
                                className="w-full h-full"
                            >
                                <Image
                                    src={"/static/images/recommendation.png"}
                                    alt="Recomendation Image"
                                    fill={true}
                                    className="rounded-lg object-cover"
                                    draggable={false}
                                />
                            </AspectRatio>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>Juana melakukan monitoring</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
