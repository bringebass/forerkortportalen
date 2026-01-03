"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-white border-b border-slate-200" aria-label="Breadcrumb">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link 
              href="/" 
              className="text-slate-500 hover:text-slate-700 transition-colors flex items-center"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Hjem</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.url}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

