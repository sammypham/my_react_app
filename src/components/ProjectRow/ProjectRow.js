import ProjectCardSmall from "../ProjectCardSmall/ProjectCardSmall"
import './ProjectRow.css'
import {useRef, useState, useEffect} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectRow = () => {
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollableLeft, setIsScrollableLeft] = useState(false);
    const [isScrollableRight, setIsScrollableRight] = useState(false);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        setIsScrollableLeft(container.scrollLeft > 0);
        setIsScrollableRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        
        handleScroll()

        container.addEventListener('scroll', handleScroll);

        return () => {
        container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scroll = (scrollAmount) => {
        if (!isScrolling) {
        setIsScrolling(true);
        const container = containerRef.current;
        if (container) {
            container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
            });
            setTimeout(() => {
            setIsScrolling(false);
            }, 500); // Adjust delay as needed
        }
        }
    };

    const scrollLeft = () => {
        scroll(-calculateScrollAmount());
    };

    const scrollRight = () => {
        scroll(calculateScrollAmount());
    };

    const calculateScrollAmount = () => {
        const container = containerRef.current;
        if (!container) return 0;
        
        const children = Array.from(container.children);
        const totalChildrenWidth = children.reduce(
        (totalWidth, child) => totalWidth + child.offsetWidth + parseInt(getComputedStyle(child).marginRight)*2,
        0
        );

        const scrollAmount = totalChildrenWidth / children.length
        
        return scrollAmount;
    };

    return (
        <div className="projects-container">
            <h1>
                Project Category
            </h1>
            <div className="projects-outer-container">
                {isScrollableLeft && <button className="scroll-button-left" onClick={scrollLeft}><FaChevronLeft /></button>}
                {isScrollableRight && <button className="scroll-button-right" onClick={scrollRight}><FaChevronRight /></button>}
                <div className="projects-container-scroll" ref={containerRef}>
                <ProjectCardSmall />
                <ProjectCardSmall />
                <ProjectCardSmall />
                </div>
            </div>
        </div>
    )
}

export default ProjectRow