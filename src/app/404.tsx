"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <body className="w-full h-screen p-10 bg-green-600">
            <section className="bg-white w-screen h-screen flex justify-center items-center">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        hye mother hbkchdbhsdbkchb
                        {/* <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue ">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl ">
                            Something&apos;s Went Wrong!
                        </p>
                        <p className="mb-4 text-xl font-light text-lightblack ">
                            Whoops! The page you are looking for could not be
                            found{" "}
                        </p>
                        <Link
                            href="/"
                            className="inline-flex text-white bg-blue  font-medium rounded-lg text-lg px-5 py-4 text-center my-4"
                        >
                            Back to Homepage
                        </Link> */}
                    </div>
                </div>
            </section>
        </body>
    );
};

export default NotFound;
