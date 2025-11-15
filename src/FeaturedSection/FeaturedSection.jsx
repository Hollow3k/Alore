import React , {useEffect, useRef} from "react";
import "./FeaturedSection.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Featured } from "../Featured/Featured.jsx";
gsap.registerPlugin(ScrollTrigger);

export function FeaturedSection() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        
        if (!section || !wrapper) return;

        // Clear existing triggers
        ScrollTrigger.getAll().forEach(st => st.kill());

        const contents = gsap.utils.toArray(".featured-content", section);
        
        gsap.to(contents, {
            xPercent: -100 * (contents.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                pin: true,
                scrub: 0.5,
                snap: {
                    snapTo: 1 / (contents.length - 1),
                    duration: { min: 0.1, max: 0.3 },
                    delay: 0,
                    ease: "power1.inOut",
                    inertia: false
                },
                end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
                anticipatePin: 1,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section id="featured-section" className="featured-section" ref={sectionRef}>
            <div className="featured-wrapper" ref={wrapperRef}>
                <div className="featured-content">
                    <Featured src="/goldNeck.png" title="Aloré Seren" price="$9,000" />
                </div>
                <div className="featured-content">
                    <Featured src="/greenNeck.png" title="Aloré Éclat" price="$11,000" />
                </div>
                <div className="featured-content">
                    <Featured src="/redNeck.png" title="Aloré Lumé" price="$23,000" />
                </div>
            </div>
        </section>
    );
}