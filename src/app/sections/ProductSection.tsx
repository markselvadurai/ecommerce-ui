'use client';
import { FadeLoader } from "react-spinners";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Image from "next/image";

interface Product {
    title: string;
    image: string;
    collection: string;
}

export function ProductSection() {
    const [data, setData] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://147.93.41.222:4000/api/products";

        axios.get(apiUrl)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleFilter = (collection: string) => {
        setSearch(collection.toLowerCase());
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase());
    };

    const filteredData = useMemo(() => {
        if (!data) return []; // Return an empty array if no data is available
        const searchTerm = search.toLowerCase();

        if (searchTerm === "other") {
            // Exclude products where title or collection includes "snowboard"
            return data.filter((product) => {
                const inTitle = product.title?.toLowerCase().includes("snowboard");
                const inCollection = product.collection?.toLowerCase().includes("snowboard");
                return !inTitle && !inCollection;
            });
        }

        const result = data.filter((product) => {
            const collectionMatch = product.collection?.toLowerCase().includes(searchTerm);
            const titleMatch = product.title?.toLowerCase().includes(searchTerm);
            return collectionMatch || titleMatch; 
        });
        console.log("Filtered Data:", result); 
        return result;
    }, [data, search]);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <FadeLoader color="#FFFFFF" loading={loading} radius={150} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center">
                <p>Failed to load products. Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="mx-auto container grid lg:grid-cols-7 gap-5 my-5">
            <div className="col-span-1 flex flex-col gap-5">
                <button
                    className="text-white text-lg border font-bold"
                    onClick={() => handleFilter("")}
                >
                    View All
                </button>
                <button
                    className="text-white text-lg border font-bold"
                    onClick={() => handleFilter("Snowboard")}
                >
                    Snowboards
                </button>
                <button
                    className="text-white text-lg border font-bold"
                    onClick={() => handleFilter("Other")}
                >
                    Other
                </button>
            </div>
            <div className="lg:col-span-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    {filteredData && filteredData.length > 0 ? (
                        filteredData.map((product, index) => (
                            product.image && (
                                <div key={index} className="flex flex-col items-center bg-slate-900 border rounded-lg">
                                    <p className="text-white">{product.title}</p>
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={200}
                                        height={200}
                                        className="object-contain w-[200px] h-[200px] m-5"
                                    />
                                </div>
                            )
                        ))
                    ) : (
                        <p className="text-white">No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
