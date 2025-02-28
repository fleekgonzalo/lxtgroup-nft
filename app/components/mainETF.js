"use client";
import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <main className="mb-8">
      <section id="main-etf" className="justify-between bg-neutral">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://storage.fleek-internal.com/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/crypto_etf2.png"
              alt="BioTech"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-primary">ETF</h2>
            <p>
              Our primary goal is to establish a wealth strategy for our clients
              through the use of Artificial Intelligence-driven Quantitative
              trading,
            </p>
            <h4 className="text-xl font-medium text-primary">SEC Approved</h4>
            <p className="mt-1 text-secondary">
              Multi-asset forex & crypto brokerage service
            </p>
            <h4 className="text-xl font-medium text-primary">
              Licensed Management
            </h4>
            <p className="mt-1 text-secondary">
              Led by experienced brokers, traders & data scientists.
            </p>
            <h4 className="text-xl font-medium text-primary">
              Generative AI & ML
            </h4>
            <p className="mt-1 text-secondary">
              Dynamic AI & ML driven algorithms.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary uppercase rounded-md w-24">
                <Link href="/etf">More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
