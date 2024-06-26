import { ChildRecommendation } from "@/types/childRecommendation.type";
import { Child } from "@/types/children.types";
import { MonitorChildRecommendation } from "@/types/monitorChildRecommendation.type";
import { Recommendation } from "@/types/recommendation.type";

// Data untuk Recommendation
const recommendations: Recommendation[] = [
    {
        id: 1,
        assesment_number: 1,
        is_main: true,
        title: "Peningkatan Pola Makan",
        description: "Anak perlu meningkatkan asupan sayuran dan buah-buahan.",
        icon: "default.jpg",
        frequency: "Harian",
        risk_category: "rendah",
    },
    {
        id: 2,
        assesment_number: 2,
        is_main: false,
        title: "Olahraga Teratur",
        description:
            "Anak perlu melakukan olahraga ringan seperti bersepeda atau berenang.",
        icon: "default.jpg",
        frequency: "Mingguan",
        risk_category: "sedang",
    },
    {
        id: 3,
        assesment_number: 3,
        is_main: true,
        title: "Konsultasi Psikolog",
        description:
            "Anak perlu berkonsultasi dengan psikolog untuk menangani kecemasan.",
        icon: "default.jpg",
        frequency: "Bulanan",
        risk_category: "tinggi",
    },
];

// Data untuk ChildRecommendation
const childRecommendations: ChildRecommendation[] = [
    {
        id: 1,
        children_id: 1,
        recommendation_id: 1,
        children: {
            id: 1,
            full_name: "Ahmad",
            teacher_id: 2,
            nick_name: "Aham",
            picture: "ahmad.jpg",
            gender: "Laki-laki",
            place_birth: "Jakarta",
            date_time_birth: new Date("2010-05-15"),
            religion: "Islam",
            count_of_siblings: 2,
            risk_category: "sedang",
            hearing_test: "pendengaran dalam batas normal",
            child_assesments: [
                {
                    date_time: new Date("2023-01-01"),
                    assesment: [
                        {
                            id: 1,
                            children_id: 1,
                            assesment_id: 1,
                            answer: "Lulus",
                            date_time: new Date("2024-06-25"),
                            assesments: {
                                id: 1,
                                assesment_number: 1,
                                question: "Pertanyaan 1",
                                picture: "default.jpg",
                            },
                        },
                    ],
                },
            ],
        },
        recommendation: recommendations[0],
    },
    {
        id: 2,
        children_id: 1,
        recommendation_id: 2,
        children: {
            id: 1,
            full_name: "Ahmad",
            teacher_id: 2,
            nick_name: "Aham",
            picture: "ahmad.jpg",
            gender: "Laki-laki",
            place_birth: "Jakarta",
            date_time_birth: new Date("2010-05-15"),
            religion: "Islam",
            count_of_siblings: 2,
            risk_category: "sedang",
            hearing_test: "pendengaran dalam batas normal",
            child_assesments: [
                {
                    date_time: new Date("2023-01-01"),
                    assesment: [
                        {
                            id: 1,
                            children_id: 1,
                            assesment_id: 1,
                            answer: "Lulus",
                            date_time: new Date("2024-06-25"),
                            assesments: {
                                id: 1,
                                assesment_number: 1,
                                question: "Pertanyaan 1",
                                picture: "default.jpg",
                            },
                        },
                    ],
                },
            ],
        },
        recommendation: recommendations[1],
    },
];

const monitorChildRecommendation: MonitorChildRecommendation[] = [
    {
        id: 1,
        child_recommendation_id: 1,
        date_time: new Date("2024-06-26"),
        is_done: true,
        child_recommendation: childRecommendations[0],
    },
    // {
    //     id: 2,
    //     date_time: new Date("2010-06-26"),
    //     is_done: true,
    //     child_recommendation: childRecommendations[0],
    // },
];

const childs: Child[] = [
    {
        id: 1,
        full_name: "Aulia Rahman",
        teacher_id: 2,
        nick_name: "Aul",
        picture: "default.jpg",
        gender: "Laki-laki",
        place_birth: "Jakarta",
        date_time_birth: new Date("2010-05-12"),
        religion: "Islam",
        count_of_siblings: 2,
        risk_category: "sedang",
        hearing_test: "pendengaran dalam batas normal",
        child_assesments: [
            {
                date_time: new Date("2024-06-25"),
                assesment: [
                    {
                        id: 1,
                        children_id: 1,
                        assesment_id: 1,
                        answer: "Lulus",
                        date_time: new Date("2024-06-25"),
                        assesments: {
                            id: 1,
                            assesment_number: 1,
                            question: "Pertanyaan 1",
                            picture: "default.jpg",
                        },
                    },
                ],
            },
            {
                date_time: new Date("2024-07-03"),
                assesment: [
                    {
                        id: 1,
                        children_id: 1,
                        assesment_id: 1,
                        answer: "Lulus",
                        date_time: new Date("2024-07-03"),
                        assesments: {
                            id: 1,
                            assesment_number: 1,
                            question: "Pertanyaan 1 - 2",
                            picture: "default.jpg",
                        },
                    },
                ],
            },
        ],
        child_recommendation: [
            {
                id: 1,
                children_id: 1,
                recommendation_id: 1,
                recommendation: recommendations[0],
            },
            {
                id: 2,
                children_id: 1,
                recommendation_id: 2,
                recommendation: recommendations[1],
            },
        ],
        monitoringChildRecommendation: monitorChildRecommendation,
    },
    {
        id: 23,
        full_name: "Fakhri Rahman",
        teacher_id: 2,
        nick_name: "Aul",
        picture: "default.jpg",
        gender: "Laki-laki",
        place_birth: "Jakarta",
        date_time_birth: new Date("2010-05-12"),
        religion: "Islam",
        count_of_siblings: 2,
        risk_category: "sedang",
        hearing_test: "pendengaran dalam batas normal",
        child_assesments: [
            {
                date_time: new Date("2024-06-25"),
                assesment: [
                    {
                        id: 1,
                        children_id: 1,
                        assesment_id: 1,
                        answer: "Lulus",
                        date_time: new Date("2024-06-25"),
                        assesments: {
                            id: 1,
                            assesment_number: 1,
                            question: "Pertanyaan 1",
                            picture: "default.jpg",
                        },
                    },
                ],
            },
            {
                date_time: new Date("2024-07-03"),
                assesment: [
                    {
                        id: 1,
                        children_id: 1,
                        assesment_id: 1,
                        answer: "Lulus",
                        date_time: new Date("2024-07-03"),
                        assesments: {
                            id: 1,
                            assesment_number: 1,
                            question: "Pertanyaan 1 - 2",
                            picture: "default.jpg",
                        },
                    },
                ],
            },
        ],
        child_recommendation: [
            {
                id: 1,
                children_id: 1,
                recommendation_id: 1,
                recommendation: recommendations[0],
            },
            {
                id: 2,
                children_id: 1,
                recommendation_id: 2,
                recommendation: recommendations[1],
            },
        ],
        monitoringChildRecommendation: monitorChildRecommendation,
    },
];

export {
    recommendations,
    childRecommendations,
    childs,
    monitorChildRecommendation,
};
