"use client";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Clock from "@/components/elements/Clock";
import Alert from "@/components/elements/alerts/Alert";
import Pill from "@/components/elements/alerts/Pill";
import RecommendationIndexCard from "@/components/elements/cards/RecommendationIndexCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import { MonitorChildRecommendation } from "@/types/monitorChildRecommendation.type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Child } from "@/types/children.types";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import useProfile from "@/utils/useProfile";
import { getRecommendationImageUrl } from "@/utils/converters";

const getMonitoredRecToday = (
    monitorChildRec: MonitorChildRecommendation[]
) => {
    // get monitoring child recommendation with date_time greater than or equal to today
    monitorChildRec.filter(
        (item) => item.date_time.toDateString() === new Date().toDateString()
    );

    return monitorChildRec.length;
};

export default function HomeParent({}) {
    const [childs, setChilds] = useState<Child[]>();
    const { profile, isReady } = useProfile();

    const {
        data,
        isLoading,
    }: { data: { status: string; children: Child[] }; isLoading: boolean } =
        useSWR(
            isReady && profile?.id && `/api/parents/${profile?.id}/children`,
            fetcher
        );

    useEffect(() => {
        if (data?.children) {
            setChilds(data.children);
            // console.log(data.children);
        }
    }, [data]);

    return (
        <>
            <section className="mx-auto max-w-7xl mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                <div className="h-32 overflow-hidden p-4 rounded-lg bg-gradient-to-br from-purple-200 to-purple-100 sm:h-64 dark:from-purple-900 dark:to-purple-400">
                    <p className="text-primary -mb-1 dark:text-purple-100">
                        Selamat datang
                    </p>
                    <p className="text-primary font-semibold tracking-tight text-xl sm:text-3xl dark:text-purple-100">
                        {profile?.name || "Orang Tua"}
                    </p>
                </div>
                <Clock />
            </section>

            {isLoading ? (
                <>
                    <div className="mx-auto max-w-7xl">
                        <div className="skeleton w-full h-96 rounded-lg"></div>
                        <div className="flex gap-2 mt-3">
                            <div className="skeleton w-24 h-9 rounded-lg"></div>
                            <div className="skeleton w-24 h-9 rounded-lg"></div>
                        </div>
                    </div>
                </>
            ) : (
                childs?.length == 0 && (
                    <section className="mx-auto max-w-7xl">
                        <Alert
                            text="Anda belum memiliki data anak"
                            desc="Tambah data anak sekarang"
                            icon="info"
                            type="primary"
                            classnew="my-2"
                        />
                        <Button variant={"default"} asChild>
                            <Link href={"/p/childs/add"} className="gap-1">
                                <span>Tambah anak</span>
                                <span className="material-symbols-outlined !text-xl !leading-none pointer-events-none">
                                    person_add
                                </span>
                            </Link>
                        </Button>
                    </section>
                )
            )}

            {childs && childs?.length == 1 && <SingleChildCard data={childs} />}
            {childs && childs?.length > 1 && (
                <MultipleChildCard data={childs} />
            )}
        </>
    );
}

const SingleChildCard = ({ data }: { data: Child[] }) => {
    return (
        <section className="mx-auto max-w-7xl flex gap-2 p-3 border rounded-lg border-gray-300 dark:border-neutral-600">
            <div className="mb-2 group-[.open]:mb-2 group-[.open]:w-full sm:mb-0 sm:w-7/12 md:group-[.open]:mb-0 md:group-[.open]:w-7/12">
                <p className="font-semibold tracking-tighter text-large">
                    Aktifitas hari ini
                </p>
                <p className="text-gray-500 text-small dark:text-neutral-300">
                    Rekomendasi aktifitas yang harus anak ini lakukan atau
                    selesaikan, dengan mengikuti arahan dari rekomendasi yang
                    sesuai.
                </p>
                {data[0]?.child_recommendations?.length > 0 && (
                    <Alert
                        text={`${data[0].full_name} menggunakan asesmen M-Chart-R/F`}
                        desc="Asesmen M-Chart-R/F adalah untuk memonitoring anak autisme"
                        icon="info"
                        type="primary"
                        classnew="my-2"
                    />
                )}

                <div className="flex items-center mt-3">
                    <Pill
                        text={`Rekomendasi ${getMonitoredRecToday(
                            data[0]?.monitoringChildRecommendations?.[0]
                                ?.monitorRecommendations || []
                        )}/${data[0].child_recommendations?.length}`}
                        icon="assignment"
                        type="secondary"
                        classnew="w-fit"
                    />
                </div>

                {data[0]?.child_recommendations?.length === 0 ? (
                    <div className="my-6 text-center text-small">
                        <p>Tidak ada data rekomendasi anak</p>
                        <p>
                            Lakukan asesmen terlebih dahulu, anda dapat
                            menghubungi guru terkait
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-1 group-[.open]:grid-cols-2 md:group-[.open]:grid-cols-1">
                        {data[0]?.child_recommendations
                            ?.slice(0, 6)
                            .map((item, index) =>
                                item.recommendations ? (
                                    <RecommendationIndexCard
                                        key={index}
                                        recommendation={item.recommendations}
                                        monitoringChildRec={
                                            data[0]
                                                ?.monitoringChildRecommendations?.[0]
                                                ?.monitorRecommendations
                                        }
                                    />
                                ) : null
                            )}
                    </div>
                )}

                <div className="flex justify-end">
                    <Link
                        className={buttonVariants({
                            variant: "outline",
                        })}
                        href={`/p/childs/${data[0].id}/recommendation`}
                    >
                        Lihat detil{" "}
                        <span className="material-symbols-outlined ms-1 !leading-none !text-xl hover:no-underline">
                            folder_open
                        </span>
                    </Link>
                </div>
            </div>
            <div className="group-[.open]:w-full sm:w-5/12 md:group-[.open]:w-5/12">
                <AspectRatio ratio={8 / 9} className="bg-muted">
                    <Image
                        src={getRecommendationImageUrl({
                            image: data[0]?.child_recommendations[0]
                                ?.recommendations.icon,
                        })}
                        alt="Recomendation Image"
                        fill={true}
                        className="rounded-xl object-cover"
                        draggable={false}
                    />
                </AspectRatio>
            </div>
        </section>
    );
};

const MultipleChildCard = ({ data }: { data: Child[] }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="mx-auto max-w-7xl">
            <Carousel className="w-full" setApi={setApi}>
                <CarouselContent className="flex gap-3 w-full mx-auto max-w-7xl">
                    {data.map((child, index) => (
                        <CarouselItem
                            key={index}
                            className="w-full bg-white border border-gray-300 rounded-lg gap-2 p-3 group-[.open]:block sm:flex md:group-[.open]:flex dark:bg-neutral-800 dark:border-neutral-600"
                        >
                            <div className="mb-2 group-[.open]:mb-2 group-[.open]:w-full sm:mb-0 sm:w-7/12 md:group-[.open]:mb-0 md:group-[.open]:w-7/12">
                                <p className="font-semibold tracking-tighter text-large">
                                    Aktifitas hari ini
                                </p>
                                <p className="text-gray-500 text-small dark:text-neutral-400">
                                    Rekomendasi aktifitas yang harus anak ini
                                    lakukan atau selesaikan, dengan mengikuti
                                    arahan dari rekomendasi yang sesuai.
                                </p>

                                {child?.child_recommendations?.length > 0 && (
                                    <Alert
                                        text={`${child.full_name} menggunakan asesmen M-Chart-R/F`}
                                        desc="Asesmen M-Chart-R/F adalah untuk memonitoring anak autisme"
                                        icon="info"
                                        type="primary"
                                        classnew="my-2"
                                    />
                                )}

                                <div className="flex items-center">
                                    <Pill
                                        text={`Rekomendasi ${
                                            child?.finishedRecommendations +
                                            "/" +
                                            child?.unfinishedRecommendations
                                        }`}
                                        icon="assignment"
                                        type="secondary"
                                        classnew="w-fit"
                                    />

                                    {/* <Link
                            href={"/p/assessment"}
                            className="text-small flex gap-1 items-center hover:underline"
                        >
                            Lihat detil
                            <span className="material-symbols-outlined !leading-none !text-xl hover:no-underline">
                                folder_open
                            </span>
                        </Link> */}
                                </div>

                                {child?.child_recommendations?.length === 0 ? (
                                    <div className="my-6 text-center text-small">
                                        <p>Tidak ada data rekomendasi anak</p>
                                        <p>
                                            Lakukan asesmen terlebih dahulu,
                                            anda dapat menghubungi guru terkait
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 sm:grid-cols-1 group-[.open]:grid-cols-2 md:group-[.open]:grid-cols-1">
                                        {child?.child_recommendations
                                            ?.slice(0, 6)
                                            .map((item, index) =>
                                                item.recommendations ? (
                                                    <RecommendationIndexCard
                                                        key={index}
                                                        recommendation={
                                                            item.recommendations
                                                        }
                                                        isFinished={
                                                            item?.isFinished ||
                                                            false
                                                        }
                                                    />
                                                ) : null
                                            )}
                                    </div>
                                )}

                                {child?.child_recommendations &&
                                    child?.child_recommendations?.length >
                                        0 && (
                                        <div className="flex justify-end">
                                            <Link
                                                className={buttonVariants({
                                                    variant: "outline",
                                                })}
                                                href={`/p/childs/${child.id}/recommendation`}
                                            >
                                                Lihat detil{" "}
                                                <span className="material-symbols-outlined ms-1 !leading-none !text-xl hover:no-underline">
                                                    folder_open
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                            </div>
                            <div className="group-[.open]:w-full sm:w-5/12 md:group-[.open]:w-5/12">
                                <AspectRatio ratio={8 / 9} className="bg-muted">
                                    <Image
                                        src={getRecommendationImageUrl({
                                            image: child
                                                ?.child_recommendations[0]
                                                ?.recommendations.icon,
                                        })}
                                        alt="Recomendation Image"
                                        fill={true}
                                        className="rounded-xl object-cover"
                                        draggable={false}
                                    />
                                </AspectRatio>
                            </div>
                            {/* </section> */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselNext /> */}
            </Carousel>

            <div className="flex gap-2 mt-2 mb-4">
                <Button
                    variant={"outline"}
                    onClick={() => api?.scrollPrev()}
                    disabled={count === 0 || !api}
                >
                    Sebelumnya
                </Button>
                <Button
                    variant={"outline"}
                    onClick={() => api?.scrollNext()}
                    disabled={count === current || !api}
                >
                    Selanjutnya
                </Button>
            </div>
        </section>
    );
};
