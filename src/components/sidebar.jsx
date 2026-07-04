import React from 'react'
import close from '../assets/close.png'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    const sections = [
    { title: "Intro", href: "#intro" },
    { title: "Galeria", href: "#gallery" },
    { title: "Workshop", href: "#workshop" },
    /*  { title: "Experiências" },
    { title: "Depoimentos" },
    */  { title: "Sobre", href: "#about" }
    ]

    return (
    <>
        {sidebarOpen && (
            <div
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
            />
        )}
        <aside className={`fixed top-0 right-0 h-full w-72 bg-black border-l-4 border-l-primary z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}    >
            <button
            onClick={() => setSidebarOpen(false)}
            className="p-4 text-primary"
            >
                <img src={close} alt="Close" className="w-10" />
            </button>
            <ul>
                {sections.map((item, index) => (
                    <li
                    key={index}
                    className="border-b-4 border-b-primary"
                    >
                    <a href={item.href} className="block py-4 px-6 text-primary font-audiowide uppercase text-3xl hover:bg-gray-700">{item.title}</a>
                    </li>
                ))}
            </ul>
        </aside>
    </>
  )
}

export default Sidebar