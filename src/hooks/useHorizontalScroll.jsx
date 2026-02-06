import { useEffect } from "react";

export function useHorizontalScroll(ref) {
    useEffect(() => {
        const el = ref.current
        if (!el) return

        const onWheel = (e) => {
            e.preventDefault()
            el.scrollBy({
                left: e.deltaY,
                behavior: "auto",
            })
        }

        el.addEventListener("wheel", onWheel, {passive: false})

        return () => el.removeEventListener("wheel", onWheel)
    }, [ref])
}