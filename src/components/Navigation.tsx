import { useEffect, useState } from "react";
import { MIN_PAGE_CONTENT_HEIGHT } from "../constants";
import utils from "../utils";
import ActivePages from "../pages/ActivePages";

type NavLinkProps = {
    href: string;
    text: string;
    scrollActive?: boolean;
};

type NavigationProps = {
    pageContentRef?: Map<string, React.RefObject<HTMLDivElement> | null>;
};

function NavLink({ href, text, scrollActive = false }: NavLinkProps) {
    return (
        <li className="w-full">
            <a
                href={href}
                className={`flex items-center justify-end w-full text-xl border-b-2 border-transparent group ${scrollActive && "flashlight"
                    }`}
            >
                <span className={`mr-2 ${scrollActive && "font-bold"}`}>
                    {text}
                </span>
                {/* Indicator */}
                <span
                    className={`${scrollActive ? "w-1/2 h-1" : "w-8"
                        } group-hover:w-1/2 transition-[width] duration-300 bg-[#46B49F] h-[2px] border-none text-transparent`}
                >
                </span>
            </a>
        </li>
    );
}

function Navigation({ pageContentRef }: NavigationProps) {
    const [scrollY, setScrollY] = useState(Math.floor(window.scrollY));

    const activePadding = 50;

    // Initialize active page height
    const pageActiveHeights = new Map();

    const pagesRefId: string[] = [];
    ActivePages.forEach((page, index) => {
        if (index == 0) {
            return;
        }

        if (index == 1) {
            pageActiveHeights.set(page.id, MIN_PAGE_CONTENT_HEIGHT);
        } else {
            if (pageContentRef) {
                pageActiveHeights.set(
                    page.id,
                    pageContentRef.get(pagesRefId[index - 2])?.current
                        ?.clientHeight +
                    pageActiveHeights.get(pagesRefId[index - 2]),
                );
            }
        }
        pagesRefId.push(page.id);
    });

    const pageScrollActive = new Map<string, boolean>();

    ActivePages.forEach((page, index) => {
        if (index == 0) {
            return;
        } else {
            if (index != ActivePages.length - 1) {
                const nextPage = ActivePages[index + 1];
                const isPageActive = utils.between(
                    scrollY,
                    pageActiveHeights.get(page.id) - activePadding,
                    pageActiveHeights.get(nextPage.id) - activePadding,
                );
                pageScrollActive.set(page.id, isPageActive);
            } else {
                const isPageActive = scrollY >= pageActiveHeights.get(page.id);
                pageScrollActive.set(page.id, isPageActive);
            }
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(Math.floor(window.scrollY));
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <ul>
                {ActivePages
                    .filter((page) => page.page != "Intro")
                    .map((page) => (
                        <NavLink
                            href={"#" + page.id}
                            text={page.page}
                            scrollActive={pageScrollActive.get(page.id)}
                            key={page.id}
                        />
                    ))}
            </ul>
        </div>
    );
}

export default Navigation;
