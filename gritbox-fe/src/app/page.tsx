'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-[var(--font-inter)]">
            Welcome to <span className="text-blue-600 dark:text-blue-400">GritBox</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-[var(--font-inter)]">
            A space for ideas, creativity, and innovation. Explore our blog, discover free resources, 
            and connect with our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Link 
              href="/blog"
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-[var(--font-inter)]">Blog</h2>
              <p className="text-gray-600 dark:text-gray-300 font-[var(--font-inter)]">Read our latest articles and insights</p>
            </Link>

            <Link 
              href="/projects"
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-[var(--font-inter)]">Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 font-[var(--font-inter)]">Explore our case studies and art projects</p>
            </Link>

            <Link 
              href="/freebies"
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-[var(--font-inter)]">Free Resources</h2>
              <p className="text-gray-600 dark:text-gray-300 font-[var(--font-inter)]">Download our free tools and resources</p>
            </Link>

            <Link 
              href="/contact"
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-[var(--font-inter)]">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300 font-[var(--font-inter)]">Get in touch with our team</p>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-[var(--font-inter)]"
            >
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors font-[var(--font-inter)]"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
