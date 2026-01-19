"use client";

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border-b border-white/10", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen: boolean;
    onClick: () => void;
}

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    AccordionTriggerProps
>(({ className, children, isOpen, onClick, ...props }, ref) => (
    <div className="flex">
        <button
            ref={ref}
            onClick={onClick}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-red-500 text-left cursor-pointer",
                isOpen ? "text-red-500" : "text-white/80",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown
                className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 text-white/50",
                    isOpen && "rotate-180"
                )}
            />
        </button>
    </div>
))
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
}

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    AccordionContentProps
>(({ className, children, isOpen, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "overflow-hidden text-sm transition-all",
            isOpen ? "max-h-96 pb-4" : "max-h-0",
            className
        )}
        {...props}
    >
        <div className="text-white/60 pt-0">{children}</div>
    </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
