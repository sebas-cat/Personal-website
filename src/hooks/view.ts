import { useEffect, useRef, useState } from "react";

export const View = <T extends Element>() => {
    const ref = useRef<T>(null)
    const [inView, setView] = useState(false)

    useEffect(() => {
        const element =ref.current
        if (!element) return

        const observer = new IntersectionObserver(
           ([entry]) => {
            if (entry.isIntersecting){ 
            setView(true)
            observer.disconnect()
            }
        },
        {threshold: 0.2},
    )
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return {ref, inView}
}