"use client";
import { useEffect } from "react";

export default function useAutoReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    } else {
                        entry.target.classList.remove("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}